import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { environment } from "@/environment";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import { useState } from "react";
import useMainState from "@/hooks/useMainState";
import axios from "axios";

export default function Login() {
	const { setToken, setUserInfos } = useMainState();

	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function loginFn() {
		try {
			console.log({
				datasource: {
					phone: phone,
					password: code,
				},
			});
			setIsLoading(true);
			const { data: response } = await axios.post(
				environment.API_URL + "/user/login",
				{
					phone: phone,
					password: code,
				}
			);

			console.log(response);
			const userInfos = {
				token: response.token,
				firstname: response?.firstname,
				lastname: response?.lastname,
				phone: response.phone,
				role: response.role,
				userId: response.userId,
			};
			console.info(userInfos);
			setToken(response.token);
			setUserInfos(userInfos);
			router.replace("maps");
		} catch (err) {
			console.error(err);
			ToastAndroid.show("Identifiants invalides", ToastAndroid.SHORT);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<View style={style.container}>
				<Logo type="green" />
				<View
					style={{
						paddingVertical: 10,
					}}
				>
					<Text
						style={{
							fontSize: 32,
							color: "#16C59B",
							fontWeight: "semibold",
							textAlign: "center",
						}}
					>
						Connexion
					</Text>
					<Text
						style={{
							fontSize: 20,
						}}
					>
						Content de vous revoir
					</Text>
				</View>
				<View
					style={{
						paddingVertical: 20,
					}}
				>
					<Input
						getValue={(value: string) => setPhone("+221" + value)}
						placeholder="Téléphone"
						keyboardType="numeric"
						debounceValue={0}
					/>
					<Input
						getValue={(value: string) => setCode(value)}
						placeholder="Code"
						keyboardType="numeric"
						debounceValue={0}
					/>
					<Text
						style={{
							color: "#16C59B",
							fontSize: 14,
							textAlign: "right",
						}}
					>
						Code secret oublie?
					</Text>
				</View>
				<View>
					<Button
						label={isLoading ? "En cours..." : "Se connecter"}
						action={loginFn}
					/>
					<Link
						style={{
							color: "#16C59B",
							fontSize: 18,
							padding: 10,
							textAlign: "center",
						}}
						href="/register"
					>
						S'inscrire
					</Link>
				</View>
			</View>
		</>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
