import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { RootStackParamsList } from '../Navigation/AppNavigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


interface SettingScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamsList, 'Setting'>
}

const Setting = ({ navigation }: SettingScreenProps) => {
    return (
        <View>
            <Text>setting</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})