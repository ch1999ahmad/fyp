import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import Buffer from "../component/Buffer";


const Load = () => {
    return (
       
        <View style={styles.container}>
       
            <Image style={{ width: '60%', height: 170, alignItems: 'center', justifyContent: 'center', alignSelf: "center", }} source={require('../../assets/logo.webp')} />
            <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginBottom: 20, padding: 10, color: '#1BB60D' }}
            > Online Shopping Store</Text>
            <Buffer />
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',

    },



});

export default Load;