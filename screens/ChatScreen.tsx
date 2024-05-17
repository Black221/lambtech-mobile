import { View, Text, XStack, YStack, Input } from 'tamagui';



export default function ChatScreen () {
    return (
        <YStack flex={1} bg='white' px='3' py='2'>
            <XStack  alignItems='center' justifyContent='space-between' padding={"$2"}>
                <View  width={"$6"}>
                    <Text>Back</Text>
                </View>
                <YStack flex={1} bg={'white'} space={"$1"} alignItems='center' justifyContent='center'>
                    <Text fontSize={"$7"} fontWeight={"600"}>Expert</Text>
                    <XStack alignItems='center'space={"$1.5"}>
                        <View width={"$0.75"} height={"$0.75"} borderRadius={100} bg={"red"} />
                        <Text fontSize={"$2"}>Online</Text>
                    </XStack>
                </YStack>
                <View width={"$6"}>
                    <Text width={"$6"} height={"$6"} bg={"red"} borderRadius={100}></Text>
                </View>
            </XStack>
            <YStack flex={1} bg={"red"} alignItems='center' justifyContent='flex-end'>
                <Text>Message1</Text>
                <Text>Message2</Text>
            </YStack>
            <XStack width={'100%'} alignItems='center' justifyContent='space-between' space={"$4"} p={"$3"}>
                <Text>Icon</Text>
                <View flex={1}>
                    <Input />
                </View>
            </XStack>
        </YStack>
    )
}