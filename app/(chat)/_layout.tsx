import { Stack } from "expo-router";

export default function Layout() {
	return (
		<>
			<Stack>
				<Stack.Screen
					name="specificChat"
					options={{ headerShown: false }}
				/>
			</Stack>
		</>
	);
}
