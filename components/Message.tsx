import { View, Text, StyleSheet, Image } from "react-native";

export default function Message({
	message,
	isRight,
	isUser,
	timestamp,
	userColor,
	userName,
	userPhoto,
}: any) {
	return (
		<View style={[styles.row, isUser && styles.rowReverse]}>
			{!isUser && (
				<View style={styles.userContainer}>
					<Image
						source={{ uri: userPhoto }}
						style={styles.userPhoto}
					/>
					<View style={styles.separator} />
				</View>
			)}
			<View
				style={[
					styles.messageContainer,
					{ backgroundColor: isUser ? "#0f93e6" : userColor },
				]}
			>
				{!isUser && <Text style={styles.userName}>{userName}</Text>}
				<Text style={styles.messageText}>{message}</Text>
				<Text style={styles.timestamp}>{timestamp}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginVertical: 5,
	},
	rowReverse: {
		flexDirection: "row-reverse",
	},
	userContainer: {
		alignItems: "center",
		marginRight: 5,
	},
	separator: {
		width: 1,
		height: 30,
		backgroundColor: "#fff",
		marginVertical: 5,
	},
	messageContainer: {
		maxWidth: "70%",
		padding: 10,
		borderRadius: 10,
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
	userPhoto: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	userName: {
		fontSize: 14,
		color: "#fff",
	},
});
