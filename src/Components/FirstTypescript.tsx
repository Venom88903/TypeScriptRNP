import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ClassComplonent from './ClassComplonent'
import FunctionalComponet from './FunctionalComponet'

export class FirstTypescript extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <ClassComplonent name={'Mukesh'} email={'mukesh@gmail.com'} age={25}/>
        <FunctionalComponet name={'Mukesh'} email={'mukesh@gmail.com'} number={9725388903}/>
      </View>
    )
  }
}

export default FirstTypescript
