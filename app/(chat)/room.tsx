import FooterChat from "@/components/FooterChat";
import HeaderChat from "@/components/HeaderChat";
import Message from "@/components/Message";
import { Stack } from "expo-router";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

export default function Room() {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={style.container}>
					<View>
						<HeaderChat
							name="John Doe"
							imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
						/>
					</View>
					<ScrollView
						style={style.body}
						showsVerticalScrollIndicator={false}
					>
						<Message
							message="Hello, how are you?"
							isRight={true}
							isUser={true}
							timestamp="10:30 AM"
						/>
						<Message
							message="I'm good, thanks!"
							isRight={false}
							isUser={false}
							timestamp="10:31 AM"
						/>
						<Message
							message="What are you doing?"
							isRight={true}
							isUser={true}
							timestamp="10:32 AM"
						/>
						<Message
							message="I'm working on a project"
							isRight={false}
							isUser={false}
							timestamp="10:33 AM"
						/>
						<Message
							message="That's cool!"
							isRight={true}
							isUser={true}
							timestamp="10:34 AM"
						/>
						<Message
							message="Yes, it is!"
							isRight={false}
							isUser={false}
							timestamp="10:35 AM"
						/>
						<Message
							message="What are you doing?"
							isRight={true}
							isUser={true}
							timestamp="10:32 AM"
						/>
						<Message
							message="I'm working on a project"
							isRight={false}
							isUser={false}
							timestamp="10:33 AM"
						/>
						<Message
							message="That's cool!"
							isRight={true}
							isUser={true}
							timestamp="10:34 AM"
						/>
						<Message
							message="Yes, it is!"
							isRight={false}
							isUser={false}
							timestamp="10:35 AM"
						/>
					</ScrollView>
					<View style={style.footer}>
						<FooterChat />
					</View>
				</View>
			</SafeAreaView>
		</>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
	},
	body: {
		flex: 1,
		width: "100%",
		padding: 10,
	},
	footer: {
		width: "100%",
		backgroundColor: "#16C59B",
	},
});