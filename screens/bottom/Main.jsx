import { StyleSheet, Text, View,Image } from "react-native";
import React,{useState,useEffect} from "react";
import { products } from "../common/Products";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyProductitem from "../common/MyProductitem";
import { ScrollView } from "react-native";
import Navbar from '../../components/Navbar'
import { FlatList } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addToWishlist } from "../redux/actions/Actions";

const Main = () => {
  const dispatch=useDispatch();
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
    setTshirtList(products.category[0].data);
    setShoesList(products.category[1].data);
    setJeansList(products.category[2].data);
    setTrouserList(products.category[3].data);
    setJacketList(products.category[4].data);
    console.log(JSON.stringify(products));
  }, []);
    const items=useSelector(state=>state);
    console.log(items);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/banner.jpg")}
          style={{
            width: "90%",
            height: 200,
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 10,
          }}
        />

        <View style={{ marginTop: 20 }}>
          <FlatList
            data={categoryList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ color: "#000" }}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          New T-shirts
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={tshirtList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                    <MyProductitem 
                        item={item} 
                        onAddToWishlist={x=>{
                            dispatch(addToWishlist(item));
                        }}
                        onAddToCart={x=>{
                            dispatch(addItemToCart(item));
                    }}
                />
            ) ;
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          New Watches
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={watchList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                    <MyProductitem 
                        item={item} 
                        onAddToWishlist={x=>{
                            dispatch(addToWishlist(item));
                        }}
                        onAddToCart={x=>{
                            dispatch(addItemToCart(item));
                    }}
                />
            ) ;
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          New Jeans
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={jeansList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return <MyProductitem item={item} 
              onAddToWishlist={x=>{
                dispatch(addToWishlist(item));
            }}
                        onAddToCart={x=>{
                        dispatch(addItemToCart(item)) 
                    }}/>
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          New Shoes
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={shoesList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return <MyProductitem 
                    item={item}
                    onAddToWishlist={x=>{
                      dispatch(addToWishlist(item));
                  }}
                    onAddToCart={x=>{
                        dispatch(addItemToCart(item)) 
                    }} />;
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          New Jackets
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={jacketList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return <MyProductitem item={item}
               onAddToWishlist={x=>{
                            dispatch(addToWishlist(item));
                        }}
                    onAddToCart={x=>{
                        dispatch(addItemToCart(item)) 
                    }} />;
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          New Trousers
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={trouserList}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return <MyProductitem 
                        item={item} 
                        onAddToWishlist={x=>{
                            dispatch(addToWishlist(item));
                        }}
                        onAddToCart={x=>{
                            dispatch(addItemToCart(item)) 
                        }} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
};


const styles = StyleSheet.create({});
export default Main;


