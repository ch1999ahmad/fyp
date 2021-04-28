import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';


const Card=(props)=>{
    return(
        <View style={{ marginVertical: 10, width: 150, borderWidth:1 ,borderColor:'#ACC39E',borderRadius:6 }}>
        <Image style={{ resizeMode: 'contain', width: '100%',marginVertical:10 }}
            source={require('../../assets/kella.png')} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', paddingLeft:10 }}>Organic bananas</Text>
        <Text style={{ fontWeight: 'bold',paddingLeft:10}}>6pcs,Price</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:10 }}>

            <View>
                <Text>$4.99</Text>
            </View>
            <View style={{backgroundColor:'#59C32F',borderRadius:15}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AddItem')}>
                <Entypo name="plus" size={35} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    </View>


    );

}
export default Card;