import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native'

const CartItem = ({item,onAddToWishlist,onRemoveItem}) => {

    const [quantity, setQuantity] = useState(1); 

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(quantity - 1);
      };
    

  return (
    <View style={{width:'90%',height:150,borderRadius:10,elevation:10,backgroundColor:'#fff',marginLeft:20,marginBottom:10,flexDirection:'row'}}>
      <Image source={item.image} style={{width:'35%',height:'100%',borderRadius:15}} />
      <View style={{flexDirection:'column',marginLeft:7,paddingLeft:10,paddingRight:10,alignItems:'center',gap:3}}>
        <Text style={{marginLeft:30, marginTop:10,fontSize:25}}>{item.name}</Text>
        <Text style={{fontSize:18,fontWeight:'600'}}>{'Rs.'+item.price}</Text>
        <Text style={{fontSize:10,fontWeight:'600'}}>{'Rating: '+item.rating}</Text>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',top:20}}>
            <Button title="+" onPress={handleIncrement} />
            <Text  style={{marginHorizontal:4}}>
                Qty: {quantity}
            </Text>
            <Button title="-" onPress={handleDecrement} />
        </View>
      </View>
      <View style={{flexDirection:'column', gap:10}}>
      <TouchableOpacity style={{width:30,height:30,backgroundColor:'#fff',borderRadius:20,elevation:5,justifyContent:'center',alignItems:'center',position:'absolute',left:70,marginRight:5,}}
                        onPress={()=>onAddToWishlist(item)}>
        <Image source={require('../../assets/images/wishlist.png')} style={{width:20,height:20}} onPress={()=>onAddToWishlist(item)}/>
      </TouchableOpacity>
      <TouchableOpacity 
            style={{borderWidth:1,borderRadius:10,paddingLeft:10,paddingRight:10,paddingBottom:7,paddingTop:7,marginTop:50,left:10}}
            onPress={()=>onRemoveItem()}>
            <Text>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={{borderWidth:1,borderRadius:10,paddingLeft:10,paddingRight:10,paddingBottom:7,paddingTop:7,left:10}}>
            <Text>
              Buy Now⚡
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem

