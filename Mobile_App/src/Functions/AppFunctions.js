import * as React from "react";

import {useIsFocused} from "@react-navigation/native";

import {Alert, Dimensions, StatusBar, PixelRatio, Platform, ToastAndroid} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const showNotification = str => {
    if (Platform.OS == "android") {
        ToastAndroid.show(str, ToastAndroid.LONG);
    }
    if (Platform.OS == "ios") {
        Alert.alert(str);
    }
};

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
};

export const getData = async key => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
};

export const removeItem = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log(e);
    }
};

export const clearData = async () => {
    await AsyncStorage.clear();
};

export function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
}
