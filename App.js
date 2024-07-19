// import React from "react";
// import { View, Text, StyleSheet, StatusBar, Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Starter from "./screens/Starter";
// import Forgotpassword from './screens/Forgotpassword';
// import Home from "./screens/Home";
// import index from './tabs/index';
// import Explore from "./tabs/Explore";
// import Account from "./tabs/Account";
// import reusableButton from "./screens/reusableButton";
// import Card from "./screens/Card";
// import DrawerNavigation from "./src/DrawerNavigation";

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen name='Starter' component={Starter} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//         <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
//         <Stack.Screen name='Forgotpassword' component={Forgotpassword} options={{ headerShown: false }} />  
//         <Stack.Screen name="home" component={Home} options={{ headerShown: false }} /> 
//         {/* <Stack.Screen name='reusableButton' component={TextButton} options={{headerShown: false}} />  */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/AppNavigation'

const App = () => {
  return (
    <AppNavigation />
  )
}

export default App

const styles = StyleSheet.create({})