import { Ionicons } from '@expo/vector-icons';


const routes = [{
    name: "Home",
    iconFocused: "ios-home",
    iconUnfocused: "ios-home-outline",
}, {
    name: "Notifications",
    iconFocused: "ios-box-outline",
    iconUnfocused: "ios-list-outline",
}, {
    name: "Profile",
    iconFocused: "ios-list",
    iconUnfocused: "ios-list-outline",
}, {
    name: "Settings",
    iconFocused: "ios-list",
    iconUnfocused: "ios-list-outline",
}, {
    name: "Map",
    iconFocused: "ios-list",
    iconUnfocused: "ios-list-outline",
},];

//@ts-ignore
const BottomTab = ({ route, focused, color, size }) => {

    let iconName = focused 
        //@ts-ignore
        ? routes.find((routeConfig) => routeConfig.name === route.name).iconFocused
        //@ts-ignore
        : routes.find((routeConfig) => routeConfig.name === route.name).iconUnfocused

    if (route.name === 'Map') {
        
    }

    // You can return any component that you like here!
    //@ts-ignore
    return <Ionicons name={iconName} size={size} color={color} />;
}

export default BottomTab;