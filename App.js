import React from "react";
import { View, Text, StyleSheet, StatusBar, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Starter from "./screens/Starter";
import Forgotpassword from './screens/Forgotpassword';
import Home from "./screens/Home";
import index from './tabs/index';
import Explore from "./tabs/Explore";
import Account from "./tabs/Account";
import reusableButton from "./screens/reusableButton";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='starter' component={Starter} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="forgotpassword" component={Forgotpassword} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} /> */}
        <Stack.Screen name='reusablebutton' component={reusableButton} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  footerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150
  }
});

export default App