import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator'

const Main = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <BottomNavigator drawerNav={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Main