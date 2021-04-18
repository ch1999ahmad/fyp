import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground,TouchableOpacity } from 'react-native';
import Buffer from "../component/Buffer";


const Load = ({navigation}) => {
    return (
       
        <View style={styles.container}>
       
            <Image style={{ width: '60%', height:"23%", alignItems: 'center', justifyContent: 'center', alignSelf: "center", }} source={require('../../assets/logo.webp')} />
            <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginBottom: 10, padding: 8, color: '#1BB60D' }}
            > Online Shopping Store</Text>
             <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('Start')}>
                        <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center', color:'#fff'}}>Get Started</Text>
                    </TouchableOpacity>
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
    btn: {
        backgroundColor: "#59C32F",
        height: 40,
        justifyContent: 'center',
        alignSelf:'center',
        marginBottom: 30,
        borderRadius: 13,
        width: '60%',

    }
});

export default Load;