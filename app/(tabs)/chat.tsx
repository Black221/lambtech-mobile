
import FooterChat from "@/components/FooterChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, XStack, YStack, Input } from "tamagui";
import Message from "@/components/Message";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";

export default function ChatScreen() {

	const [messages, setMessages] = useState([
		{
			message: "Hello, how are you?",
			isRight: true,
			isUser: true,
			timestamp: "10:30 AM",
			userColor: "blue",
			userName: "User 1",
		},
		{
			message: "I'm fine, thank you!",
			isRight: false,
			isUser: false,
			timestamp: "10:31 AM",
			userColor: "red",
			userName: "User 2",
			userPhoto: "https://randomuser.me/api/portraits/men/74.jpg",
		},
		{
			message: "What are you doing?",
			isRight: false,
			isUser: false,
			timestamp: "10:32 AM",
			userColor: "blue",
			userName: "User 3",
			userPhoto: "https://randomuser.me/api/portraits/women/74.jpg",
		},
		{
			message: "I'm working on a new project",
			isRight: false,
			isUser: false,
			timestamp: "10:33 AM",
			userColor: "orange",
			userName: "User 4",
			userPhoto: "https://randomuser.me/api/portraits/women/74.jpg",
		},
		{
			message: "me too",
			isRight: true,
			isUser: true,
			timestamp: "10:30 AM",
			userColor: "blue",
			userName: "User 1",
		},
		{
			message: "I'm fine, thank you!",
			isRight: false,
			isUser: false,
			timestamp: "10:31 AM",
			userColor: "red",
			userName: "User 2",
			userPhoto: "https://randomuser.me/api/portraits/men/74.jpg",
		},
		{
			message: "What are you doing?",
			isRight: false,
			isUser: false,
			timestamp: "10:32 AM",
			userColor: "blue",
			userName: "User 3",
			userPhoto: "https://randomuser.me/api/portraits/women/74.jpg",
		},
	]);
	const [inputText, setInputText] = useState("");

	const handleSendPress = () => {
		setMessages([
			...messages,
			{
				message: inputText,
				isRight: true,
				isUser: true,
				timestamp: new Date().toLocaleTimeString(),
				userColor: "blue",
				userName: "User 1",
				userPhoto: "https://randomuser.me/api/portraits/men/75.jpg",
			},
		]);
		setInputText("");
	};

	useEffect(() => {

	}, []) 

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<YStack flex={1} bg="white" px="3" py="2">
				<XStack
					alignItems="center"
					justifyContent="space-between"
					padding={"$2"}
				>
					<TouchableOpacity onPress={() => router.back()}>
						<View width={"$6"}>
							<Icon name="arrow-back" size={24} color="black" />
						</View>
					</TouchableOpacity>
					<YStack
						flex={1}
						bg={"white"}
						space={"$1"}
						alignItems="center"
						justifyContent="center"
					>
						<Text fontSize={"$7"} fontWeight={"600"}>
							Sahm - IIBS
						</Text>
						<XStack alignItems="center" space={"$1.5"}>
							<View
								width={"$0.75"}
								height={"$0.75"}
								borderRadius={100}
								bg={"green"}
							/>
							<Text fontSize={"$2"}>3/4</Text>
						</XStack>
					</YStack>
					<View width={"$6"}></View>
				</XStack>
				<YStack flex={1} padding={10}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{messages.map((msg, index) => (
							<Message
								key={index}
								message={msg.message}
								isRight={msg.isRight}
								isUser={msg.isUser}
								timestamp={msg.timestamp}
								userName={msg.userName}
								userPhoto={msg.userPhoto}
								userColor={msg.userColor} // Pass the userColor prop
							/>
						))}
					</ScrollView>
				</YStack>
				<XStack
					width={"100%"}
					alignItems="center"
					justifyContent="space-between"
					p={"$1"}
					bg={"white"}
				>
					<FooterChat
						value={inputText}
						onChangeText={setInputText}
						onSendPress={handleSendPress}
					/>
				</XStack>
			</YStack>
		</SafeAreaView>
	);
}
