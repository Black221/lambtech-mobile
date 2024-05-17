import { View, Text, StyleSheet, Image } from 'react-native';


export default function Logo ({ type = "white" } : { type: "white" | "green"}) {

    return (<>
        <View style={style.container}>
            <Image style={style.logo} source={
                type === "white" ? require("../assets/images/logo-white.png") : require("../assets/images/logo-green.png")
            } />
        </View>
    </>)
}


const style = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10
    },
    logo: {
        width: 160, height: 80
    }
});