import FooterChat from "@/components/FooterChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, XStack, YStack, Input } from "tamagui";
import Message from "@/components/Message";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import useMainState from "@/hooks/useMainState";
import { socket } from "@/api/socket";

export default function ChatScreen() {
	const [messages, setMessages] = useState<MessageData[]>([]);
	const [inputText, setInputText] = useState("");
	const { userInfos } = useMainState();

	const room = "generale";
	socket.emit("suscribe", { room });

	interface MessageData {
		message: string;
		userId: string | undefined;
		roomId: string;
		username: string | undefined;
		timestamp: string;
		userPhoto: string;
	}

	const handleSendPress = () => {
		const messageData: MessageData = {
			message: inputText,
			userId: userInfos?.userId,
			roomId: room,
			username: userInfos?.firstname + " " + userInfos?.lastname,
			timestamp: new Date().toLocaleTimeString(),
			userPhoto: "https://placehold.co/48x48",
		};

		setMessages([...messages, messageData]);

		socket.emit("message", messageData);

		setInputText("");
	};

	useEffect(() => {
		socket.on("message", (data) => {
			setMessages([...messages, data.message]);
		});

		return () => {
			socket.off("message");
		};
	}, []);

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
						{messages.map((msg: MessageData, index: number) => (
							<Message
								key={index}
								message={msg.message}
								isRight={msg.userId === userInfos?.userId}
								isUser={msg.userId === userInfos?.userId}
								timestamp={msg.timestamp}
								userName={msg.username}
								userPhoto={msg.userPhoto}
								// userColor={msg.userColor} // Pass the userColor prop
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
