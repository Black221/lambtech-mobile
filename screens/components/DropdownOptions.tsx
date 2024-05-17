import { useEffect, useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Text, YStack } from 'tamagui';


interface DropdownOptionsProps {
    options: string[];
    selected: string;
    open: boolean;
    onSelectedChange: (selected: string) => void;
}

const DropdownOptions = (props : DropdownOptionsProps) => {
    
    //rendering each option with different delay

    //function to return an option every 100ms
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        setOptions(props.options)
    }, [props.open])



    return (props.open 
        ? <YStack borderWidth={2}
                  borderColor={'$gray4'}
                  space={'$2'} 
                  width={'100%'}
                  position='absolute'
                  backgroundColor={"white"} 
                  padding="$2" 
                  marginHorizontal="$2" 
                  borderRadius={'$2'}>
            {options.map((option, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => props.onSelectedChange(option)}
                    >
                        <Text>{option}</Text>
                    </TouchableOpacity>
                )
            })}
        </YStack>
        : null
    )
}

export default DropdownOptions;