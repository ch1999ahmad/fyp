import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native'
//import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { getStatusBarHeight } from 'react-native-status-bar-height';




const BottomNav = (props) => {
    return (

        <View style={{ position: 'absolute', zIndex: 10, alignSelf: 'center', bottom: 20, }}>
            <View style={styles.nav} >
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Entypo style={{alignSelf:"center"}} name="shop" size={24} color="black" />
                        <Text style={{ alignItems: 'center', color: 'black', }}>Home</Text>

                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Find')} >
                    <AntDesign style={{alignSelf:"center"}} 
                    name="search1" size={24} color="black" />
                    <Text style={{ alignItems: 'center', color: 'black', }}>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('MyCart')}>
                    <MaterialCommunityIcons style={{alignSelf:"center"}}
                    name="cart-outline" size={24} color="black" />
                    <Text style={{ alignItems: 'center', color: 'black', }}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => props.navigation.navigate('Favourite')}>
                    <FontAwesome5 style={{alignSelf:"center"}}
                     name="heart" size={24} color="black" />
                    <Text style={{ alignItems: 'center', color: 'black', }}>Favourite</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => props.navigation.navigate('Account')}>
                    <MaterialCommunityIcons style={{alignSelf:"center"}}
                     name="account-outline" size={24} color="black" />
                    <Text style={{ alignItems: 'center', color: 'black', }}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    // ontainer: {
    //  flex: 1,
    //  backgroundColor: '#fff',

    // paddingTop: getStatusBarHeight()
    // },

    nav: {
        backgroundColor: '#f5f8fa',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center',
        // borderBottomLeftRadius: 13,
        // borderBottomRightRadius: 13,
        paddingVertical: 5,
        // backgroundColor:'red',
        borderRadius: 13,

    }
});


export default BottomNav;