import { Stack } from "expo-router";

export default function Layout() {
	return (
		<>
			<Stack>
				<Stack.Screen name="room" options={{ headerShown: false }} />
				<Stack.Screen name="chat" options={{ headerShown: false }} />
				<Stack.Screen
					name="specificChat"
					options={{ headerShown: false }}
				/>
			</Stack>
		</>
	);
}
