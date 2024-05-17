import { useEffect, useState } from "react";       
import { View, YStack, Text, Button } from "tamagui"
import InputCode from "../components/InputCode";
import Btn from "../components/Btn";


const ConfirmCode = () => {

    const onSubmit = (code: string) => {
        console.log(code);
        setCode(code);
        setActiveBtn(true);
    }   

    const [code, setCode] = useState('');
    const [activeBtn, setActiveBtn] = useState(false);

    useEffect(() => {
        if (code.length === 4) {
            setActiveBtn(true);
        } else {
            setActiveBtn(false);
        }
    }, [code])

    const resetCode = () => {
        setCode('');
        setActiveBtn(false);
        console.log("code reset");
    }

    return (
        <YStack space={"$6"}>

            <View  justifyContent="center" alignItems="center">
                <Text fontSize={28}>Entrer le code de</Text>
                <Text fontSize={28}>validation</Text>
                <Text>Entrez les 4 chiffres que nous avons envoyés via le</Text>
                <Text>Numéro de téléphone +221 77 777 77 77</Text>
            </View>

            <InputCode onSubmit={onSubmit} reset={resetCode} />

            <View>
                <Button>
                    <Text fontSize={18} color={"black"}>Renvoyer le code</Text>
                </Button>
                <Btn label="Valider" disabled={!activeBtn} action={() => {
                    console.log("code: ", code)
                }} />
            </View>
        </YStack>
    )
}

export default ConfirmCode;