import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'tamagui';



export type AppStackParamList = {
    Screen1: undefined;
    Screen2: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const Screen1 = () => {
    return <View></View>
}

const Screen2 = () => {
    return <View></View>
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
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      );
}