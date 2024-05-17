import { MaterialIcons } from '@expo/vector-icons';
import { Text, XStack, YStack } from 'tamagui';

interface LocationDelivererProps {
    region: string;
    address: string;
    count: number;
    timer: number;
}

const LocationDeliverer = (props: LocationDelivererProps) => {
    
    const { region, address, count, timer } = props;

    return (
        <XStack space="$4" padding="$1" paddingHorizontal={"$4"} backgroundColor={"white"} borderRadius={"$2"} alignItems='center' >
            <MaterialIcons name="my-location" size={24} color="#64A4FF" />
            <YStack  alignItems='center'>
                <Text fontSize={"$3"} >{region}</Text>
                <Text fontSize={"$5"} fontWeight={"bold"}>{address}</Text>
            </YStack>
            <YStack  marginVertical={"$2"} alignItems='center' >
                <XStack space="$2" alignItems='center'>
                    <Text fontSize={"$5"} fontWeight={"bold"} col={"#64A4FF"}>{count}</Text>
                    {/* delivery icon */}
                    <MaterialIcons name="delivery-dining" size={24} color="#64A4FF" />
                </XStack>
                <Text fontSize={"$5"} >à {timer}mn</Text>
            </YStack>
        </XStack>
    )
}

export default LocationDeliverer;