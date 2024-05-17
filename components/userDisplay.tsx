import { ICON_SIZE } from "@/constants/dimentions"
import { MAIN_COLORS } from "@/constants/styles"
import { Ionicons } from "@expo/vector-icons"
import { Image, Text, View, XStack, YStack } from "tamagui"
import { TextDescription } from "./textDisplay"



export const SmallUserDisplay = ({
    avatar,
    userName,
    time,
    details
} : {
    avatar:string,
    userName:string,
    time:string,
    details: boolean
}) => {

    return (
        <XStack padding={"$2"} space={"$2"} alignItems="center">
            <View>
                <Image source={{
                    uri: avatar
                }} style={{
                    width: 45,
                    height: 45,
                    borderRadius: 500
                }} />
            </View>
            <YStack flex={1}>
                <Text fontSize={
                    16
                } fontWeight={
                    "700"
                }>{userName}</Text>
                <Text fontSize={
                    12
                } color={
                    MAIN_COLORS.secondary
                }>{time}</Text>
            </YStack>
            {details && <View onPress={() => {}}>
                <Ionicons name="ellipsis-vertical" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
            </View>}
        </XStack>
    )
}

export const MediumUserDisplay = ({
    avatar,
    userName,
    info,
    details
} : {
    avatar:string,
    userName:string,
    info:string,
    details: boolean
}) => {
    
    return (
        <YStack maxHeight={280} margin={"$2"}>
            <YStack 
                width={160} space={"$1"} padding={"$2"} backgroundColor={"white"} 
                borderWidth={1.5} borderColor={"$gray6"} borderRadius={"$4"}
                alignItems="center" justifyContent="space-around"
            >
                <Image source={{
                    uri: avatar
                }} style={{
                    width: 100,
                    height: 100,
                    borderRadius: 500
                }} />
                <Text fontSize={ 16 } fontWeight={ "700" }>{userName}</Text>
                <Text textAlign="justify" fontSize={ 12 } color={"$gray12"}>{info}</Text>
                <XStack w={"100%"} justifyContent="space-around" paddingVertical={"$2"} paddingHorizontal={"$1"}>
                    <View>
                        <Ionicons name="bookmark-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                    </View>
                    <View>
                        <Ionicons name="chatbox-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                    </View>
                    <View>
                        <Ionicons name="share-social-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                    </View>
                </XStack>
            </YStack>
            
        </YStack>
    )
}


export const LargeUserDisplay = ({
    avatar,
    userName,
    info,
    details
} : {
    avatar:string,
    userName:string,
    info:string,
    details: boolean
}) => {

    return (
        <View 
            space={"$2"} padding={"$2"} 
            borderWidth={1.5} borderColor={"$gray6"} borderRadius={"$4"}
        >
            <XStack space={"$2"}>
                <View>
                    <Image source={{
                        uri: avatar
                    }} style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10
                    }} />
                </View>
                <YStack flex={1} space={"$2"}>
                    <Text fontSize={
                        16
                    } fontWeight={
                        "700"
                    }>{userName}</Text>
                    <Text fontSize={
                        12
                    } color={"$gray12"}>{info}</Text>
                </YStack>
                {details && <View onPress={() => {}}>
                    <Ionicons name="bookmark" size={ICON_SIZE} color={MAIN_COLORS.primary} />
                </View>}
            </XStack>
            <XStack space={"$3"}>
                <View>
                    <Ionicons name="chatbox-outline" size={ICON_SIZE} color={MAIN_COLORS.primary} />
                </View>
                <View>
                    <Ionicons name="share-social-outline" size={ICON_SIZE} color={MAIN_COLORS.primary} />
                </View>
                
            </XStack>
        </View>
    )
}


export const UserComment = ({
    avatar,
    userName,
    time,
    comment
} : {
    avatar:string,
    userName:string,
    time:string,
    comment:string
}) => {

    return (
        <View>
            <SmallUserDisplay avatar={avatar} userName={userName} time={time} details={false} />
            <TextDescription text={comment} styles={
                {
                    container: { padding: 1 },
                    text: {
                        fontSize: 14,
                        paddingHorizontal: 10
                    },
                    more: {
                        inactive: { color: "blue" },
                        active: { color: "black" }
                    }
                }
            } />
        </View>
    )
}
