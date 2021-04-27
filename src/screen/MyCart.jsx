import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CartCard from '../component/CartCard';
import BottomNav from '../component/BottomNav';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const MyCart = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                <Text style={{
                    fontSize: 23, fontWeight: "bold", alignSelf: 'center',
                    justifyContent: 'center', paddingTop: 40, paddingBottom: 9,
                }}>My Cart</Text>
            </View>
            <ScrollView  showsVerticalScrollIndicator={false} >
                <CartCard />
                <CartCard />
                <CartCard />
                
            </ScrollView>
                   <View style={{ position: 'absolute', zIndex: 10, alignSelf: 'center', bottom:100,}}>
                <TouchableOpacity style={{backgroundColor:"#59C32F",width:'160%',alignSelf:"center"
                    ,height:50,justifyContent:"center",borderRadius:13, }}>
                 <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',color:"#fff"}}>Go to Checkout</Text>
                </TouchableOpacity>
                </View>
            <BottomNav navigation={props.navigation}/>
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

export default MyCart;