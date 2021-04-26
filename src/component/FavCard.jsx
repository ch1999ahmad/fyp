import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const FavCard = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#E2E2E2', paddingBottom: 10, paddingTop: 10 }}>
                <View style={{ marginVertical: 10, }}>
                    <Image
                        source={require('../../assets/can.png')} />
                </View>
                <View style={{ justifyContent: 'center', width: "50%" }}>

                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sprite Can</Text>
                    <Text style={{}}>325ml, Price</Text>

                </View>
                <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', }}>$1.50</Text>
                    <TouchableOpacity><AntDesign style={{ paddingLeft: 10, paddingTop: 4 }}
                        name="right" size={18} color="black" /></TouchableOpacity>

                </View>

            </View>

        </View>


    );
}


export default FavCard;