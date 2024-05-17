import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "tamagui";
import { APP_COLORS, MAIN_COLORS } from "@/constants/styles";
import { useEffect, useState } from "react";
import { ICON_SIZE } from "@/constants/dimentions";

export default function NotificationBtn ({
    icon, count
} : {
    icon: "notifications-outline" | "chatbubbles-outline", 
    count: number
 }) {

    const [render, setRender] = useState<string>("");

    useEffect(() => {
        if (count > 20) {
            setRender("+20");
        } else if (count !== 0) {
            setRender(count.toString());
        }
    }, [count]);


    return (
        <View justifyContent="center" alignItems="center" bg={APP_COLORS.iconBg} width={38} height={38} borderRadius={40} position="relative">
            {render !== "" && <View zIndex={1} top={"$-1.5"} right={"$-1.5"} justifyContent="center" alignItems="center" position="absolute" bg={MAIN_COLORS.primary} width={20} height={20} borderRadius={20}>
                <Text color={MAIN_COLORS.textLight} textAlign="center" fontSize={10} fontWeight={"800"}>{render}</Text>
            </View>}
            <Ionicons name={icon} size={ICON_SIZE} color={APP_COLORS.iconMainColor} />
        </View>
    )
}

