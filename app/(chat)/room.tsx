import { Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Room() {
	return (
		<>
			<View style={style.container}>
				<Text>Room</Text>
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
		backgroundColor: "#16C59B",
	},
});
