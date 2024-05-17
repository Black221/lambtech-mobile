import { View, Text, StyleSheet } from "react-native";

export default function Message({ message, isRight, isUser, timestamp }: any) {
	return (
		<View
			style={[
				styles.messageContainer,
				isRight ? styles.right : styles.left,
				isUser ? styles.user : styles.other,
			]}
		>
			<Text style={styles.messageText}>{message}</Text>
			<Text style={styles.timestamp}>{timestamp}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	messageContainer: {
		maxWidth: "70%",
		padding: 10,
		borderRadius: 10,
		marginVertical: 5,
	},
	messageText: {
		fontSize: 16,
		color: "#fff",
	},
	timestamp: {
		fontSize: 12,
		color: "#fff",
		alignSelf: "flex-end",
		marginTop: 5,
	},
	right: {
		alignSelf: "flex-end",
	},
	left: {
		alignSelf: "flex-start",
	},
	user: {
		backgroundColor: "#0f93e6",
	},
	other: {
		backgroundColor: "#808080",
	},
});
