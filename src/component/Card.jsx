import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

// export default({item,navigation,style}) =>{

    export default ({item,navigation,style}) => { 
    return(
        <View style={{ marginVertical: 10, width: 150, borderWidth:1 ,borderColor:'#ACC39E',borderRadius:6 }}>
        <TouchableOpacity onPress={()=> navigation.navigate('AddItem' ,{item:item})}>
       
        <Image style={{width:"100%",height:108,resizeMode:'contain'}}
         source={{uri: item.image[0]? item.image[0].toString():"no"}}  />

        <Text style={{ fontSize: 14, fontWeight: 'bold', paddingLeft:10 }}>{item.name}</Text>
        <Text style={{ fontWeight: 'bold',paddingLeft:10}}>6pcs,Price</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:10 }}>

            <View>
                <Text>{item.price}</Text>    
            </View>
            
            <View style={{backgroundColor:'#59C32F',borderRadius:15}}>
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('MyCart')}>
                <Entypo name="plus" size={35} color="black" />
                </TouchableOpacity> */}
            </View>
        </View>
    </View>


    );

}
