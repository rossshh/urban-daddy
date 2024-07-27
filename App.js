import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import MainContainer from './screens/MainContainer'
import store from './screens/redux/store/Store'

const App = () => {
  return (
   <Provider store={store}>
    <MainContainer />
   </Provider>
  )
}
export default App

