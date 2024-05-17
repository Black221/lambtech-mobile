import React, { useEffect, useState } from 'react';
import { View, XStack, YStack } from 'tamagui';
import InputLocation from './InputLocation';
import { FontAwesome, Octicons } from '@expo/vector-icons';


interface DoubleLocationProps {
    getValue: (value: [string, string]) => void
}

const DoubleLocation = (props : DoubleLocationProps) => {

    const [input1, setInput1] = useState<string>("")
    const [input2, setInput2] = useState<string>("")

    useEffect(() => {
        props.getValue([input1, input2])
    }, [input1, input2])


    return (
        <XStack padding={"$2"} space={"$2"}>

            <YStack  paddingVertical={"$2"} justifyContent='space-around' alignItems='center'>
                <FontAwesome name="dot-circle-o" size={24} color="#64A4FF" />
                <FontAwesome name="ellipsis-v" size={18} color="#64A4FF" />
                <Octicons name="location" size={24} color="#64A4FF" />
            </YStack>

            <YStack flex={1} space={'$2'}>
                <InputLocation placeholder={ "de..." } autocomplete={ true } vocal={false} value={ input1 } getValue={setInput1}  />
                <InputLocation placeholder={ "vers..." } autocomplete={ true } vocal={false} value={ input2 } getValue={setInput2} />
            </YStack>
            
        </XStack>
    )

}

export default DoubleLocation;