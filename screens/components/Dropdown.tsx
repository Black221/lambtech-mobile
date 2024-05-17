import { useEffect, useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { View, Text, XStack, YStack } from 'tamagui';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import DropdownOptions from './DropdownOptions';

interface DropdownProps {
    options: string[];
    selected: string;
    onSelectedChange: (selected: string) => void;
}

const Dropdown = (props : DropdownProps) => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string>('Français');

    const rotate = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(rotate, {
            toValue: open ? 1 : -1,
            duration: 200,
            useNativeDriver: true
        }).start();
    }, [open])

    return (
        
        <YStack space={'$2'} position='relative'>
            <TouchableOpacity onPress={() => setOpen(!open)}>
                <XStack  marginHorizontal="$2" space="$3" alignItems='center' borderWidth={2} padding={"$3"} paddingVertical={'$3'} borderRadius={10} borderColor={"$gray6"} backgroundColor={"$gray2"} >
                    <MaterialCommunityIcons name="calendar-month" size={24} color="#64A4FF" />
                    <Text flex={1} fontSize={"$5"}>{ selected }</Text>
                    <Animated.View style={{transform: [{rotate: rotate.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ['90deg', '0deg']
                    })}]}}>
                        <FontAwesome name="caret-down" size={24} color="black" />
                    </Animated.View>
                </XStack>
            </TouchableOpacity>
            <View position='relative'>
                <DropdownOptions options={props.options} open={open} selected={props.selected} onSelectedChange={setSelected} />
            </View>
        </YStack>
    )
}

export default Dropdown;