import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CardSec from '../component/CardSec';


const CheckOut = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between",paddingTop:30}}>
                <TouchableOpacity><Ionicons name="md-close" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
            </View>
            <View>
                <Image style={{width: "100%", height: 200,}}
                    source={require('../../assets/pay.jpg')} />
            </View>
            <View style={{borderBottomWidth:1,borderColor:"#E2E2E2"}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }} >
                    <View style={{ padding: 20, paddingLeft: 0 }}><CardSec/></View>
                    <View style={{ padding: 20 }}><CardSec/></View>
                    <View style={{ padding: 20 }}><CardSec/></View>
                </ScrollView>

            </View>

        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
})
export default CheckOut;