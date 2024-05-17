import { View, YStack, Text } from "tamagui"
import { LinearGradient } from "tamagui/linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Cover = () => {

    return (
        <YStack space="$2"
                overflow="hidden"
                borderBottomEndRadius={"$12"}
                marginBottom={"$2"} 
                marginHorizontal={0} >
            {/* <LinearGradient
                borderBottomStartRadius={0}
                borderBottomEndRadius={200}
                height={200}
                colors={['#61E3FF', '#6764FF']}
                start={[1, 0]}
                end={[1, 1]}
                style={{
                    zIndex: 1,
                }}
            /> */}
            <LinearGradient
                colors={['#61E3FF', '#6764FF']}
                start={[1, 0]}
                end={[1, 1]}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />  
            <View w={"$6"}
                  h={"$6"}
                  top={"$2"}
                  left={"$2"}
                  borderColor={"white"} 
                  borderWidth={"$1"} 
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={100}>
                <LinearGradient
                    borderRadius={100}
                    colors={['#61E3FF', '#6764FF']}
                    start={[1, 0]}
                    end={[1, 1]}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                    }}
                />
                {/* delivery logo */}
                <MaterialCommunityIcons name="bike-fast" size={24} color="white" />
            </View>
            <View paddingTop={30} >

                <Text color="white" fontSize={"$9"} fontWeight={"900"} textAlign="center">Guediawaye</Text>
                <Text color="white" fontSize={"$4"} fontWeight={"900"} textAlign="center">Livraison express</Text>
            </View>
            <View h={20}></View>
        </YStack>
    )
}

export default Cover;