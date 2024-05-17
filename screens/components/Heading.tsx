import { YStack, Text } from "tamagui";

interface HeadingProps {
    title: string,
    subtitle: string,
    text: string,
    position: "center" | "left" | "right"
}

const Heading = ( {title = "", subtitle = "", text = "", position = "center" }: HeadingProps) => {

    return (
        <YStack paddingHorizontal="$2">
            <Text height={ subtitle ? "auto" : 0} textAlign={ position } fontSize={ "$6" } fontWeight={ "700" }>{ subtitle }</Text>
            <Text height={ title ? "auto" : 0} textAlign={ position } color={"#6764FF"} fontSize={ "$8" } fontWeight={ "900" }>{ title }</Text>
            <Text height={ text ? "auto" : 0} textAlign={ position } fontWeight={ "normal" }>{ text }</Text>
        </YStack>
    )
}

export default Heading;