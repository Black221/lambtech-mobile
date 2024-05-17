import { YStack, Input, Label, Text, XStack, View, Button, ScrollView, YGroup, XGroup, ListItem } from 'tamagui';
import { AntDesign, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'tamagui/linear-gradient';
import { TouchableOpacity } from 'react-native';
import Payment from '../components/Payment';

export default function Profile({ navigation } : any) {

    const OPTIONS = [
        { label: 'Partager', screens: [
            { label: "Inviter un ami à rejoindre", icon: <MaterialCommunityIcons size={32} name='share-variant-outline' />, to: "screen1" },
            { label: "Utiliser le code promotionnel", icon: <MaterialCommunityIcons size={32} name='ticket-percent-outline' />, to: "screen2" },
        ]},
        { label: 'Support', screens: [
            { label: "Contactez le service client", icon: <MaterialCommunityIcons size={32} name='phone-outline' />, to: "screen1" },
            { label: "Agent  proximité", icon: <MaterialCommunityIcons size={32} name='map-marker-outline' />, to: "screen2" },
        ]},
        { label: 'Sécutié', screens: [
            { label: "Modifiez votre mot de passe", icon: <MaterialCommunityIcons size={32} name='shield-key-outline' />, to: "screen1" },
        ]},
    ]
    return (
        <ScrollView height={"100%"} backgroundColor={"$gray2"} padding={'$2'} >
            {/* <XStack  margin={'$2'}  justifyContent='center' alignItems='center'  >
                <LinearGradient
                    borderRadius={ "$4" }
                    position='absolute'
                    width={"100%"} height={"100%"}
                    colors={['#61E3FF', '#6764FF']}
                    start={[1, 0]}
                    end={[1, 1]}
                />

                <YStack padding={'$3'} space={'$1'} justifyContent='center'  width={"100%"} >
                    <XStack  justifyContent='center' position='relative'>
                        <Text fontSize={18} fontWeight={"600"} color="white" position='absolute' left={0}>Mon profil</Text>
                        <View justifyContent='center' alignItems='center'>
                            <MaterialCommunityIcons name="account-circle" size={120} color="white" />
                        </View>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            top: 0, right: 0,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            borderRadius: 50, padding: 10
                        }}>
                            <MaterialCommunityIcons name="account-edit" size={30} color="white" />
                        </TouchableOpacity>
                    </XStack>
                    <XStack alignItems='flex-end'>
                        <Text fontSize={16} fontWeight={"600"} color="white">Nom: </Text>
                        <Text fontSize={18} fontWeight={"600"} color="white">Malick DIENE</Text>
                    </XStack>
                    <XStack alignItems='flex-end'>
                        <Text fontSize={16} fontWeight={"600"} color="white">Téléphone: </Text>
                        <Text fontSize={18} fontWeight={"600"} color="white">+221 ** *** ** **</Text>
                    </XStack>
                </YStack>
            </XStack> */}
            <XStack  alignItems='center' justifyContent='center' space="$4" paddingVertical={"$4"} >
                <View position='relative' alignItems='center' justifyContent='center' height={140} width={140}>
                    <LinearGradient
                        borderRadius={70}
                        position='absolute'
                        width={"100%"} height={"100%"}
                        colors={['#61E3FF', '#6764FF']}
                        start={[1, 0]}
                        end={[1, 1]}
                    />
                    <MaterialCommunityIcons name="account" size={120} color="white" />
                </View>
                <YStack padding={'$3'} space={'$2'} alignItems='center' justifyContent='center'  >
                    <Text fontSize={20} fontWeight={"600"} color="$gray12">Mon profil</Text>
                    <Text fontSize={18} fontWeight={"600"} color="$gray10">Téléphone</Text>
                    <XStack space={'$3'} >
                        <TouchableOpacity style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40, height: 40,
                        }}>
                            <LinearGradient
                                borderRadius={ 40 }
                                position='absolute'
                                width={40} height={40}
                                colors={['#61E3FF', '#6764FF']}
                                start={[1, 0]}
                                end={[1, 1]}
                            />
                            <MaterialCommunityIcons name="account-edit" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40, height: 40,

                        }}>
                            <LinearGradient
                                borderRadius={ 40 }
                                position='absolute'
                                width={40} height={40}
                                colors={['#61E3FF', '#6764FF']}
                                start={[1, 0]}
                                end={[1, 1]}
                            />
                            <MaterialCommunityIcons name="door" size={24} color="white" />
                        </TouchableOpacity>
                    </XStack>
                </YStack>
            </XStack>

            {OPTIONS.map((option, index) => (
                <YStack key={index}  marginTop={0} >
                    <Text fontSize={16} fontWeight={"500"} margin={'$2'} color="$gray9">{option.label}</Text>
                    <YGroup key={index} margin={"$2"} marginTop={0} >
                        {option.screens.map((screen, index) => (
                            <YGroup.Item key={index} >
                                <ListItem paddingVertical={'$3.5'}
                                    title={<Text fontSize={18} fontWeight={"600"} color="$gray12">{screen.label}</Text>}
                                    onPress={() => navigation.navigate(screen.to)}
                                    icon={screen.icon}
                                />
                            </YGroup.Item>
                        ))}
                    </YGroup>
                </YStack>
            ))}

            <Payment />

            <View height={120} />

        </ScrollView>
    )  
}
