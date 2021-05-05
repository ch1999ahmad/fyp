import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';



const CheckCard =()=>{
    return(
        <View style={{ flexDirection: 'row', backgroundColor: '#F3F4F3', width: 250, height: 80, alignItems: 'center',borderRadius:13 }}>

        <TouchableOpacity >
            <Image source={require('../../assets/Vgetble.png')} />
        </TouchableOpacity>
        <View >
            <Text style={{ fontSize: 16, paddingRight: 20 }}>Fresh Vegetable</Text>
            <Text style={{ fontSize: 11, paddingRight: 20 }}>$440</Text>
        </View>
        
    </View>


    )
}

export default CheckCard;