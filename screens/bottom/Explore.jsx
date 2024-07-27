import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { products } from "../common/Products";
import { useDispatch, useSelector } from "react-redux";
import ExploreItem from "../common/ExploreItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const screen_width=Dimensions.get('window').width;
const screen_height=Dimensions.get('window').height;

const Explore = ({}) => {
  const dispatch=useDispatch();
  const [randomProducts, setRandomProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [watchList, setWatchList]= useState([])

  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map((item) => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    let allProductsList = [];
    products.category.forEach(category => {
      allProductsList = allProductsList.concat(category.data);
    });
    setAllProducts(allProductsList);
    const randomItems = [];
    for (let i = 0; i < 1000; i++) {
      const randomIndex = Math.floor(Math.random() * allProductsList.length);
      randomItems.push(allProductsList[randomIndex]);
    }
    setRandomProducts(randomItems);
  }, []);
    const items=useSelector(state=>state);
    console.log(items);
    
    const numColumns=2;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1}}>
        <View>
          <FlatList
            data={randomProducts}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
            return (
              <ExploreItem 
                  item={item} 
                  onAddToWishlist={x=>{
                      dispatch(addToWishlist(item));
                  }}
                  onAddToCart={x=>{
                      dispatch(addItemToCart(item));
              }}
              />
            );
          }}
        />
        </View>
     </ScrollView>
  </GestureHandlerRootView>
  );
};

export default Explore