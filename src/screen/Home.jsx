import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import BottomNav from '../component/BottomNav';
import { AntDesign } from '@expo/vector-icons';



const Home = () => {
    return (

        <View style={styles.container}>

            <TextInput
                style={styles.search} placeholder='Search Store'>
            </TextInput>
            <BottomNav />
        </View>
    );
}


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
        padding: 0, margin: 0,
        // fontFamily: 'Poppins',
        marginTop: 20,
        color: "black",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },


});


export default Home;
