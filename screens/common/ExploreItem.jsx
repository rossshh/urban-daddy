import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { products } from './Products';
import { Image } from 'react-native';

const screen_width=Dimensions.get('window').width;
const screen_height=Dimensions.get('window').height;

const ExploreItem = ({item,onAddToCart,onAddToWishlist}) => {
  return (
      <View style={styles.cardContainer}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={item.image}
          />
        </View>
        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productDiscount}>₹ 40,000 (18% off)</Text> 
        </View>
        {/* Rating and Reviews */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          {/* <Text style={styles.reviews}>10,234 ratings</Text> */}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({

  cardContainer:{
    width:screen_width/2,
    height:screen_height/3,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ddd",
    marginHorizontal:2,
    marginVertical:2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    flex:1,
    resizeMode: "contain",
  },
  productInfoContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#666",
  },
  productDiscount: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  rating: {
    fontSize: 16,
    color: "#f2c464",
  },
  reviews: {
    fontSize: 14,
    color: "#999",
    marginLeft: 10,
  },
});

export default ExploreItem

