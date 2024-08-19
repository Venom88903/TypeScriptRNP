import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface MyProps {
    name: string,
    email: string,
    age: number
}

interface MyState {
    counter: number
}

export class ClassComplonent extends Component<MyProps, MyState> {
    render() {
        return (
            <View>
                <Text> {this.props.name} </Text>
                <Text> {this.props.email} </Text>
                <Text> {this.props.age} </Text>
            </View>
        )
    }
}

export default ClassComplonent
