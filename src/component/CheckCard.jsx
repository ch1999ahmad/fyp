import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';



export default ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#F3F4F3', width: 250, height: 80, alignItems: 'center', borderRadius: 13 }}>

            <Image style={{ width: "43%", height: 60 }}
                source={{ uri: item.image[0] }} />

            <View >
                <Text style={{ fontSize: 16,paddingLeft:20 }}>{item.name}</Text>
                <Text style={{ fontSize: 11, paddingLeft: 20 }}>{item.price} x {item.quantity}</Text>
            </View>

        </View>


    )
}

// export default CheckCard;