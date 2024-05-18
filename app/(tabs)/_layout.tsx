import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function Layout () {
    const colorScheme = useColorScheme();

    return (<>
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
        }}>
            <Tabs.Screen
                name="maps"
                options={{
                    title: 'Gnu dem',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'car-sport' : 'car-sport-outline'} color={
                            focused ? "#16C59B" : color
                        } />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'chatbox' : 'chatbox-outline'} color={
                            focused ? "#16C59B" : color
                        } />
                    ),
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: 'Notif',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={
                            focused ? "#16C59B" : color
                        } />
                    ),
                }}
            />
        </Tabs>
    </>)
}