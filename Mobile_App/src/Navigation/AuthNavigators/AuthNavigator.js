import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnBoarding from "../../Screens/AuthScreens/OnBoarding";

const Stack = createNativeStackNavigator();

export function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoarding} />
        </Stack.Navigator>
    );
}
