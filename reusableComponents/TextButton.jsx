import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'


const TextButton = (props) => {
  const {title,onPress,style}=props;

  return (
  <TouchableOpacity
    style={style}
    onPress={onPress}>
    <Text style={{
      color: 'white',
      backfaceVisibility:'visible',
      fontWeight: 'bold',
      fontSize: 20,
      opacity: 500
    }}>{title}</Text>
  </TouchableOpacity>
  );
};

export default TextButton

const styles = StyleSheet.create({})