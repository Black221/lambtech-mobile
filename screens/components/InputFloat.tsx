import { Input, Label, Text, YStack } from "tamagui";


const InputFloat = (props: any) => {

    return (
        <YStack>
            <Label>{props.label}</Label>
            <Input
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
            />
        </YStack>
    )
}

export default InputFloat;