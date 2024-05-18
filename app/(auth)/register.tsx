import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";

import { Check as CheckIcon } from "@tamagui/lucide-icons";
import type { CheckboxProps, SizeTokens } from "tamagui";
import { Checkbox, Label, XStack, YStack } from "tamagui";
import { useState } from "react";
import axios from "axios";
import { environment } from "@/environment";
import useMainState from "@/hooks/useMainState";

export default function Register() {
	const { setPhone: persistUserPhone } = useMainState();

	const [isChecked, setIsChecked] = useState(false);
	const [fullname, setFullname] = useState("");
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");

	const [isLoading, setLoading] = useState(false);

	const registerFn = async () => {
		try {
			setLoading(true);
			const phoneNumber = "+221" + phone;
			const [firstname, lastname] = fullname.split(" ");

			const response = await axios.post(
				`${environment.API_URL}/user/register`,
				{
					firstname,
					lastname,
					phone: phoneNumber,
					password: code,
				}
			);

			persistUserPhone(phoneNumber);
			router.replace("authenticate");
		} catch (error) {
			console.error(error);
			ToastAndroid.show("Une erreur s'est produite", ToastAndroid.SHORT);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<View style={style.container}>
				<Logo type="green" />
				<View
					style={{
						paddingVertical: 10,
					}}
				>
					{/* <Text
						style={{
							fontSize: 32,
							color: "#16C59B",
							fontWeight: "semibold",
							textAlign: "center",
						}}
					>
						Connexion
					</Text> */}
					<Text
						style={{
							fontSize: 20,
						}}
					>
						Repoussez les limites du Covoiturage
					</Text>
				</View>
				<View
					style={{
						paddingVertical: 20,
					}}
				>
					<Input
						getValue={(value: string) => setFullname(value)}
						placeholder="Nom Complet"
					/>
					<Input
						getValue={(value: string) => setPhone(value)}
						placeholder="Numero de telephone"
						keyboardType="numeric"
					/>
					<Input
						getValue={(value: string) => setCode(value)}
						placeholder="Code secret"
						keyboardType="numeric"
						maxLength={4}
					/>
					<YStack alignItems="center">
						<CheckboxWithLabel
							size="$3"
							label="J’accepte les conditions de service et la politique de confidentialité."
						/>
					</YStack>
				</View>
				<View>
					<Button
						label={isLoading ? "En cours..." : "S'inscrire"}
						action={registerFn}
					/>
				</View>
			</View>
		</>
	);
}
export function CheckboxWithLabel({
	size,
	label,
	...checkboxProps
}: CheckboxProps & { size: SizeTokens; label?: string }) {
	const id = `checkbox-${size.toString().slice(1)}`;
	return (
		<XStack alignItems="center" space="$4">
			<Checkbox
				id={id}
				size={size}
				{...checkboxProps}
				style={{ borderColor: "#16C59B" }}
			>
				<Checkbox.Indicator>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox>

			<Label size={size} htmlFor={id}>
				{label}
			</Label>
		</XStack>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
