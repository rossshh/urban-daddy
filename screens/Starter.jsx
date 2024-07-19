import React from 'react'
import { Dimensions } from 'react-native';
import { View, StyleSheet,Text, Image, StatusBar, Pressable } from 'react-native'

const width = Dimensions.get("window").width
const Starter=({navigation})=>{
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image style={styles.starterImage}
                    source={require('../assets/images/shopping.png')} />
            </View>
            <Text style={styles.mainHeader}>WELCOME BACK !</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.startButton} onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.buttonText}>Get Started ➤</Text>
                </Pressable>
            </View>
        </View>
    );
};
    const styles=StyleSheet.create({
        mainContainer:{
            marginTop:StatusBar.currentHeight,
            paddingHorizontal: 30,
            backgroundColor: "#fff",
            height:'100%',
            width:'width'
        },
        mainHeader:{
            fontSize: 70,
        },
        starterImage:{
            height: 400,
            width: 400,
        },
        buttonContainer:{
            marginTop: 100,
            borderRadius:70,
            borderColor:'black',
            borderWidth:1,
            paddingHorizontal:30,
            paddingVertical:20,
            justifyContent:'center',
            alignItems:'center',
            width:180,
            backgroundColor:'#4690EB',
            marginLeft:100
        },
        buttonText:{
            fontSize:20,
        }
    });
export default Starter