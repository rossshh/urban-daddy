import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";

const screen_width = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" ,marginTop:250}}>
        <Image
          source={require("../assets/images/splash.png")}
          style={{ width: screen_width / 2, height: screen_height / 3}}
        />
      </View>
    </View>
  );
};

export default Splash;
