import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'

interface MyProps {
    name: string,
    email: string,
    number: number
}

const FunctionalComponet = (props: MyProps):ReactElement => {
    return (
        <View>
            <Text>{props.number} {" "}  {props.name}</Text>
        </View>
    )
}

export default FunctionalComponet

const styles = StyleSheet.create({})