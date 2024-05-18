import React from 'react';
import { YStack, Text, XStack, View, ScrollView, YGroup, ListItem } from 'tamagui';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Profile({ navigation }) {

    const OPTIONS = [
        { label: 'Support', screens: [
            { label: "Devenir Conducteur", icon: <MaterialCommunityIcons size={32} name='car' />, to: "driverSignUp" },
        ]},
        { label: 'Sécurité', screens: [
            { label: "Changer mot de passe", icon: <MaterialCommunityIcons size={32} name='shield-key-outline' />, to: "changePassword" },
        ]},
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }} padding={'$8'}>
            <XStack alignItems='center' justifyContent='center' paddingVertical={"$6"} flexDirection='column'>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 140,
                        width: 140,
                        borderRadius: 70,
                        backgroundColor: '#16C59B',
                        marginBottom: '$3',
                        overflow: 'hidden',
                    }}
                >
                    <MaterialCommunityIcons name="account" size={120} color="white" />
                </View>
                <YStack padding={'$3'} space={'$2'} alignItems='center' justifyContent='center'>
                    <Text fontSize={22} fontWeight={"700"} color="$gray12">
                        Nom Complet : <Text className="text-gray-500 font-bold">Sarah</Text>
                    </Text>
                    <Text fontSize={18} fontWeight={"600"} color="$gray10">+221 77 319 83 54</Text>
                    <XStack space={'$3'} marginTop={'$3'}>
                        <TouchableOpacity
                            style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                backgroundColor: '#16C59B',
                                borderRadius: 40,
                            }}
                        >
                            <MaterialCommunityIcons name="account-edit" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                backgroundColor: '#16C59B',
                                borderRadius: 40,
                            }}
                        >
                            <MaterialCommunityIcons name="logout" size={24} color="white" />
                        </TouchableOpacity>
                    </XStack>
                </YStack>
            </XStack>

            {OPTIONS.map((option, index) => (
                <YStack key={index} marginBottom={'$4'}>
                    <Text fontSize={18} fontWeight={"600"} margin={'$3'} color="$gray11">{option.label}</Text>
                    <YGroup>
                        {option.screens.map((screen, screenIndex) => (
                            <YGroup.Item key={screenIndex}>
                                <ListItem
                                    paddingVertical={'$4'}
                                    title={
                                        <XStack alignItems='center'>
                                            <Text fontSize={20} fontWeight={"600"} color="$gray12" marginLeft={'$4'}>
                                                {screen.label}
                                            </Text>
                                        </XStack>
                                    }
                                    onPress={() => navigation.navigate(screen.to)}
                                    icon={
                                        <XStack alignItems='center' >
                                            {screen.icon}
                                        </XStack>
                                    }
                                />
                            </YGroup.Item>
                        ))}
                    </YGroup>
                </YStack>
            ))}

            <View height={120} />
        </ScrollView>
    );
}
