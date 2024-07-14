import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, StatusBar, Pressable, TouchableHighlight } from "react-native";
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';



const Forgotpassword = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.description}>
        You can reach us anytime via any@rosssh.com
      </Text>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter Your Email</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize={false}
                autoCorrect={false}
            ></TextInput>
        </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter OTP</Text>
                <TextInput
                style={styles.inputStyle}
                autoCapitalize={false}
                autoCorrect={false}
                ></TextInput>
            </View>
            <View style={styles.submitContainer}>
                <TouchableHighlight style={styles.submitButton} onPress={()=>{navigation.navigate('login')}}>
                    <Text style={styles.submitbuttonText}>Submit</Text>
                </TouchableHighlight> 
            </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    marginTop: StatusBar.currentHeight,
    marginTop: 100,
    paddingHorizontal:10,
    paddingVertical:6,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 20,
    paddingBottom: 5,
    lineHeight: 25,
    marginLeft:15
  },
  inputStyle: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "black",
    width:280,
    marginLeft:50,
  },
  submitButton:{
    backgroundColor: "#FFC107",
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    paddingVertical:15,
    width:140,
    marginLeft:130,
  },
  description:{
    fontSize:20,
    marginBottom:30,
  }
});

export default Forgotpassword;
