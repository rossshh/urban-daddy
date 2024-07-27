import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../common/CartItem';
import { removeFromCart } from '../redux/actions/Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cart = () => {
    const [cartList,setCartList]=useState([]);
    const cartData = useSelector(state=> state.Reducer1);
    const dispatch= useDispatch();
  return (
    <View style={{flex:1}}>
      <FlatList 
        data={cartData}
        renderItem={({item,index})=>{
            return(
              <>
                <CartItem 
                  item={item} 
                  onRemoveItem={()=>{
                    dispatch(removeFromCart(index));
                  }}
                />
              </>
          )
        }}
        />
      
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})