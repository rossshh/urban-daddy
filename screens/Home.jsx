import { View, Text ,Image, Dimensions} from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Main from "./bottom/Main";
import Explore from "./bottom/Explore";
import Cart from "./bottom/Cart";
import Categories from "./bottom/Categories";
import Account from './bottom/Account'
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const screen_width=Dimensions.get('window').width;

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data=useSelector(state=>state);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Navbar />
    <View style={{ flex: 1}}>
      {selectedTab==0?(<Main />):selectedTab==1?(<Explore />):selectedTab==2?(<Categories />):selectedTab==3?(<Cart />):(<Account />)}
      <View
        style={{
          width: screen_width,
          height: 60,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:30,
          }}
          onPress={()=>{setSelectedTab(0)}}
        >
          <Image
            source={require("../assets/images/home.png")}
            style={{ width: 24, height: 24,tintColor: selectedTab==0 ? '#000': '#8e8e8e'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:60,
          }}
          onPress={()=>{setSelectedTab(1)}}
        >
          <Image
            source={require("../assets/images/compass.png")}
            style={{ width: 24, height: 24,tintColor: selectedTab==1 ? '#000': '#8e8e8e'}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:30,
          }}
          
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 22,
              justifyContent:'center',alignItems:'center',
            }}
            onPress={()=>{setSelectedTab(2)}}
          >
            <Image source={require('../assets/images/app.png')} 
                    style={{ width: 24, height: 24, tintColor: selectedTab==2 ? '#000': '#8e8e8e'}}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:50,
          }}
          onPress={()=>{setSelectedTab(3)}}
        >
          <Image
            source={require("../assets/images/cart-shopping-fast.png")}
            style={{ width: 24, height: 24,tintColor: selectedTab==3 ? '#000': '#8e8e8e'}}
          />
           <View style={{width:14, height:14, backgroundColor:'red',borderRadius:7,justifyContent:'center',alignItems:'center',top:7,left:10,position:'absolute'}}>
              <Text style={{color:'#fff',fontWeight:'600',position:'absolute'}}>{data.Reducer1.length}</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:50,
          }}
          onPress={()=>{setSelectedTab(4)}}
        >
          <Image
            source={require("../assets/images/user.png")}
            style={{ width: 24, height: 24, tintColor: selectedTab==4 ? '#000': '#8e8e8e'}}
          />
        </TouchableOpacity>
      </View>
    </View>
    </GestureHandlerRootView>
  );
};
export default Home