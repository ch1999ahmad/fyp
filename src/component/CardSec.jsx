import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const CardSec=()=>{

    return(
        <View style={{flexDirection: 'row',width:170,height:70,marginVertical: 10, borderRadius:13,
        backgroundColor:'#FDE598'}}>
            
                <Image style={{ width: '60%',resizeMode:'contain',height:70 }}
                    source={require('../../assets/pulses.png')} />
         <Text style={{ fontSize: 18, fontWeight: 'bold',alignSelf:'center' }} >pulses</Text>
            
        </View>
        

    );
}
 export default CardSec;