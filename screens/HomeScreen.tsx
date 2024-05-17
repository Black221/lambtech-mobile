import SectionComponent from "@/components/SectionComponent"
import { DEVICE_WIDTH } from "@/constants/Dimension"
import { View, Text, XStack, Image, YStack, ScrollView } from "tamagui"


export default function HomeScreen ( { navigation } : { navigation: any}) {

    // load images from assets
    const expert = require("@assets/expert.png")
    const notebook = require("@assets/notebook.png")
    const donate = require("@assets/donate.png")
   

    return (
        <ScrollView showsVerticalScrollIndicator={false} bg="white" >
            <View width={DEVICE_WIDTH} height={300} position="relative">
                <Image position="absolute" width={DEVICE_WIDTH} height={300} source={{ uri:"https://picsum.photos/400/300"}} />
                <XStack pos={"absolute"} zIndex={100} width={"100%"} p={"$4"} alignItems="center" justifyContent="space-between">
                    <Text>Logo</Text>
                    <View bg="white" width={38} height={38} borderRadius={10} overflow="hidden" borderWidth={1} borderColor={"$gray6"} display="flex" alignItems="center" justifyContent="center">
                        <Image source={require("@assets/menu.png")} width={28} height={28} />
                    </View>
                </XStack>
                <XStack>
                    <View bg="rgba(0,0,0,0.5)" width={DEVICE_WIDTH} height={300} alignItems="center" justifyContent="center" space={"$2"}>
                        <Text color="white" fontSize={"$6"} fontWeight={"bold"} width={"80%"} textAlign="center">
                            Comme une journée bien remplie
                            nous donne un bon sommeil, une vie 
                            bien vécue nous mène à une mort 
                            paisible.
                        </Text>
                        <Text color="white" fontSize={"$3"} fontWeight={"bold"} width={"75%"} textAlign="center">
                            - Léonard de Vinci
                        </Text>
                    </View>
                </XStack>
            </View>
            <SectionComponent title="Vous voulez ?">
                <XStack alignItems="center" justifyContent="space-around" >
                    <YStack onPress={() => {
                        navigation.navigate("Notebook")
                    }} space={"$1"} alignItems="center" justifyContent="center" >
                        <View bg={"white"} display="flex" alignItems="center" justifyContent="center" width={64} height={64} borderRadius={64} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                            <Image source={notebook}  width={38} height={38} />
                        </View>
                        <Text fontSize={"$1"} fontWeight={"600"}>Journal</Text>
                    </YStack>
                    <YStack onPress={() => {
                        navigation.navigate("Chatroom")
                    }} space={"$1"} alignItems="center" justifyContent="center" >
                        <View bg={"white"} display="flex" alignItems="center" justifyContent="center" width={64} height={64} borderRadius={64} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                            <Image source={expert}  width={48} height={48} />
                        </View>
                        <Text fontSize={"$1"} fontWeight={"600"}>Parler à un expert</Text>
                    </YStack>
                    <YStack onPress={() => {
                        navigation.navigate("Donation")
                    }} space={"$1"} alignItems="center" justifyContent="center" >
                        <View bg={"white"} display="flex" alignItems="center" justifyContent="center" width={64} height={64} borderRadius={64} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                            <Image source={donate}  width={44} height={44} />
                        </View>
                        <Text fontSize={"$1"} fontWeight={"600"}>Faire un don</Text>
                    </YStack>
                </XStack>
            </SectionComponent>
            <SectionComponent title="Discussions">
                <YStack space={"$3"} alignItems="center" justifyContent="center" >
                    <XStack space={"$1"} alignItems="center" justifyContent="space-between" bg={"white"} w={"100%"} py={"$2"} px={"$3"} borderRadius={10} shadowRadius={10} shadowColor={"$gray8"} shadowOpacity={0.1}  borderWidth={1} borderColor={"$gray6"}>
                        <View bg={"white"} display="flex" alignItems="center" justifyContent="center" width={64} height={64} borderRadius={64} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                            <Image source={expert}  width={48} height={48} />
                        </View>
                        <View flex={1} ml={"$3"} space={"$1"} >
                            <Text fontSize={"$6"} fontWeight={"500"}>Expert</Text>
                            <Text fontSize={"$4"} fontWeight={"400"} letterSpacing={1}>Psychologue</Text>
                        </View>
                        <View bg={"$green"} display="flex" alignItems="center" justifyContent="center" space={"$2"} >
                            <Text color={"black"} fontSize={"$3"} fontWeight={"600"} letterSpacing={2}>8:20</Text>
                            <View width={32} height={32} borderRadius={20} borderWidth={0.75} borderColor={"$gray8"} display="flex" justifyContent="center" alignItems="center">
                                <Text color={"black"} fontSize={"$3"} fontWeight={"600"}>1</Text>
                            </View>
                        </View>
                    </XStack>
                    <XStack space={"$1"} alignItems="center" justifyContent="space-between" bg={"white"} w={"100%"} py={"$2"} px={"$3"} borderRadius={10} shadowRadius={10} shadowColor={"$gray8"} shadowOpacity={0.1}  borderWidth={1} borderColor={"$gray6"}>
                        <View bg={"white"} display="flex" alignItems="center" justifyContent="center" width={64} height={64} borderRadius={64} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                            <Image source={expert}  width={48} height={48} />
                        </View>
                        <View flex={1} ml={"$3"} space={"$1"} >
                            <Text fontSize={"$6"} fontWeight={"500"}>Expert</Text>
                            <Text fontSize={"$4"} fontWeight={"400"} letterSpacing={1}>Psychologue</Text>
                        </View>
                        <View bg={"$green"} display="flex" alignItems="center" justifyContent="center" space={"$2"} >
                            <Text color={"black"} fontSize={"$3"} fontWeight={"600"} letterSpacing={2}>8:20</Text>
                            <View width={32} height={32} borderRadius={20} borderWidth={0.75} borderColor={"$gray8"} display="flex" justifyContent="center" alignItems="center">
                                <Text color={"black"} fontSize={"$3"} fontWeight={"600"}>1</Text>
                            </View>
                        </View>
                    </XStack>
                    <XStack space={"$1"} alignItems="center" justifyContent="space-between" bg={"white"} w={"100%"} py={"$2"} px={"$3"} borderRadius={10} shadowRadius={10} shadowColor={"$gray8"} shadowOpacity={0.1}  borderWidth={1} borderColor={"$gray6"}>
                        <View bg={"white"} display="flex" alignItems="center" justifyContent="center" width={64} height={64} borderRadius={64} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                            <Image source={expert}  width={48} height={48} />
                        </View>
                        <View flex={1} ml={"$3"} space={"$1"} >
                            <Text fontSize={"$6"} fontWeight={"500"}>Expert</Text>
                            <Text fontSize={"$4"} fontWeight={"400"} letterSpacing={1}>Psychologue</Text>
                        </View>
                        <View bg={"$green"} display="flex" alignItems="center" justifyContent="center" space={"$2"} >
                            <Text color={"black"} fontSize={"$3"} fontWeight={"600"} letterSpacing={2}>8:20</Text>
                            <View width={32} height={32} borderRadius={20} borderWidth={0.75} borderColor={"$gray8"} display="flex" justifyContent="center" alignItems="center">
                                <Text color={"black"} fontSize={"$3"} fontWeight={"600"}>1</Text>
                            </View>
                        </View>
                    </XStack>
                </YStack>
            </SectionComponent>
        </ScrollView>
    )
}