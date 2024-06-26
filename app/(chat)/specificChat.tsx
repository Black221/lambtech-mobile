import FooterChat from "@/components/FooterChat";
import { SafeAreaView } from "react-native-safe-area-context";
// @ts-ignore
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, XStack, YStack, Input } from "tamagui";
import Message from "@/components/Message";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import useMainState from "@/hooks/useMainState";
import { socket } from "@/api/socket";
import axios from "axios";
import { environment } from "@/environment";

export default function ChatScreen() {
	const [messages, setMessages] = useState<MessageData[]>([]);
	const [inputText, setInputText] = useState("");
	const { userInfos } = useMainState();

	const room = "generale";
	socket.emit("subscribe", { room });

	interface MessageData {
		text: string;
		from: string | undefined;
		room: string;
		username: string | undefined;
		timestamp: string;
		userPhoto: string;
	}

	const handleSendPress = () => {
		const messageData: MessageData = {
			text: inputText,
			from: userInfos?.userId,
			room: room,
			username: userInfos?.firstname + " " + userInfos?.lastname,
			timestamp: new Date().toLocaleTimeString(),
			userPhoto: "https://placehold.co/48x48",
		};

		socket.emit("message", messageData);

		setInputText("");
	};

	const ref = useRef<any>();
	useEffect(() => {
		(async () => {
			try {
				const { data: dbMessages } = await axios.get<MessageData[]>(
					environment.API_URL + `/conversation/rooms/${room}/messages`
				);
				setMessages(dbMessages);
				console.log(dbMessages)
			} catch (error) {
				console.error("Error fetching messages:", error);
			}
		})();
	}, []);

	useEffect(() => {

		const onMessage = (message: MessageData) => {
			setMessages(prev => [
				...prev, message
			])
		}

		socket.on("message",onMessage);

		return () => {
			socket.off("message", onMessage);
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
					<ScrollView
						ref={ref}
						onContentSizeChange={() => ref.current.scrollToEnd({ animated: true })}
					 	showsVerticalScrollIndicator={false}>
						{messages.map((msg: MessageData, index: number) => (
							<Message
								key={index}
								message={msg.text}
								isRight={msg.from === userInfos?.userId}
								isUser={msg.from === userInfos?.userId}
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
