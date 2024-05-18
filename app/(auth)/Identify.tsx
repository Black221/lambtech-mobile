import { YStack, Text } from "tamagui"
import InputPhone from '@/components/InputPhone';
import Btn from "@/components/Btn";
import { useState } from "react";



const Identify = ({ navigation } : any) => {

    const [phone, setPhone] = useState<string>("");
    
    return (
        <YStack backgroundColor={"$gray3"} space={"$6"}  h={"100%"} paddingVertical={"$6"} paddingHorizontal={"$4"}>
            
            <YStack space={"$0.25"} >
                <Text fontSize={26} textAlign="center">Inscription</Text>
                <Text fontSize={20} textAlign="center">Entrer votre numéro de téléphone</Text>
                <Text fontSize={14} textAlign="center" color={"#6764FF"}>Nous vous enverrons un code de validation</Text>
            </YStack>

            <InputPhone getValue={setPhone} />

            <YStack flex={1} justifyContent="flex-end" >
                <Btn label="Suivant" disabled={phone.length !== 9} action={() => {
                    console.log("phone: ", phone)
                    navigation.navigate("Register", {phone: phone})
                }} />
            </YStack>
        </YStack>
    )
}

export default Identify;