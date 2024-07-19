import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Home from '../../screens/Home';
import Navbar from "../../components/Navbar";

const Tab = createBottomTabNavigator();


const BottomNavigator = ({drawerNav}) => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" options={{headerShown:false}}>
            {()=><Home drawerNav={drawerNav} />}
        </Tab.Screen>
    
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
