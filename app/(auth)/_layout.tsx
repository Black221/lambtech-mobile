import { Stack } from "expo-router";


export default function Layout () {

    return (<>
        <Stack>
            <Stack.Screen name="register" options={{
                headerShown: true
            }} />
            <Stack.Screen name="authenticate" options={{
                headerShown: false
            }} />
            <Stack.Screen name="otp" options={{
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