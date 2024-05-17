import { Input, View } from "tamagui";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

interface InputLocationProps {
    placeholder: string,
    value: string,
    vocal: boolean,
    autocomplete: boolean,
    getValue: (value: string) => void
}

const InputLocation = (props : InputLocationProps) => {

    
    return (
        <View>
            <Input value={ props.value } onChange={ (e) => props.getValue(e.nativeEvent.text) } placeholder={ props.placeholder } height={"$12"} size="$5" borderWidth={2} width={ "100%" } />
            <TouchableOpacity style={{
                position: "absolute",
                top: "50%",
                right: "3%",
                transform: [{ translateY: -12 }]
            }}>
                <FontAwesome5 name="microphone" size={20} color="#64A4FF" />
            </TouchableOpacity>
        </View>
    )
}

export default InputLocation;