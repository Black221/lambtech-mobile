import { Text, XStack } from 'tamagui'
import { useRef, useState } from 'react'
import { TouchableOpacity, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'tamagui/linear-gradient'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

//@ts-ignore
const ServiceBtn = () => {

	const tabOffsetValue = useRef(new Animated.Value(0)).current;
    const [active, setActive] = useState("yobanté")

    return (
        <XStack justifyContent='space-around'  paddingVertical={20} backgroundColor={"white"} borderRadius={100} marginTop="$2">

            <TouchableOpacity style={{
                width: getWidth(),
            }} onPress={() => {
                Animated.spring(tabOffsetValue, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
                setActive("yobanté")
            }}>
                <XStack alignItems='center' justifyContent='center' space="$2" width={"100%"}>
                    <FontAwesome5 name="shipping-fast" size={20} color={active === "yobanté" ? "white" : "gray"} />
                    <Text textAlign='center' color={active === "yobanté" ? "white" : "gray"} fontSize={18}>yobanté</Text>
                </XStack>
            </TouchableOpacity>

            <TouchableOpacity style={{
                width: getWidth()  ,
            }} onPress={() => {
                Animated.spring(tabOffsetValue, {
                    toValue: getWidth(),
                    useNativeDriver: true
                }).start();
                setActive("yobalé")
            }}>
                <XStack alignItems='center' justifyContent='center' space="$2" width={"100%"}>
                    <MaterialIcons name="delivery-dining" size={20} color={active !== "yobanté" ? "white" : "gray"} />
                    <Text textAlign='center' color={active !== "yobanté" ? "white" : "gray"} fontSize={18}>yobalé</Text>
                </XStack>
            </TouchableOpacity>

            <Animated.View style={{
				width: getWidth() - 20,
				height: 48,
                top: 8,
				zIndex: -1,
				position: 'absolute',
				// Horizontal Padding = 20...
				borderRadius: 100,
                left: 10,
				transform: [
					{ translateX: tabOffsetValue }
				]
			}}>
                <LinearGradient
                    style={{ flex: 1, borderRadius: 100 }}
                    colors={['#61E3FF', '#6764FF']}
                    start={[1, 0]}
                    end={[1, 1]}
                />
			</Animated.View>
        </XStack>
    )

}

function getWidth() {
	let width = Dimensions.get("window").width
  
	// Horizontal Padding = 20...
	width = width 
  
	// Total five Tabs...
	return width / 2
}
export default ServiceBtn;