import { YStack, Image, Text, View, XStack } from "tamagui"
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useRef, useState } from "react";
import Btn from "../components/Btn"
import Heading from "../components/Heading"
import { Pressable, Animated, Easing } from "react-native";


export default function Welcome() {

    const [current, setCurrent] = useState(0);
    const animate = useRef(new Animated.Value(current)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    const IMAGES = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/g/200/300",
        "https://picsum.photos/200/300",
    ]

    const next = () => {
        if (current < IMAGES.length - 1) {
            setCurrent(current + 1)
        } else {
            setCurrent(0)
        }

    }

    const previous = () => {
        if (current > 0) {
            setCurrent(current - 1)
        } else {
            setCurrent(IMAGES.length - 1)
        }
    }
    
    useEffect(() => {
        Animated.timing(animate, {
            toValue: current,
            duration: 300,
            useNativeDriver: true
        }).start()

        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
    }, [current])

    return (
        <YStack height={"100%"} paddingBottom={"$4"} space="$6" justifyContent="space-around" alignItems="center">
            <View flex={1} alignItems="center" justifyContent="center" backgroundColor={"red"} width={"100%"}  >
                {/* @ts-ignore */}
                <Image source={{
                    uri: IMAGES[current],
                    width: "100%",
                    height: "100%",
                }}/>
                
            </View>
            <XStack alignItems="center" borderRadius={10}  justifyContent="center" space={10}>
                {/* Animate indicator reference by current */}
                <View width={current === 0 ? 30 : 10} height={10} borderRadius={10} backgroundColor={"#D9D9D9"} />
                <View width={current === 1 ? 30 : 10} height={10} borderRadius={10} backgroundColor={"#D9D9D9"} />
                <View width={current === 2 ? 30 : 10} height={10} borderRadius={10} backgroundColor={"#D9D9D9"} />

                <Animated.View style={{
                    position: "absolute",
                    width: 30,
                    height: 10,
                    left: 0,
                    borderRadius: 10,
                    backgroundColor: "#6764FF",
                    transform: [
                        { translateX: Animated.multiply(animate, 20) }
                    ]
                }} />
            </XStack>
            <Animated.View style={{
                // fade in animation
                opacity: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                }),
            }}>
                <Heading subtitle="Subtitle" 
                        title="Title" 
                        text="This is a short description of the app. It contains a few sentences. And you can add more if you want. You can also add more text if you want." 
                        position="left" 
                />
            </Animated.View>
            <XStack alignItems="center" space={"$4"} paddingHorizontal={"$4"}>
                {/* Entering animation */}
                {current != 0 && <Animated.View style={{
                    opacity: animate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1]
                    }),
                    transform: [
                        {
                            translateX: animate.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: [20, 0, 0]
                            })
                        }
                    ]
                }}>
                    
                    <Pressable onPress={previous}>
                        <FontAwesome5 name="arrow-left" size={24} color="black" />
                    </Pressable>
                </Animated.View>}
                
                <Animated.View style={{
                    flex: 1
                }}>
                    <Btn label="Suivant" action={next} />
                </Animated.View>
            </XStack>
        </YStack>
    ) 
}
