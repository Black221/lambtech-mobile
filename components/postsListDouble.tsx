import { APP_COLORS } from "@/constants/styles";
import useDebounceValue from "@/hooks/useDebouncedValue";
import { randomNumber } from "@/utils/random";
import { useEffect, useState } from "react";
import { Image, ScrollView, View, XStack, YStack, Text } from "tamagui"



const PostsListDoubleItem = ({
    image, title, description, user
}: any) => {

    const height = randomNumber(100, 250);

    return (
        <View borderRadius={"$3"} borderWidth={1} borderColor={APP_COLORS.border} overflow="hidden">
            <Image width="100%" height={height} source={{ uri: image }}/>
            <View p={"$2"} space={"$1"}>
                <View>
                    <Text fontSize={16} fontWeight={"bold"}>{title}</Text>
                </View>
                <View>
                    <Text fontSize={14} fontWeight={"400"}>{description}</Text>
                </View>
                <XStack space={"$2"}>
                    <Image width={30} height={30} borderRadius={30} source={{ uri: image }} />
                    <Text fontSize={14} fontWeight={"bold"}>{user}</Text>
                </XStack>
            </View>
        </View>
    )
}

const PostsListDouble = ({
    data, next = () => { console.log("next") }
} : any) => {

    const [renderLeft, setRenderLeft] = useState<any>([]);
    const [renderRight, setRenderRight] = useState<any>([]);

    const [end, setEnd] = useState<boolean>(false);
    
    const debounceEnd = useDebounceValue(end, 1000);

    useEffect(() => {
        if (data.length > 0) {
            let left: any = [];
            let right: any = [];
            data.map((item: any, index: number) => {
                if (index % 2 === 0) {
                    left.push(item)
                } else {
                    right.push(item)
                }
            })
            setRenderLeft([...renderLeft, ...left]);
            setRenderRight([...renderRight, ...right]);
        }
    }, [data]);
  

    return (
       <ScrollView horizontal={false} mb={60} showsVerticalScrollIndicator={false} onScrollEndDrag={
              (e: any) => {
                if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height) {
                     setEnd(true);
                } else {
                     setEnd(false);
                }
              }
         } onMomentumScrollEnd={
              (e: any) => {
                if (debounceEnd) {
                     next();
                }
              }
       }>
            <XStack flexWrap="wrap" pt={10} justifyContent="space-around">
                <YStack w={"46%"} space={"$4"}>
                    {renderLeft.map((item: any, index: number) => (
                        <PostsListDoubleItem key={"l"+index} {...item} />
                    ))}
                </YStack>
                <YStack w={"46%"} space={"$4"}>
                    {renderRight.map((item: any, index: number) => (
                        <PostsListDoubleItem key={"r"+index} {...item} />
                    ))}
                </YStack>
            </XStack>
       </ScrollView>
    )
}

export default PostsListDouble;