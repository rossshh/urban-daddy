import React from "react";
import { View, Text, StyleSheet, StatusBar, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
import Signup from '../screens/Signup';
import Starter from "../screens/Starter";
import Forgotpassword from '../screens/Forgotpassword';
import Home from '../screens/Home'
import Splash from "../screens/Splash";
import Feedback from "../screens/Feedback";
import EditProfile from "../screens/EditProfile";
import Cart from "../screens/bottom/Cart";

const Stack = createNativeStackNavigator();
const AppNavigator = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Starter' component={Starter} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='Forgotpassword' component={Forgotpassword} options={{ headerShown: false }} />   
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name='Feedback' component={Feedback} options={{headerShown:false}} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator
