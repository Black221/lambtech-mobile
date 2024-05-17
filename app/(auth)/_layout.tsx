import { Stack } from "expo-router";


export default function Layout () {

    return (<>
        <Stack>
            <Stack.Screen name="register" options={{
                headerShown: false
            }} />
            <Stack.Screen name="login" options={{
                headerShown: false
            }} />
            <Stack.Screen name="opt" options={{
                headerShown: false
            }} />
            <Stack.Screen name="verify" options={{
                headerShown: false
            }} />
            <Stack.Screen name="redirect" options={{
                headerShown: false
            }} />
        </Stack>
    </>)
}