
import { StyleSheet,Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import * as Location from 'expo-location';
import { useEffect,useState } from "react";
//@ts-ignore
import {decode} from "@mapbox/polyline"; //please install this package before running!
import useAxios from "@/hooks/useAxios";
import graphhopper from "@/api/graphhopper"
import { XStack, View, Text, YStack } from "tamagui";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";


interface Location {
    coords: {
        latitude: number;
        longitude: number;
    };
}

interface Camera {
    center: {
        latitude: number;
        longitude: number;
    };
    pitch: number;
    heading: number;
    altitude: number;
    zoom: number;
}

interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const DATA = {
    start: {
        name: "Sam Geultape",
        latitude: 14.68,
        longitude: -17.44,
    },
    middle: [

    ],
    end: {
        name: "IIBS Sacre Coeur 3",
        latitude: 14.68,
        longitude: -17.44,
    }
}
export default function MapPage() {

    const [location, setLocation] = useState<Location>({ coords: {
        latitude: 14.68,
        longitude: -17.44,
    }});
    const [camera, setCamera] = useState<Camera>({
        center: {
            latitude: location?.["coords"]?.latitude,
            longitude: location?.["coords"]?.longitude,
        },
        pitch: 0,
        heading: 80,
        altitude: 600,
        zoom: 16
    })
    const [region, setRegion] = useState<Region>({
        latitude: location?.["coords"]?.latitude,
        longitude: location?.["coords"]?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [errorMsg, setErrorMsg] = useState<string>("");
  
    //Initialisation de la position et des
    useEffect(() => {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            // console.log(location)
            setLocation(location);
            //method to simulate car movement
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const [secondMarker, setSecondMarker] = useState<{
        latitude: number; longitude: number;
    }>({
        latitude: 14.68,
        longitude: -17.44,
    });

    const [firstMarker, setFirstMarker] = useState<{
        latitude: number; longitude: number;
    }>({
        latitude: 14.68,
        longitude: -17.44,
    });

    const [response, error, loading, fetch] = useAxios();
    const [coords, setCoords] = useState([]);

    const [selected, setSelected] = useState<"first" | "second">("first")


    useEffect(() => {

        const body = {
            profile: "car",
            points: [
                [
                    firstMarker.longitude,
                    firstMarker.latitude
                ],
                [
                    secondMarker.longitude,
                    secondMarker.latitude
                ]
            ],
            point_hints: ["Lindenschmitstraße", "Thalkirchener Str."],
            snap_preventions: ["motorway", "ferry", "tunnel"],
            details: ["road_class", "surface"]
        }
        fetch({
            axiosInstance: graphhopper,
            url: "",
            method: "POST",
            requestConfig: [
                body,
            ]
        });
    }, [secondMarker, firstMarker]);

    useEffect(() => {
        if (response) {
            const points = response.paths[0].points;
            const decoded = decode(points);
            const coords = decoded.map((point: any) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            });
            console.log(response.paths[0].instructions)
            setCoords(coords);
        }
    }, [response]);

    useEffect(() => {
        console.log(error);
    }, [error]);

    return(
        <View style={styles.container}>
            <XStack gap="$3" position="absolute" top="$5" width={"100%"} padding={"$3"} alignItems="center" zIndex={100}>
                <View width={50} height={50} borderRadius={50} display="flex" alignItems="center" justifyContent="center"  bg={"rgba(60,60,60,0.6)"}>
                    <FontAwesome name="user" size={32} color="white" />
                </View>
                <View width={50} height={50} borderRadius={50} display="flex" alignItems="center" justifyContent="center"  bg={"rgba(60,60,60,0.6)"}>
                    <FontAwesome name="search" size={28} color="white" />
                </View>

                <XStack paddingHorizontal={"$4"} flex={1} height={50} borderRadius={50} display="flex" alignItems="center"   bg={"rgba(60,60,60,0.6)"}>
                    <FontAwesome name="map" size={24} color="white" />
                    <Text flex={1} textAlign="center" fontSize={24} color="white">Map </Text>
                </XStack>
            </XStack>
            <XStack position="absolute" bottom={"$0"} bg={"white"} width={"100%"} padding={"$3"} alignItems="center" zIndex={100} borderTopLeftRadius={20} borderTopRightRadius={30} borderWidth={1} borderColor={"#16C59B"} borderBottomColor={"white"}>
                <YStack>
                    <XStack>
                        {/* <FontAwesome name="pins" size={24} color={"#16C59B"} /> */}
                    </XStack>
                </YStack>
                <YStack>
                    <XStack gap="$3" alignItems="center">
                        <FontAwesome6 name="car" size={24} color="#16C59B" />
                        <Text fontSize={24} color="#16C59B">Distance: {response?.paths[0].distance}</Text>
                    </XStack>
                    <XStack gap="$3" alignItems="center">
                        <FontAwesome6 name="car" size={24} color="#16C59B" />
                        <Text fontSize={24} color="#16C59B">Duration: {response?.paths[0].time}</Text>
                    </XStack>
                </YStack>
            </XStack>
            <MapView style={styles.map} 
                initialRegion={region}
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE}
                loadingEnabled={true}
                showsUserLocation={true}
                onPress={(e) => {
                    if (selected === "first") {
                        setFirstMarker({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        });
                    } else {
                        setSecondMarker({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        });
                    }
                }}
                onRegionChange={setRegion}
                camera={camera}
            >
                <Marker
                    coordinate={ {latitude: location?.["coords"]?.latitude,
                    longitude: location?.["coords"]?.longitude}}
                    title={"Ma position"}
                />

                <Marker
                    coordinate={ {latitude: secondMarker.latitude,
                    longitude: secondMarker.longitude}}
                    title={"Ma position 2"}
                    onPress={() => {
                        setSelected("second");
                    }}
                />

                <Marker
                    coordinate={ {latitude: firstMarker.latitude,
                    longitude: firstMarker.longitude}}
                    title={"Ma position 3"}
                    onPress={() => {
                        setSelected("first");
                    }}
                />

                {coords.length > 0 && <Polyline coordinates={coords} />}
            </MapView>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
  });