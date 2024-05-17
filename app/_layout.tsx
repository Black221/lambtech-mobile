import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { View, useColorScheme, Text } from "react-native";

SplashScreen.preventAutoHideAsync();



export default function RootLayout() {

    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
  
    useEffect(() => {
        if (loaded) {
          SplashScreen.hideAsync();
        }
    }, [loaded]);
  
    if (!loaded)
      return (<>
        <View>
            <Text>Loding</Text>
        </View>
      </>)

    return (<>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(landing)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    </>)
}