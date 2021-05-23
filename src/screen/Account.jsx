import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomNav from '../component/BottomNav';

class Account extends React.Component{
    render(props){

// const Account = (props) => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Image style={{ width: '30%', height: 95, borderRadius: 100 }}
                    source={require('../../assets/ahmad.jpeg')} />

                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}
                    >Ahmad ch</Text>
                    <Text style={{ color: "#7C7C7C" }}>Developer</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="phone" size={17} color="#7C7C7C" />
                <Text style={{ color: "#7C7C7C",paddingLeft: 10  }}>03085137163</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Entypo name="mail" size={18} color="#7C7C7C" />
                <Text style={{ color: "#7C7C7C",paddingLeft: 10  }}>Emmich56@gmail.com</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>

                <TouchableOpacity style={{ backgroundColor: '#FCFFFC', width: '48%', height: 65, borderColor: '#ACC39E', borderWidth: 1, borderRadius: 13, justifyContent: 'center' }} >
                    <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: 'bold', color: '#7C7C7C', }}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FCFFFC', width: '48%', height: 65, borderColor: '#ACC39E', borderWidth: 1, borderRadius: 13, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: "center", textAlignVertical: "center", color: '#7C7C7C' }}>12 </Text>
                    <Text style={{ alignSelf: "center", color: '#7C7C7C' }}>Order</Text>
                </TouchableOpacity>
            </View>
          
                <View style={{}}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Entypo name="heart" size={18} color="#7C7C7C" />
                        <Text style={{ color: "#7C7C7C", paddingLeft: 10 }}>Your Favourites</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <FontAwesome5 name="user-friends" size={16} color="#7C7C7C" />
                        <Text style={{ color: "#7C7C7C", paddingLeft: 10 }}>Tell Your Friends</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Ionicons name="settings" size={18} color="#7C7C7C" />
                        <Text style={{ color: "#7C7C7C", paddingLeft: 10 }}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <FontAwesome name="tag" size={18} color="#7C7C7C" />
                        <Text style={{ color: "#7C7C7C", paddingLeft: 10 }}>Promotions</Text>
                    </TouchableOpacity>
                </View>
           <BottomNav navigation={this.props.navigation}/>
        </View>

    );

}
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
         justifyContent:'space-evenly',
         paddingBottom:100
    },
})
export default Account;