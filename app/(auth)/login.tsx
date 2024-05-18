import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { environment } from "@/environment";
import axios from "axios";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import axiosInstance from "@/api/axios";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import useMainState from "@/hooks/useMainState";

export default function Login() {
	const { setToken, setUserInfos } = useMainState();

	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");

	const [response, error, loading, axiosFetch] = useAxios();

	async function loginFn() {
		await axiosFetch({
			axiosInstance: axiosInstance,
			method: "POST",
			url: environment.API_URL + "/user/login",
			requestConfig: [
				{
					phone: phone,
					password: code,
				},
			],
		});
	}

	useEffect(() => {
		if (response) {
			console.log(response);
			const userInfos = {
				token: response.token,
				firstname: response.firstname,
				lastname: response.lastname,
				phone: response.phone,
				userId: response.userId,
			};
			setToken(response.token);
			setUserInfos(userInfos);
			router.replace("maps");
		}
	}, [response]);

	useEffect(() => {
		if (error) {
			console.table(error);
			ToastAndroid.show(error, ToastAndroid.SHORT);
		}
	}, [error]);

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
					/>
					<Input
						getValue={(value: string) => setCode(value)}
						placeholder="Code"
						keyboardType="numeric"
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
						label={loading ? "En cours..." : "Se connecter"}
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
