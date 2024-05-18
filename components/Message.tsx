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
				</View>
			)}
			<View
				style={[
					styles.messageContainer,
					{ backgroundColor: isUser ? "#0f93e6" : "#f0f0f0" },
				]}
			>
				{!isUser && (
					<Text style={[styles.userName, { color: userColor }]}>
						{userName}
					</Text>
				)}
				<Text style={[styles.messageText, isUser && { color: "#fff" }]}>
					{message}
				</Text>
				<Text style={[styles.timestamp, isUser && { color: "#fff" }]}>
					{timestamp}
				</Text>
			</View>
		</View>
	);
}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
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
		color: "#000",
	},
	timestamp: {
		fontSize: 10,
		color: "#000",
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
