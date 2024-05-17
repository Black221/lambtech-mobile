import { YStack, View, ScrollView, Label } from "tamagui"
import { LinearGradient } from 'tamagui/linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Payment = () => {


    return (
        <YStack marginVertical={20}>
            <LinearGradient
                borderRadius={ "$4" }
                position='absolute'
                width={"100%"} height={"100%"}
                colors={['#61E3FF', '#6764FF']}
                start={[1, 0]}
                end={[1, 1]}
            />
            <Label fontSize={20} fontWeight={"700"} padding={10} color="white">Payement</Label>
            <ScrollView horizontal={true} margin={'$2'} space={'$4'} paddingLeft={10} paddingBottom={10} >
                
                
                <View width={80} height={80} borderRadius={50} backgroundColor="white" justifyContent='center' alignItems='center'>
                    <MaterialCommunityIcons name="plus" size={50} color="black" />
                </View>
            </ScrollView>
        </YStack>
    )
}

export default Payment;