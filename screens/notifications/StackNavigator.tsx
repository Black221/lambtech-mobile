import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'tamagui';



export type AppStackParamList = {
    Screen1: undefined;
    Screen2: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const Screen1 = ({ navigation }) => {
    return <View>
        <Button onPress={ () => navigation.navigate("Screen2") }>Go to Screen 2</Button>
    </View>
}

const Screen2 = ({ navigation }) => {
    return <View>
        <Text>Hello from Screen2</Text>
    </View>
}

export const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
	{
		name: "Screen1",
		component: Screen1,
	}, {
		name: "Screen2",
		component: Screen2,
	}
];

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
          {/* Define your stack screens */}
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen options={{
                headerShown: false
                
            }} name="Screen2" component={Screen2} />
        </Stack.Navigator>
      );
}