import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React from "react";
import { View,Text } from "react-native";
import { styles } from "./styles";

const Screen = () => {
    return(
        <View style= {styles.container}>
           <Text>HOLA SOY pantalla 2</Text>
        </View>
    )
}

export default Screen