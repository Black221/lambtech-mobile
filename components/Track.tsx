import { XStack, YStack, Text, Image } from "tamagui";

import Union from '@assets/Union.png';

interface TrackProps {
    location: string[];
}

const Track = (props: TrackProps) => {

    return (
        <XStack space="$2" padding="$2" margin="$2" backgroundColor={"white"} borderRadius={"$2"} alignItems='center'>
            <Image source={Union} />
            <YStack space="$2" alignItems='flex-start' justifyContent="space-around"  flex={1}>
                
                <XStack space="$1" alignItems='flex-start' justifyContent="space-between" w={"100%"} >
                    <YStack space="$1" alignItems='flex-start'>
                        <Text fontSize="$6" fontWeight={"700"}>Pikine</Text>
                        <Text fontSize="$2">rue 10 angle 3</Text>
                    </YStack>
                    <Text fontSize="$3" fontWeight={"600"}>10:12, Mar 12</Text>
                </XStack>

                <XStack space="$1" alignItems='flex-start' justifyContent="space-between" w={"100%"} >
                    <YStack space="$1" alignItems='flex-start'>
                        <Text fontSize="$6" fontWeight={"700"}>Pikine</Text>
                        <Text fontSize="$2">rue 10 angle 3</Text>
                    </YStack>
                    <Text fontSize="$3" fontWeight={"600"}>--:--</Text>
                </XStack>
            </YStack>
        </XStack>
    )
}

export default Track;