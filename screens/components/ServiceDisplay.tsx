import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Text, View, XStack} from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

interface ServiceDisplayProps {
    icon: "shipping-fast" | "delivery-dining" | null;
    title: string;
    extra: any;
}

const ServiceDisplay = (props: ServiceDisplayProps) => {

    

    return (
        <View display='flex'  marginHorizontal="$2" flexDirection='row' position='relative' alignItems='center' justifyContent='space-between' >
            <View>
                <LinearGradient
                    borderRadius={"$2"}
                    position='absolute'
                    width={"100%"} height={"100%"}
                    colors={['#61E3FF', '#6764FF']}
                    start={[1, 0]}
                    end={[1, 1]}
                />
                <XStack  space="$1" padding="$1.5" paddingHorizontal="$2" alignItems='center'>
                    {!props.icon ? null : 
                    (props.icon  === "shipping-fast" ?
                        <FontAwesome5 name="shipping-fast" size={20} color="white" /> 
                        : <MaterialIcons name="delivery-dining" size={20} color="white" />
                    )}
                    <Text padding="$1" fontSize="$5" color={"white"}>{props.title}</Text>
                </XStack>
            </View>
            <View>
                {props.extra}
            </View>
        </View>
    )
}

export default ServiceDisplay;