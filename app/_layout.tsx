import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "@tamagui/core/reset.css";
import { TamaguiProvider, createTamagui, Theme } from "@tamagui/core";
import { config } from "@tamagui/config/v3";
import LoadingPage from "@/components/LoadingPage";
import { MainProvider } from "@/providers/MainProvider";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
	// or 'tamagui'
	interface TamaguiCustomConfig extends Conf {}
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded)
		return (
			<>
				<LoadingPage />
			</>
		);

	return (
		<>
			<TamaguiProvider config={tamaguiConfig}>
				<MainProvider>
					<Theme name="light">
						<Stack>
							<Stack.Screen
								name="index"
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="(landing)"
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="(chat)"
								options={{ headerShown: true }}
							/>
							<Stack.Screen
								name="(maps)"
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="(profile)"
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="(auth)"
								options={{ headerShown: false }}
							/>
						</Stack>
					</Theme>
				</MainProvider>
			</TamaguiProvider>
		</>
	);
}
