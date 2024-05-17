import useAxios from "@/hooks/useAxios";
import { useEffect, useState,  } from "react";
import { View, Text, XStack, Input, Select, YStack } from "tamagui"

import axios from "axios";
import { SelectDemo } from "./SelectTamagui";
import Dropdown from "./Dropdown";


const InputPhone = ({ getValue } : any) => {

    // const [countryCode, setCountryCode] = useState<{
    //     name: string, code: string, dial_code: string
    // }[]>([]);
    // const [selectedCountryCode, setSelectedCountryCode] = useState<{
    //     name: string, code: string, dial_code: string
    // }>({name: "Senegal", code: "SN", dial_code: "+221"});

    // useEffect(() => {
    //     axios.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json').then((res) => {
    //         setCountryCode(res.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, []);

    

    return (
        <YStack space={"$2"}>
            <Text fontSize={"$5"}>Numéro de téléphone</Text>
            <XStack alignItems="center" space={"$2"} >
                {/* Identifiant number */}
                    {/* Select  */}
                    <Input
                        w={"$8"}
                        fontSize={"$6"}
                        keyboardType="numeric"
                        autoFocus={true}
                        defaultValue="+221"
                        focusStyle={{
                            borderColor: "#6764FF",
                            borderWidth: 2
                        }}
                        onChange={(e: any) => {}}
                    />
                    <Input
                        flex={1}
                        fontSize={"$6"}
                        keyboardType="numeric"
                        autoFocus={true}
                        focusStyle={{
                            borderColor: "#6764FF",
                            borderWidth: 2,
                        }}
                        onChange={(e: any) => {getValue(e.nativeEvent.text)}}
                    />
            </XStack>
        </YStack>
    )
}

export default InputPhone;