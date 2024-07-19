import React from 'react'
import Navbar from '../components/Navbar'

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native'
import Card from './Card'
import CarouselScreen from './CarouselScreen'

const width = Dimensions.get('window').width

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const Home = ({drawerNav}) => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatlistContainer}
        data={DATA}
        renderItem={({item})=>{
            <Item title={item.title} />
        }}
        keyExtractor={item=>item.id}
        ListHeaderComponent={() => <Navbar onClick={() => drawerNav.openDrawer()}/> }>
        </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default Home

