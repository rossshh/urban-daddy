import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";


const Signup = ({ navigation }) => {
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>SignUp</Text>
      <Text style={styles.description}>
        You can reach us anytime via any@rosssh.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Username</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize={false}
          autoCorrect={false}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Email</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize={false}
          autoCorrect={false}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Phone</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize={false}
          autoCorrect={false}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>I have read and agree with T&C</Text>
      </View>
      <Pressable
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "#4630EB" : "grey" },
        ]}
        disabled={!agree}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.OrText}>Or, Already Have an Account ?</Text>
      <Pressable style={styles.footerLink}><Text style={styles.footerLinkText} onPress={()=>{navigation.navigate('login')
      }}>Sign In {">"}</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    marginTop: 40,
    paddingHorizontal: 30,
    paddingVertical: 6,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 50,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 110,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 20,
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    borderColor: "black",
  },
  wrapper: {
    marginTop: 40,
    flexDirection: "row",
  },
  wrapperText: {
    marginLeft: 15,
    fontSize:20,
  },
  buttonStyle: {
    marginTop: 30,
    alignItems: "center",
    padding: 15,
  },
  buttonText: {
    fontSize: 23,
  },
  OrText:{
    fontSize: 20,
    marginLeft:60,
    marginTop:25,
    justifyContent:'center',
    alignItems:'center',
  },
  footerLink:{
    borderWidth: 1,
    paddingHorizontal:10,
    paddingVertical: 6,
    borderRadius: 10,
    borderColor: "black",
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,
    marginLeft:115,
    width:150,
  },
  footerLinkText:{
    fontSize:20,
    border: 4,
  }
});

export default Signup;
