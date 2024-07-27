import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Cart from '../screens/bottom/Cart';

const screen_width = Dimensions.get('window').width;

const Navbar = () => {
    const navigation=useNavigation();

  return (
      <View style={styles.navbarContainer}>
        <View style={styles.navbarTop}>
          <View style={styles.navbarItem}>
            {/* <Icon name="menu" style={{ marginTop: 10 }} size={33} color="#fff"  /> */}
            <Text style={[{ fontSize: 22, fontWeight: 500, fontStyle: 'bold', marginTop: 10, marginLeft: 10 }]}>URBAN DADDY</Text>
            <View style={styles.navbarIcons}>
              <Icon
                name='notifications'
                style={styles.icons}
                size={26}
              />
              <Icon
                name='shopping-cart'
                style={styles.icons}
                size={26}
                onPress={() => navigation.navigate('Cart')}
            />
            </View>
          </View>
        </View>
        <View style={styles.navbarBottom}>
          <Icon name="search" size={40} />
          <TextInput placeholder='Search for Products, Brands and More'
            placeholderTextColor='black'
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingVertical: 6,
    paddingHorizontal: 6,
    width: screen_width
  },
  navbarTop: {
    backgroundColor: '#4690EB',
    paddingVertical: 12,
    display: 'flex',
  },
  navbarItem: {
    flexDirection: 'row',
    //justifyContent:'space-between',
    position: 'relative'
  },
  navbarIcons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10
  },
  icons: {
    color: '#ecf0f1',
    left:170
  },
  navbarBottom: {
    backgroundColor: 'white',
    marginTop: 3,
    padding: 4,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  }
});

export default Navbar;