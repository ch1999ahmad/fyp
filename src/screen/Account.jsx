import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView,TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Account = () => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Image style={{ width: '30%', height: 95, borderRadius: 100 }}
                    source={require('../../assets/ahmad.jpeg')} />

                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}
                    >Ahmad ch</Text>
                    <Text style={{color:"#7C7C7C"}}>Developer</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
            <FontAwesome name="phone" size={17} color="#7C7C7C" />
                <Text style={{color:"#7C7C7C"}}>03085137163</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
            <Entypo name="mail" size={18} color="#7C7C7C" />
            <Text style={{color:"#7C7C7C"}}>Emmich56@gmail.com</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
            
                <TouchableOpacity style={{backgroundColor:'#FCFFFC',width:'45%', height:75, borderColor: '#ACC39E',borderWidth:1,borderRadius:13,justifyContent:'center'}} >
                    <Text style={{fontSize:18,alignSelf:"center",fontWeight:'bold',color:'#7C7C7C'}}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#FCFFFC',width:'45%', height:75,borderColor: '#ACC39E',borderWidth:1,borderRadius:13,justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',alignSelf:"center",textAlignVertical:"center",color:'#7C7C7C'}}>12 </Text>
                    <Text style={{alignSelf:"center",color:'#7C7C7C'}}>Order</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
       // justifyContent:'space-evenly'
    },
})
export default Account;