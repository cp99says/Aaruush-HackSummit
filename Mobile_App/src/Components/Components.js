import React, {useEffect, useRef, useState} from "react";
import {View, ActivityIndicator} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {COLORS} from "../Constants/GlobalStyle";
export function Loader(params) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ActivityIndicator size={"large"} color={COLORS.PURPLE} />
        </View>
    );
}
