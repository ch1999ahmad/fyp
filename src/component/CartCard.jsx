import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Counter from "../component/Counter";

const CartCard = () => {
    return (
        <View style={{flexDirection:'row',justifyContent:"space-between",borderBottomWidth:1,borderColor:'#E2E2E2',paddingBottom:10,paddingTop:10}}>
                <View style={{ marginVertical: 10, }}>
                    <Image 
                     source={require('../../assets/bell.png')} />
                </View>
                <View>

                    <Text style={{ fontSize: 18,fontWeight:"bold",}}>Bell Pepper Red</Text>
                    <Text style={{}}>1kg, Price</Text>
                    
                    <View style={{}}>
                    <Counter/>
                    </View>
                    {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{ paddingRight: 9, }}><Entypo name="minus" size={24} color="black" /></TouchableOpacity>
                        <Text style={{
                            fontSize: 18, borderWidth: 1, height: 44, textAlign: 'center', textAlignVertical: 'center', borderRadius: 13,
                            borderColor: '#E2E2E2', width: '30%',
                        }}>1</Text>
                        <TouchableOpacity style={{ paddingLeft: 9 }}><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
                    </View> */}
                    </View>
                <View  style={{justifyContent:'space-around',}}>
                <TouchableOpacity><Ionicons style={{alignSelf:'flex-end'}}
                     name="ios-close-outline" size={24} color="black" /></TouchableOpacity> 
                    <Text style={{ fontSize: 17, fontWeight: 'bold', }}>$4.99</Text>
                </View>

            </View>

    );
}


export default CartCard;