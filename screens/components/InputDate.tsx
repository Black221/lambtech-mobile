import { useState } from 'react';
import { View, Text, XStack } from 'tamagui';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface InputDateProps {

}

const InputDate = (props: InputDateProps) => {
    
    const [selectedDate, setSelectedDate] = useState<string>('');

    return (
        <XStack marginHorizontal="$2" space="$3" alignItems='center' borderWidth={2} padding={"$3"} paddingVertical={'$3'} borderRadius={10} borderColor={"$gray6"} backgroundColor={"$gray2"} >
            <MaterialCommunityIcons name="calendar-month" size={24} color="#64A4FF" />
            <Text fontSize={"$5"}>{ selectedDate ? selectedDate : "Aujourd'hui" }</Text>
        </XStack>
    )
}

export default InputDate;