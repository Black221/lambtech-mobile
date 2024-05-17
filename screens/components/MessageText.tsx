import { socket } from "@/api/socket";
import { View, Text } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const MessagesText = ({id, sender, text, time}: any) => {

    return (
        <View position="relative" display="flex" key={id} margin={"$3"}  backgroundColor={sender === socket.id ? "$gray5" : "white"} borderRadius={"$4"} alignSelf={sender === socket.id ? "flex-end" : "flex-start"}>
            <View>
                {sender !== socket.id && <LinearGradient
                    borderRadius={"$4"}
                    position='absolute'
                    width={"100%"} height={"100%"}
                    colors={['#61E3FF', '#6764FF']}
                    start={[1, 0]}
                    end={[1, 1]}
                />}
                <Text padding={"$2"} paddingHorizontal={"$4"} fontSize={16} color={sender === socket.id ? "black" : "white"}>
                    {text}
                </Text>
            </View>
        </View>
    )
}

export default MessagesText;