import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen2 = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}} onPress={()=>{
            navigation.openDrawer();
        }}>Screen1</Text>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})