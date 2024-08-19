import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstTypescript from './src/Components/FirstTypescript'
import AppNavigation from './src/Navigation/AppNavigation'

const App = () => {
  return (
    <View style={styles.mainStyle}>
      {/* <FirstTypescript /> */}
      <AppNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1
  }
})