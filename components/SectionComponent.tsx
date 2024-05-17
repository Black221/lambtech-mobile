import { View, Text } from 'tamagui'


export default function SectionComponent ( props : { title: string, children: any}) {

    return (
        <View space={"$3"} padding={"$3"} >
            <Text fontSize={"$7"} color={"$gray11"}>{props.title}</Text>
            <View>
                {props.children}
            </View>
        </View>
    )
}