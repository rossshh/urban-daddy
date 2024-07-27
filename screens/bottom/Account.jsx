import React from 'react';
import { Dimensions, Image, Share, Button } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Feedback from '../Feedback';
import EditProfile from '../EditProfile';
import { useNavigation } from '@react-navigation/native'; 


const screen_width=Dimensions.get('window').width;
const screen_height=Dimensions.get('window').height;


const Account = () => {
  const navigation = useNavigation();

  const shareData = async () => { 
    try { 
        await Share.share({ 
            message: 
                'Share Urban Daddy App with your loved ones', 
        }); 
    } catch (error) { 
        alert(error.message); 
    } 
}; 

  return (
    <View style={{width:screen_width,height:screen_height,backgroundColor:'white'}}>
        <View style={{justifyContent:'center',alignItems:'center',borderRadius:30,gap:10}}>
          <Image
            source={require("../../assets/images/avatar-female.png")} 
            style={{width:200,height:200,borderRadius:100}}
          />
          <Text style={{fontSize:25}}>User</Text>
        </View>
            <View style={{marginHorizontal:150,marginTop:50,gap:20,flexDirection:'column'}}>
              <TouchableOpacity 
                style={{borderWidth:2, borderRadius:10,justifyContent:'center',alignItems:'center',padding:7,borderBottomColor:'blue',borderRightColor:'blue'}} 
                onPress={() => navigation.navigate("EditProfile")}
              >
                <Text style={{fontSize:19}}>Edit Profile</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={{borderWidth:2, borderRadius:10,justifyContent:'center',alignItems:'center',padding:7,borderBottomColor:'blue',borderRightColor:'blue'}} 
                onPress={() => navigation.navigate("")}
              >
                <Text style={{fontSize:19}}>My Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{borderWidth:2, borderRadius:10,justifyContent:'center',alignItems:'center',padding:7,borderBottomColor:'blue',borderRightColor:'blue'}} 
                onPress={() => navigation.navigate("Feedback")}
              >
                <Text style={{fontSize:19}}>Help/Feedback</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{borderWidth:2, borderRadius:10,justifyContent:'center',alignItems:'center',padding:7,borderBottomColor:'red',borderRightColor:'red'}}
                  onPress={() => navigation.navigate("Login")}>
                <Text style={{fontSize:19}}>Logout</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize:19,marginTop:50,marginHorizontal:20}}>
              You can reach us anytime via any@rosssh.com
            </Text>
           <TouchableOpacity  onPress={shareData}>
            <Image 
              source={require('../../assets/images/share.png')}  
              title="Share"
              style={{width:20,height:20,marginLeft:'45%',marginTop:35}} />
            <Text style={{marginLeft:'43%',fontSize:15}}>Share</Text>
            </TouchableOpacity>
        </View>
      );
};
export default Account;
