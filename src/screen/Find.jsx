import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import BottomNav from '../component/BottomNav';
import { AntDesign } from '@expo/vector-icons';
import Card from '../component/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardThrd from "../component/CardThrd";

class Find extends React.Component{
    render(props){

    
// const Find = (props) => {
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
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <CardThrd Image={require('../../assets/Vgetble.png')} text="Frash Fruits & Vegetable" color='#B7DFF5' Rcolor='#B7DFF5'/>
                    <CardThrd Image={require('../../assets/Vgetble.png')} text={"Cooking Oil \n & Ghee"} color='#F8A44C' Rcolor='#f8a44c'  />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <CardThrd />
                    <CardThrd />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <CardThrd />
                    <CardThrd />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <CardThrd />
                    <CardThrd />
                </View>

            </ScrollView>
            <BottomNav navigation={this.props.navigation} />
        </View>

    );
    }
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