import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CheckCard from '../component/CheckCard';
import { Octicons } from '@expo/vector-icons';


class CheckOut extends React.Component{
    render(props){

// const CheckOut = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingTop: 30 }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Ionicons name="md-close" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
            </View>
            <View>
                <Image style={{ width: "100%", height: 230, }}
                    source={require('../../assets/pay.jpg')} />
            </View>


            <View style={{ borderTopWidth: 1, borderColor: "#E2E2E2", width: '100%', }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", }}>Your Products</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }} >
                    <View style={{ padding: 20, paddingLeft: 0 }}><CheckCard /></View>
                    <View style={{ padding: 20 }}><CheckCard /></View>
                    <View style={{ padding: 20 }}><CheckCard /></View>
                </ScrollView>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly'}}>
            <View style={{ borderTopWidth: 1, borderColor: "#E2E2E2", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row' }}>
                    <Octicons style={{ alignSelf: "center" }}
                        name="location" size={15} color="black" />
                    <Text style={{ fontSize: 15, paddingLeft: 10 }}>Delivery Place</Text>
                </View>
                <View>
                    <Entypo name="plus" size={24} color="black" />
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>

                <TouchableOpacity style={{ backgroundColor: "#59C32F", width: '48%', height: 50, borderColor: '#ACC39E', borderWidth: 1, borderRadius: 13, justifyContent: 'center' }} >
                    <Text style={{ fontSize: 18, alignSelf: "center", color: '#fff', }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#59C32F", width: '48%', height: 50, borderColor: '#ACC39E', borderWidth: 1, borderRadius: 13, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, alignSelf: "center", textAlignVertical: "center", color: '#fff' }}>Businuess</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderColor: "#E2E2E2" }}>
                <Text>Total</Text>
                <Text>$1200</Text>
            </View>
            <View style={{}}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Successful')}
                    style={{backgroundColor:"#59C32F",width:'70%',alignSelf:"center"
                    ,height:50,justifyContent:"center",borderRadius:13,}}>
                        <Text style={{fontSize:17,textAlign:"center",color:'#fff'}}>Place Order</Text>
                    </TouchableOpacity>
                </View>
                </View>
        </View>

    );
}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
})
export default CheckOut;