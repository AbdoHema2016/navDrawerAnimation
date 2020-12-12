import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class About extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text> About Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
