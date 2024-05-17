import { useState, useRef, useEffect } from 'react';
import { YStack, View, Text, Input } from 'tamagui';


const InputCode = ({ onSubmit= (s: string ) => {}, reset = () => {} }: { onSubmit : (s :string) => void, reset : () => void}) => {

    const [code, setCode] = useState(['', '', '', '']);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);

    const switchInput = (text: string, index: number) => {
        if (text.length > 0 && firstRef.current && secondRef.current && thirdRef.current && fourthRef.current) {
            if (index === 1) {
                // @ts-ignore
                secondRef.current.focus();

            } else if (index === 2) {
                // @ts-ignore
                thirdRef.current.focus();
            } else if (index === 3) {
                // @ts-ignore
                fourthRef.current.focus();
            }
        }
    }
    
    useEffect(() => {
        if (code.join('').length === 4) {
            onSubmit(code.join(''));
        } else {
            reset();
        }
    }, [code])

    return (
        <View flexDirection='row' space="$3" justifyContent='center' alignItems='center'>
            <Input
                fontSize={"$6"}
                width={"$7"}
                height={"$7"}
                borderRadius={"$12"}
                textAlign='center'
                maxLength={1}
                keyboardType="numeric"
                autoFocus={true}
                ref={firstRef}
                focusStyle={{
                    borderColor: "#6764FF",
                    borderWidth: 2
                }}
                onChange={(e: any) => {
                    setCode(c => [e.nativeEvent.text, c[1], c[2], c[3]]);
                    switchInput(e.nativeEvent.text, 1);
                }}
            />
            <Input
                fontSize={"$6"}
                width={"$7"}
                height={"$7"}
                borderRadius={"$12"}
                textAlign='center'
                maxLength={1}
                keyboardType="numeric"
                ref={secondRef}
                focusStyle={{
                    borderColor: "#6764FF",
                    borderWidth: 2
                }}
                onChange={(e: any) =>{
                    setCode(c => [c[0], e.nativeEvent.text, c[2], c[3]]);
                    switchInput(e.nativeEvent.text, 2);
                }}
            />
            <Input
                fontSize={"$6"}
                width={"$7"}
                height={"$7"}
                borderRadius={"$12"}
                textAlign='center'
                maxLength={1}
                keyboardType="numeric"
                ref={thirdRef}
                focusStyle={{
                    borderColor: "#6764FF",
                    borderWidth: 2
                }}
                onChange={(e: any) => {
                    setCode(c => [c[0], c[1], e.nativeEvent.text, c[3]]);
                    switchInput(e.nativeEvent.text, 3);
                }}
            />
            <Input
                fontSize={"$6"}
                width={"$7"}
                height={"$7"}
                borderRadius={"$12"}
                textAlign='center'
                maxLength={1}
                keyboardType="numeric"
                ref={fourthRef}
                focusStyle={{
                    borderColor: "#6764FF",
                    borderWidth: 2
                }}
                onChange={(e: any) => {
                    setCode(c => [c[0], c[1], c[2], e.nativeEvent.text]);
                    switchInput(e.nativeEvent.text, 4);
                }}
            />
        </View>
    )
}

export default InputCode;