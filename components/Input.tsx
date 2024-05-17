import useDebounce from "@/hooks/useDebounce"
import { useState } from "react"
import { TextInput } from "react-native"
import { View } from "react-native-animatable"


export default function Input ({ getValue, placeholder } : {
    getValue: (value: string) => void,
    placeholder: string
}) {

    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce(value, 500)


    return(<>
        <View style={{
            flexDirection: "row",
            width: "90%",
            height: 50,
            borderWidth: 1,
            borderColor: "#16C59B",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 6,
        }}>
            <TextInput style={{
                width: "100%",
                height: "100%",
                textAlign: "left",
                paddingHorizontal: 10,
            
            }} onChange={ (e) => {
                setValue(e.nativeEvent.text)
                getValue(debouncedValue)
            }} placeholder={placeholder}>
                {value}
            </TextInput>
        </View>
    </>)
}