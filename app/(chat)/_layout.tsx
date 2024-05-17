import { Stack } from "expo-router";


export default function Layout () {

    return (<>
        <Stack>
            <Stack.Screen name="stepOne" options={{
                headerShown: false
            }} />
            <Stack.Screen name="stepTwo" options={{
                headerShown: false
            }} />
        </Stack>
    </>)
}