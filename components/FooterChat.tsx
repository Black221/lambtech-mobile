import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FooterChat() {
	return (
		<View style={styles.footer}>
			<TouchableOpacity>
				<Icon name="smile-o" size={24} color="#000" />
			</TouchableOpacity>
			<TextInput style={styles.input} placeholder="Type a message" />
			<TouchableOpacity>
				<Icon name="microphone" size={24} color="#000" />
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
		borderRadius: 20,
		padding: 10,
	},
});
