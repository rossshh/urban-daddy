import React from 'react'
import { StyleSheet, View , Text, TextInput, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
        <View style={styles.navbarTop}>
            <View style={styles.navbarItem}>
                <Icon name="menu" size={40} color="#fff" onPress={() => this.props.onClick()}/>
                <Text style={[{fontSize:21,fontStyle:'bold'},{marginTop:8,marginLeft:10}]}>URBAN DADDY</Text>
                <View style={styles.navbarIcons} >
                        <Icon 
                            name='notifications'
                            style={styles.icons}
                            size={26}
                        />
                        <Icon 
                            name='shopping-cart'
                            style={styles.icons}
                            size={26}
                        />
                </View>
            </View>
        </View>
        <View style={styles.navbarBottom}>
            <Icon name="search" size={40} />
                <TextInput placeholder='Search for Products, Brands and More'  
                           placeholderTextColor='black'>
                </TextInput>
        </View>
    </View>
      );
    };
      

const styles=StyleSheet.create({
    navbarContainer:{
        paddingTop:StatusBar.currentHeight,
        paddingVertical:6,
    },
    navbarTop:{
        backgroundColor:'#4690EB',
        paddingVertical:12,
        display:'flex',
    },
    navbarItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'relative'
    },
    navbarIcons:{
        flexDirection:'row',
        marginRight:100,
        marginLeft:110
    },
    icons:{
        color: '#ecf0f1',
        padding:5,
        marginRight: 20,
        alignItems: 'center',
    },
    navbarBottom:{
        backgroundColor:'white',
        marginTop:3,
        padding:4,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        flexDirection:'row',
        paddingHorizontal:10,
    }
    

})

export default Navbar


