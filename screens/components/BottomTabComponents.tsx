import { Image, TouchableOpacity, Platform } from 'react-native';
import { Svg, Path } from "react-native-svg";
import { scale } from "react-native-size-scaling";
import { LinearGradient } from 'tamagui/linear-gradient'
import { View, Text  } from "tamagui";


//@ts-ignore
import plus from '@assets/plus.png';

export const TabBarIcon = (Icon: JSX.Element) => {

    return (
        <View style={{
            position: 'absolute',
            width: 60,
        }}>
            {Icon}
        </View>
    );
}

export const TabBarLabel = (label: string) => {
    
    return (
        <View>
            <Text fontSize={12} />
        </View>
    );
}

export const MiddleBottomTabBarIcon = ({ navigation }: any) => {
    return (
        <TouchableOpacity  style={{
            position: 'absolute',
            width: 120, height: 90, zIndex: 100,
            top: -12
        }} onPress={() => {/* navigation.navigate('AddPost') */}}>
            <View position='relative' display='flex' justifyContent='center' alignItems='center' style={{
                zIndex: 100,
            }}>
                <LinearGradient
                    position="absolute"
                    width="$6" height="$6"
                    borderRadius="$12" borderBlockColor={'gray'}
                    colors={['#61E3FF', '#6764FF']}
                    start={[1, 0]} end={[1, 1]}
                />
                <Image source={plus} style={{
                    position: 'relative',
                    width: 22, height: 22,
                    tintColor: 'white',
                }}/>
            </View>
        </TouchableOpacity>
    );
}

export const MiddleBottomTabBarLabel = (maxWidth: number, returnPathDown: any) => {

    return (
        <View>
            <Svg width={maxWidth} height={scale(78)}>
                <Path fill={"white"} {...{ d: returnPathDown }} />
            </Svg>
        </View>
    );
}

export function EmptyScreen() {

	return (
	  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	  </View>
	);
}