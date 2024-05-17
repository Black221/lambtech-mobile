import { YStack, ScrollView, Text, XStack } from 'tamagui';

interface ContainerProps {
    icon: any;
    title: string;
    children: any;
}

const Container = (props: ContainerProps) => {

    return (
        <YStack space="$2" marginVertical={"$2"} >
            <XStack space="$2" alignItems='center'>
                {props.icon}
                <Text fontSize={"$5"} fontWeight={"bold"}>{props.title}</Text>
            </XStack>
            {props.children.length > 1 ? <ScrollView paddingBottom={"$2"} horizontal={true} space="$2" marginLeft="$2" >
                {props.children.map((child: any) => {
                    return child

                })}
            </ScrollView> : props.children}
        </YStack>
    )
}

export default Container;