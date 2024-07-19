import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native'; // Import from react-native, not react-native-gesture-handler

const FlatListComponent = () => {
  const data = [
    {
      id: 1,
      text: 'lorem ipsum dolor',
    },
    {
      id: 2,
      text: 'lorem ipsum dolor',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.flatview}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatview: {
    marginTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 16,
  },
});

export default FlatListComponent;