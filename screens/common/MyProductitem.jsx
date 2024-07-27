import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyProductitem = ({item,onAddToCart,onAddToWishlist}) => {
  return (
    <View style={{width:200,height:200,borderRadius:10,elevation:5,backgroundColor:'#fff',marginLeft:20,marginBottom:10}}>
      <Image source={item.image} style={{width:'100%',height:'50%',borderTopLeftRadius:10,borderTopRightRadius:10}} />
      <Text style={{marginLeft:10, marginTop:10,fontSize:18}}>{item.name}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10,alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:'600'}}>{'Rs.'+item.price}</Text>
        <TouchableOpacity 
            style={{borderWidth:1,borderRadius:10,paddingLeft:10,paddingRight:10,paddingBottom:7,paddingTop:7}}
            onPress={()=>onAddToCart(item)}>
            <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{width:40,height:40,backgroundColor:'#fff',borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center',position:'absolute',}}
                        onPress={()=>onAddToWishlist(item)}>
        <Image source={require('../../assets/images/wishlist.png')} style={{width:20,height:20}} onPress={()=>onAddToWishlist(item)}/>
      </TouchableOpacity>
    </View>
  )
}

export default MyProductitem

const styles = StyleSheet.create({})