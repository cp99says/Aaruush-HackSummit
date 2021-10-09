import React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {AuthStackNavigator} from "./src/Navigation/AuthNavigators/AuthNavigator";
import {HomeStackNavigator} from "./src/Navigation/HomeNavigators/HomeNavigator";
import {BottomTab} from "./src/Navigation/BottomTabNavigator/BottomTabNavigator";

function App() {
    return (
        <NavigationContainer>
            {/* <AuthStackNavigator /> */}
            {/* <HomeStackNavigator /> */}
            <BottomTab />
        </NavigationContainer>
    );
}

export default App;
