

import { View,StyleSheet,Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from 'expo-location';
import { useEffect,useState } from "react";

export default function MapPage() {

    const [location, setLocation] = useState<{
        coords: {
            latitude: number;
            longitude: number;
        };
    }>({
        coords: {
            latitude: 0,
            longitude: 0,
        },
    });
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [loading,setLoading] = useState(true)
  
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
  console.log("LOADING")
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
    return(
        <View style={styles.container}>
        <MapView style={styles.map} 
              initialRegion={{
                latitude: location?.["coords"]?.latitude,
                longitude: location?.["coords"]?.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
              provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE}
              loadingEnabled={true}
              showsUserLocation={true}
              camera={{
                center: {
                   latitude: location?.["coords"]?.latitude,
                   longitude: location?.["coords"]?.longitude,
               },
               pitch: 0,
               heading: 80,
            
               // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
               altitude: 600,
            
               // Only when using Google Maps.
               zoom: 16
            }}
              
        >
            {/* {loading && <Animatable.Text animation={"bounce"} iterationCount={"infinite"} className="absolute top-1/2 left-20 text-[#fff] font-bold z-10 text-3xl">Quelques instants ...</Animatable.Text>} */}

             <Marker
      
      coordinate={ {latitude: location?.["coords"]?.latitude,
      longitude: location?.["coords"]?.longitude}}
      title={"Ma position"}
    //   description={marker.description}
    />
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