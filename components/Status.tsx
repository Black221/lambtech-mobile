import { ColorTokens } from "tamagui";
import { View, Text } from "tamagui";

interface StatusProps {
    status: "En attente" | "En cours" | "Terminé" | "Annulé";
}

const Status = (props : StatusProps) => {

    const statusBG = () : ColorTokens => {
        if (props.status === "En attente") return "$yellow4";
        if (props.status === "En cours") return "$blue4";
        if (props.status === "Annulé") return "$red4";
        return "$green4";
    }

    const statusColor = () : ColorTokens => {
        if (props.status === "En attente") return "$yellow10";
        if (props.status === "En cours") return "$blue10";
        if (props.status === "Annulé") return "$red10";
        return "$green10";
    }

    return (
        <View backgroundColor={statusBG()} borderRadius={"$2"} padding={"$1"} paddingHorizontal={"$2"} >
            <Text fontSize={"$5"} color={statusColor()}>{props.status}</Text>
        </View>
    )
}

export default Status;