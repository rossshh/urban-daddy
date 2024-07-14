import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Navbar />
    </View>
  )
}


const styles=StyleSheet.create({
    mainContainer: {
        paddingTop:StatusBar.currentHeight,

    }
})

export default Home
