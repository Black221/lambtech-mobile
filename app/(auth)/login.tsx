import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";



export default function Login() {
    

    return (<>
        <View style={style.container}>
            <Logo type="green" />
            <View  style={{
                paddingVertical: 10
            }}>
                <Text style={{
                    fontSize: 32,
                    color: "#16C59B",
                    fontWeight: "semibold",
                    textAlign: "center"
                }}>Connexion</Text>
                <Text style={{
                    fontSize: 20
                }}>Content de vous revoir</Text>
            </View>
            <View style={{
                paddingVertical: 20
            }}>
                <Input getValue={(value: string) => console.log(value)} placeholder="Téléphone" />
                <Input getValue={(value: string) => console.log(value)} placeholder="Code" />
                <Text style={{
                    color: "#16C59B",
                    fontSize: 14,
                    textAlign: "right"
                    }}>Code secret oublie?</Text>
            </View>
            <View>
                <Button label="Se connecter" action={() => {
                    router.replace("profile")
                }} />
                <Link style={{
                    color: "#16C59B",
                    fontSize: 18,
                    padding: 10,
                    textAlign: "center"
                }} href="/register">
                    S'inscrire
                </Link>
            </View>
        </View>
    </>)
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

})