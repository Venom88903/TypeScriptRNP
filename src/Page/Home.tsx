import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../Navigation/AppNavigation'

interface HomeScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamsList, 'Home'>
}

const Home = ({ navigation }: HomeScreenProps) => {
    return (
        <View>
            <Text style={styles.textStyle} onPress={() => navigation.navigate('Setting')}>Got to seeting</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    textStyle:{
        alignSelf:"center",
        justifyContent:"center",
        fontWeight:"bold",
        color:'red',
        marginVertical:50
    }
})