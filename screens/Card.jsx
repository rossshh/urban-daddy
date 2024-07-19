import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

const screen_width=Dimensions.get('window').width;
const screen_height=Dimensions.get('window').height;

const Card = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/card-watch.png")}
          />
        </View>
        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>Apple Watch Series 7</Text>
          <Text style={styles.productPrice}>₹ 32,990</Text>
          <Text style={styles.productDiscount}>₹ 40,000 (18% off)</Text>
        </View>
        {/* Rating and Reviews */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5/5</Text>
          <Text style={styles.reviews}>10,234 ratings</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/card-watch.png")}
          />
        </View>
        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>Apple Watch Series 7</Text>
          <Text style={styles.productPrice}>₹ 32,990</Text>
          <Text style={styles.productDiscount}>₹ 40,000 (18% off)</Text>
        </View>
        {/* Rating and Reviews */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5/5</Text>
          <Text style={styles.reviews}>10,234 ratings</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/card-watch.png")}
          />
        </View>
        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>Apple Watch Series 7</Text>
          <Text style={styles.productPrice}>₹ 32,990</Text>
          <Text style={styles.productDiscount}>₹ 40,000 (18% off)</Text>
        </View>
        {/* Rating and Reviews */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5/5</Text>
          <Text style={styles.reviews}>10,234 ratings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        marginTop: StatusBar.currentHeight,
        width:screen_width,
        height:screen_height,
    },
  cardContainer:{
    width:screen_width/2,
    height:screen_height/3,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ddd",
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

export default Card;
