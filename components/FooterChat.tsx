import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FooterChat() {
	return (
		<View style={styles.footer}>
			<TextInput style={styles.input} placeholder="Type a message" />
			<TouchableOpacity>
				<Icon name="microphone" size={28} color="#000" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	input: {
		flex: 1,
		marginHorizontal: 10,
		height: 40,
		borderColor: "#000",
		borderWidth: 1,
		borderRadius: 30,
		padding: 10,
	},
});
