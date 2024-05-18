import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

import { Check as CheckIcon } from "@tamagui/lucide-icons";
import type { CheckboxProps, SizeTokens } from "tamagui";
import { Checkbox, Label, XStack, YStack } from "tamagui";
import React, { useState } from "react";

export default function Register() {
	const [isChecked, setIsChecked] = useState(false);
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
						getValue={(value: string) => console.log(value)}
						placeholder="Nom Complet"
					/>
					<Input
						getValue={(value: string) => console.log(value)}
						placeholder="+221 77*********"
					/>
					<Input
						getValue={(value: string) => console.log(value)}
						placeholder="Code secret"
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
						label="S'inscrire"
						action={() => {
							router.replace("home");
						}}
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
				style={{ backgroundColor: "#16C59B" }}
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
