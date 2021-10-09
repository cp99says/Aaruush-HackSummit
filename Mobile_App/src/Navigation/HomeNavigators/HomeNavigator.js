import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreens/HomeScreen";

const Stack = createNativeStackNavigator();

export function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name="HomeScreens"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}
