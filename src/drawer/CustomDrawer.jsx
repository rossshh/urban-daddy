import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from "react-native-gesture-handler";

const screen_height=Dimensions.get('window').height;

const CustomDrawer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.drawerTop}>
        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="home" style={styles.icons} />
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/images/splash.png')} 
            style={{width:100,height:100,marginLeft:20}}/>
      </View>

      <View style={styles.drawerBottom}>
        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="dashboard" style={styles.icons} />
          <Text style={styles.drawerText}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="laptop" style={styles.icons} />
          <Text style={styles.drawerText}>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="boy" style={styles.icons} />
          <Text style={styles.drawerText}>Men's Wear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="girl" style={styles.icons} />
          <Text style={styles.drawerText}>Women's Wear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="" style={styles.icons} />
          <Text style={styles.drawerText}>Kid's Wear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="" style={styles.icons} />
          <Text style={styles.drawerText}>Bills and Recharges</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="" style={styles.icons} />
          <Text style={styles.drawerText}>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="" style={styles.icons} />
          <Text style={styles.drawerText}>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="" style={styles.icons} />
          <Text style={styles.drawerText}>Account</Text>
        </TouchableOpacity>

        <Text style={{fontSize:20,color:'red',marginLeft:50,marginTop:5,paddingBottom:80}}>Logout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: StatusBar.currentHeight,
    height: screen_height,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    marginTop: '',
    borderBottomWidth:2,
    borderBottomColor:'white',
  },
  drawerTop: {
    backgroundColor: "white",
    paddingBottom: 25,
    flexDirection:'row',
    alignItems:'center',
  },
  drawerBottom:{
    backgroundColor: "lightblue",
    gap:15
  },
  icons: {
    fontSize: 40,
    marginRight: 16,
    position:'relative'
  },
  drawerText: {
    fontSize: 20,
    fontWeight:400,
    marginLeft:20
  },
});
export default CustomDrawer;
