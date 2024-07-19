import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextButton  from '../reusableComponents/TextButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const reusableButton = () => {
  return (
    <View style={{margin:40}}>
        <Text style={{
            backgroundColor: 'yellow',
            textAlign: 'center',
            color: 'black',
            fontSize: 25,
            fontWeight: '700',
            padding: 10,
            marginBottom:50
        }}>
            Reusable Button Components
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:25}}>Jai Button</Text>
            <TextButton title='Jai Shree Ram' 
                style={{backgroundColor:'red',padding:15,alignItems:'center',width:210,borderRadius:20}} 
                onPress={()=>console.log("Jai Shree Ram Button Clicked !")}  />
        </View>
 
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:50}}>
            <Text style={{fontSize:25}}>Join Button</Text>
            <TextButton title='Join Now 🤝' 
                style={{backgroundColor:'blue',padding:15,alignItems:'center',width:160,borderRadius:10}} 
                onPress={()=>console.log("Join Now Button Clicked !")}  />
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:50}}>
            <Text style={{fontSize:25}}>Continue Button</Text>
            <TextButton title='Continue ➤' 
                style={{backgroundColor:'black',padding:15,alignItems:'center',width:160,borderWidth:5,borderRadius:10,borderColor:'red' }} 
                onPress={()=>console.log("Continue Button Clicked !")}  />
        </View>
        

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:50}}>
            <Text style={{fontSize:25,}}>Submit Button</Text>
            <TextButton title='Submit' 
                style={{backgroundColor:'green',padding:15,alignItems:'center',width:160,}} 
                onPress={()=>console.log("Submit Button Clicked !")}  />
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:50}}>
            <Text style={{fontSize:25,}}>Danger Button</Text>
            <TextButton title='Danger  ⚠️' 
                style={{backgroundColor:'red',padding:15,alignItems:'center',width:160,borderRadius:30,borderWidth:3,borderColor:'red'}} 
                onPress={()=>console.log("Danger Button Clicked !")}  />
        </View> 
    </View>
  );
};

export default reusableButton

const styles = StyleSheet.create({})