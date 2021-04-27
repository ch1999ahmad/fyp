import React from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, TextInput, Dimensions,TouchableOpacity,Image } from "react-native";




const CardThrd =(props)=>{
    return(
        <TouchableOpacity style={{ marginVertical: 10, width: 150, borderWidth:1 ,borderColor:props.colr ? props.colr: props.Rcolor,borderRadius:10,
        backgroundColor:props.colr ? props.colr: props.color}}>
    <Image style={{ resizeMode: 'contain', width: '100%',marginVertical:10 }}
    source={props.Image}/>
    
      <Text style={{textAlign:"center",fontWeight:'bold',paddingBottom:10}}>{props.text}</Text>
     
    </TouchableOpacity>
    )
}

export default CardThrd;