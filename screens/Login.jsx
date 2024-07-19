import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";
import Signup from './Signup'
import { NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useNavigation } from "@react-navigation/native";
import Forgotpassword from "./Forgotpassword";
import { FontAwesome, Icon} from 'react-native-vector-icons';

const Login = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [currentPage, setcurrentPage]=useState("");
  const [user,setUser]=useState();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login</Text>
      <Text style={styles.description}>
        You can reach us anytime via any@rosssh.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Email or Username</Text>
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
          color={agree ? "#4690EB" : undefined}
        />
        <Text style={styles.wrapperText}>I have read and agree with T&C</Text>
      </View>
      <Pressable
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "#4660EB" : "grey" }]} onPress={()=>{navigation.navigate('home')}}
        disabled={!agree}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.OrText}>Or</Text>
      {/* <View style={styles.iconContainer}>
        <FontAwesome name='google' />
        <FontAwesome name='mobile'/>
        <FontAwesome name='facebook'/>
        <FontAwesome name=''/>
      </View> */}
      <View style={styles.footerLink}>
        <Pressable style={styles.forgotPassword} onPress={()=>navigation.navigate("Forgotpassword")}><Text style={styles.footerLinkText}>Forgot Password ?</Text></Pressable>
        <Pressable style={styles.register} onPress={()=>navigation.navigate("Signup")}>
          <Text style={styles.footerLinkText}>Register ?</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    marginTop: 40,
    paddingHorizontal: 30,
    paddingVertical:6,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 50,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 120,
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
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "black",
  },
  wrapper: {
    marginTop: 40,
    flexDirection: "row",
  },
  wrapperText: {
    marginLeft: 15,
    fontSize:20
  },
  buttonStyle: {
    marginTop: 30,
    alignItems: "center",
    padding: 15,
  },
  buttonText: {
    fontSize: 23,
    color:'white',
  },
  OrText:{
    fontSize: 20,
    marginLeft:175,
    marginTop:25,
    justifyContent:'center',
    alignItems:'center',
  },
  footerLink:{
    marginTop:35,
    flexDirection:'row',
  },
  footerLinkText:{
    fontSize:22,
    border: 4,
    marginRight:105,
  },
  // iconContainer:{
  //   flexDirection:'row',
  //   display:'flex',
  // },
});

export default Login;

