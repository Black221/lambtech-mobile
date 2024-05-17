import { View, Text, YStack, Button, Image } from "tamagui";
import { DEVICE_WIDTH } from "@/constants/Dimension";



export default function WelcomeScreen ({ navigation } : { navigation: any}) {

    // load the image from the assets folder
    const bg = require("@assets/welcome-bg.png");
    const coverWidth = DEVICE_WIDTH * 5 / 6;

    return (
        <View bg="white">
            <YStack alignItems="center" justifyContent="space-evenly" height={"100%"}>
                <View width={coverWidth} height={coverWidth} borderRadius={coverWidth} overflow="hidden" borderWidth={1} borderColor={"$gray6"}>
                    <Image source={bg} width={coverWidth} height={coverWidth} />
                </View>

                <View space={"$4"}>
                    <Text paddingHorizontal={"$2"} fontWeight={"bold"} fontSize={"$8"} textAlign="center" >Besoin  de conseil, ou de parler sur un sujet qui vous tracasse ?</Text>
                    <Text paddingHorizontal={"$2"} fontSize={"$4"} letterSpacing={1.5} textAlign="center">Avec [nom appli] discuter avec des spécialistes en psychologies sociologie et en développement personnel  gratuitement en toute sécurité et en total anonymat. </Text>
                </View>

                <View width={"100%"} px={"$6"}>
                    <Button onPress={() => {
                        navigation.navigate("Home");
                    }}>Continuer</Button>
                </View>
            </YStack>
        </View>
    )
}