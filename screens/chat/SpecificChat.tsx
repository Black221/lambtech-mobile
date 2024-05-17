import { YStack, Text, XStack, ScrollView, View, Input } from "tamagui"
import { useEffect, useState } from "react";
import InputIcons from "../components/InputIcons";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MessagesText from "../components/MessageText";
import { socket } from "@/api/socket";


function Chat({route, navigation}: any) {

	const [value, setValue] = useState("");
	const [data, setData] = useState<Array<{id: number, sender: number, text: string, time: string}>>([]);

    useEffect(() => {
        navigation.setOptions({
          	title: route.params.name, 
        });

		socket.on("message", ({id, sender, text, time} : any) => {
			setData([...data, {id, sender, text, time}])
		})

		
	}, []);

  function onMessaging() {
    socket.emit('message', {id: data.length + 1, text: value, time: '19:00' })
    setValue('')
  }
  socket.on('message', ({id, sender, text, time} : any) => {
    setData([...data, {id, sender, text, time}])
  })


    return (
		<YStack backgroundColor={"$gray2"} height={"100%"} justifyContent="space-around">
			<ScrollView flex={1} >
				{data.map(({id, sender, text, time}) => (
					<MessagesText id={id} sender={sender} text={text} time={time} />
				))}
			</ScrollView>
			{InputIcons({
				left: <TouchableOpacity style={{}}>
					<MaterialCommunityIcons name="attachment" size={24} color="#64A4FF" />
				</TouchableOpacity>,
				right: <TouchableOpacity style={{}}  onPress={() => onMessaging()}>
					<MaterialCommunityIcons name="send" size={24} color="#64A4FF" />
				</TouchableOpacity>
			}, value, setValue)}
		</YStack>
    )
}

export default Chat