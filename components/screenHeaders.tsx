import { Ionicons } from "@expo/vector-icons"
import { View, XStack, Image } from "tamagui"
import NotificationBtn from "./notificationBtn"
import { APP_COLORS } from "@constants/styles"
import { ICON_SIZE } from "@constants/dimentions"
import useAppState from "@hooks/useAppState"
import { useEffect } from "react"


export const HomeHeader = () => {

    const {
        notifications, setNotifications,
        chatNotifications, setChatNotifications
    } = useAppState();

    useEffect(() => {
        setNotifications(19)
        setChatNotifications(2)
    }, [])

    return (
        <XStack p={"$2"} alignItems="center">
            <View flex={1}>
                <Image w={60} height={60} source={require("@assets/logo/logo.png")} />
            </View>
            <XStack space={"$4"}>
                <NotificationBtn icon={"chatbubbles-outline"} count={chatNotifications} />
                <NotificationBtn icon={"notifications-outline"} count={notifications} />
            </XStack>
        </XStack>
    )
}