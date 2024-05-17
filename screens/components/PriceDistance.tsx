import { XStack, Text, Image, YStack } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';


interface PriceDistanceProps {
    distance: string,
    time: string,
    price: string
}

const PriceDistance = (props : PriceDistanceProps) => {
    return (
        <XStack padding="$2" alignItems='center'>
            <XStack alignItems='center'  space="$2">
                <Image borderRadius={"$2"} source={{
                    uri: 'https://placekitten.com/200/300',
                    width: 60,
                    height: 60,
                }} />
                <YStack>
                    <Text fontWeight={"700"}>
                        {props.distance ? props.distance : "0.0"} km
                    </Text>
                    <XStack alignItems='center' space="$1">
                        <Ionicons name="time-outline" size={24} color="black" />
                        <Text>{props.time ? props.time : "00:00"}</Text>
                    </XStack>
                </YStack>
            </XStack>
            <Text flex={1} fontSize={18} fontWeight={"900"} textAlign='right' alignItems='center' justifyContent='center'>
                {props.price ? props.price : "00.00"} xof
            </Text>
        </XStack>
    )
}

export default PriceDistance;