import Logo from "@/components/Logo";
import { View, StyleSheet } from "react-native";


export default function Landing () {

    return (<>
        <View style={style.container}>
            <Logo type="white" />
        </View>
    </>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#16C59B',
    },
});