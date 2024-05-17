import { TouchableOpacity, Text, View } from "react-native";



export default function Button({action, label}: {
    action: () => void,
    label: string
}) {

    return(<>
        <View  style={{
            flexDirection: "row",
            width: "90%",
            backgroundColor: "#16C59B",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 6,
        }}>
            <TouchableOpacity style={{
                padding: 10,
                width: "100%",
                borderRadius: 40,
            }} onPress={action}>
                <Text style={{
                    color: "#FFF",
                    fontSize: 20,
                    textAlign: "center"
                }}>{label}</Text>
            </TouchableOpacity>
        </View>
    </>)
}