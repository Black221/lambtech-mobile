import { View, Text, Image, StyleSheet } from "react-native";

export default function HeaderChat({ name, imageUrl }: any) {
	return (
		<View style={styles.header}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<Text style={styles.name}>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#16C59B",
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
