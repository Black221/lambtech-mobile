import Logo from "@/components/Logo";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
	return (
		<>
			<View style={style.container}>
				<View style={{ padding: 10 }}>
					<Logo type="green" />
				</View>
				<View style={{ padding: 0 }}>
					<Image
						style={{ width: 370, height: 300 }}
						source={require("../assets/images/vector.png")}
					/>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
							paddingVertical: 10,
							paddingHorizontal: 1,
						}}
					>
						Bienvenue sur{" "}
						<Text style={{ fontSize: 32, color: "#16C59B" }}>
							Athiaa gnu dem
						</Text>
						, votre application de co-voiturage sur{" "}
						<Text style={{ color: "#16C59B" }}>Dakar</Text>
					</Text>
				</View>
				<Link
					href={"login"}
					style={{
						padding: 10,
						width: "100%",
						backgroundColor: "#16C59B",
						borderRadius: 40,
						textAlign: "center",
						color: "#FFF",
						fontSize: 20,
					}}
				>
					Suivant
				</Link>
			</View>
		</>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#FFF",
	},
});
