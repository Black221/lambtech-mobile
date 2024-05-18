import Input from "@/components/Input";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, View, YStack, Text, } from "tamagui";
import graphhopper from "@/api/graphhopper"
import axios from "axios";
import useMainState from "@/hooks/useMainState";
import { router } from "expo-router";

const instance = axios.create({
    baseURL: 'https://graphhopper.com/api/1',
    timeout: 1000,
});

export default function Search () {

    const [search, setSearch] = useState<string>("");
    const [data, setData] = useState<any[]>([]);

    const [response, error, load, fetch] = useAxios();


    useEffect(() => {
        const query = new URLSearchParams({
            q: search,
            locale: 'fr',
            limit: '5',
            reverse: 'false',
            debug: 'false',
            provider: 'default',
            key: "3fb6637d-9c29-4d6e-92e0-f49a3e0815c3",
        }).toString();
          
        fetch({
            axiosInstance: instance,
            url: "geocode?"+query,
            method: "GET",
            requestConfig: [
            ]
        })
    }, [search])

    useEffect(() => {
        if (response) {
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            setData(response?.hits || []);
        }
    }, [response])

    useEffect(() => {
        console.log(error, search);
    }, [error])

    const { setMarker } = useMainState()
    
    return (<>
        <YStack flex={1}>
        <SafeAreaView>
            <View>
                <Input placeholder="Search" getValue={(value:string) => setSearch(value)}  />
            </View>
            {load && <Text>...Loading</Text>}
            <ScrollView>
                {data.map((data, index) => {

                    return (<>
                        <YStack key={index} padding={"$4"} onPress={() => {
                            setMarker({
                                latitude: data.point.lat,
                                longitude: data.point.lng
                            })
                            router.replace("maps")
                        }}>
                            <Text fontSize={18}>{data.name}</Text>
                            <Text>{data.country}</Text>
                            <Text>{data.city}</Text>
                        </YStack>
                    </>)
                })}
            </ScrollView>
        </SafeAreaView>
        </YStack>
    </>)
}