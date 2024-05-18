import { YStack, Text, View } from "tamagui"
import InputPhone from '@/components/InputPhone';
import Btn from "@/components/Btn";
import { useState } from "react";
import InputFloat from "@/components/InputFloat";



const Register = ({ navigation, route } : any) => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    
    return (
        <YStack backgroundColor={"$gray3"} space={"$6"}  h={"100%"} paddingVertical={"$6"} paddingHorizontal={"$4"}>
            
            <YStack space={"$0.25"} >
                <Text fontSize={26} textAlign="center">Inscription</Text>
                <Text fontSize={20} textAlign="center">Entrer votre numéro de téléphone</Text>
                <Text fontSize={14} textAlign="center" color={"#6764FF"}>Nous vous enverrons un code de validation</Text>
            </YStack>

            <View>
                <InputFloat label="Prénom" getValue={setFirstName} />
                <InputFloat label="Nom" getValue={setLastName} />

            </View>


            <YStack flex={1} justifyContent="flex-end" >
                <Btn label="Suivant" disabled={firstName !== "" && lastName!== ""} action={() => {
                    navigation.navigate("Code", {phone: route.params.phone})
                }} />
            </YStack>
        </YStack>
    )
}

export default Register;