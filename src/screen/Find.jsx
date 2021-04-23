import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import BottomNav from '../component/BottomNav';
import { AntDesign } from '@expo/vector-icons';
import Card from '../component/Card';

const Find = () => {
    return (
        <View style={styles.container}>

            <View style={{ alignSelf: 'center', justifyContent: 'center', paddingTop: 40 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Find Products</Text>
            </View>
            <View style={styles.search}>
                <AntDesign name="search1" size={20} color="black" />
                <TextInput
                    placeholder='Search Store'>
                </TextInput>
            </View>
            <ScrollView>
                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-around'}}>
                <Card />
                <Card />
                </View>
                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-around'}}>
                <Card />
                <Card />
                </View>
                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-around'}}>
                <Card />
                <Card />
                </View>
                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-around'}}>
                <Card />
                <Card />
                </View>
            </ScrollView>
            <BottomNav />


        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search: {
        width: '90%',
        height: 43,
        borderRadius: 13,
        backgroundColor: '#FCFFFC',
        borderColor: '#ACC39E',
        borderWidth: 1,
        // shadowRadius:23,
        padding: 0, margin: 0,
        marginTop: 20,
        color: "black",
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'

    },
});

export default Find;