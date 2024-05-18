import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { style } from "twrnc";

export default function FooterChat({ value, onChangeText, onSendPress }: any) {
	return (
		<View style={styles.footer}>
			<TextInput
				style={styles.input}
				placeholder="Type a message"
				placeholderTextColor="gray"
				value={value}
				onChangeText={onChangeText}
			/>
			<TouchableOpacity style={styles.icon} onPress={onSendPress}>
				<Icon name="send" size={25} color="#16C59B" />
			</TouchableOpacity>
			<TouchableOpacity style={styles.icon}>
				<Icon name="microphone" size={28} color="#16C59B" />
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
		borderColor: "gray",
		borderWidth: 2,
		borderRadius: 30,
		padding: 10,
	},
	icon: {
		marginLeft: 20,
	},
});
