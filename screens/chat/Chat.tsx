import { Text, YStack, XStack, Input, ScrollView, ListItem, YGroup } from "tamagui"
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { socket } from "@/api/socket";
//@ts-ignore
// import profile from '../../../assets/profile.png'
//@ts-ignore
function ChatRoom({navigation}) {

const livreurs = [
    {
        lastname: "DIENE",
        firstname: "Malick",
        number: "+221 ** *** ** **"

    },
    {
        lastname: "Bar",
        firstname: "Bouna",
        number: "+221 ** *** ** **"
    },
    {
        lastname: "Ndiaye",
        firstname: "Fallou",
        number: "+221 ** *** ** **"
    },
    {
        lastname: "Bar",
        firstname: "Bouna",
        number: "+221 ** *** ** **"
    },
    {
        lastname: "Bar",
        firstname: "Bouna",
        number: "+221 ** *** ** **"
    },
]

function onChating(livreur: {lastname: string, firstname: string, number: string}) {
    navigation.navigate('SpecificChat', { name: `${livreur.firstname} ${livreur.lastname}`})
    socket.connect()
}

    return (
        
    <YStack h={"100%"}  backgroundColor={"$gray1"} justifyContent="space-around" alignItems="flex-start" >
    
        <YStack>
            <XStack  justifyContent="space-between" alignItems="center" padding={"$3"} space={"$3"}>
                <FontAwesome name="comments" size={24} color="#64A4FF" />
                <Text flex={1} fontSize={24} fontWeight={"400"} col={"#64A4FF"}>Messages</Text>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                </TouchableOpacity>
            </XStack>
            <XStack  justifyContent="center" alignItems="center" padding={"$2"} >
                <Input placeholder="Rechercher" width="100%"   />
            </XStack>
        </YStack>
        <ScrollView width={"100%"}>
            <YGroup padding={"$2"}>
                {livreurs.map((livreur, index) => 
                <YGroup.Item key={`${livreur.number}-${index}`}>
                    <ListItem 
                        onPress={() => onChating(livreur)}
                        title={`${livreur.firstname} ${livreur.lastname}`} 
                        subTitle={livreur.number} 
                        bordered pressTheme
                        iconAfter={<AntDesign name="right" size={20} color="black" />} 
                        icon={<AntDesign name="user" size={24} color="black" />}
                    />
                </YGroup.Item>
                )}
            </YGroup>
        </ScrollView>
        
    </YStack>
    )
}

export default ChatRoom