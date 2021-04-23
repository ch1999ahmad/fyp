import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Carousal } from '../component/Carousel';
import AddToFavorite from '../component/AddToFavorite';


const AddItem = () => {

    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                <Carousal active='#000' inActive='#D9D9D9' height={300} images={[require('../../assets/appleb.jpeg'), require('../../assets/appleb.jpeg'), require('../../assets/appleb.jpeg')]} />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>Naturel red apple</Text>
                <AddToFavorite />
            </View>
            <Text style={{color:'#7C7C7C',}}>1kg,Price</Text>
            <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                 <TouchableOpacity><Entypo name="minus" size={24} color="black" /></TouchableOpacity>
                 <Text style={{fontSize:18,borderWidth:1,width:'15%',height:44,textAlign:'center',backgroundColor:'red',textAlignVertical:'center'}}>1</Text>
                 <TouchableOpacity style={{backgroundColor:'red'}}><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
                </View>
            </View>
        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20
    },
})

export default AddItem;