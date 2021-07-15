import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CheckCard from '../component/CheckCard';
import { Octicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { removeCart } from '../store/actions/cartAction';
import Path from '../api/Path';
import api from '../api/Api'

class CheckOut extends React.Component{

    getTotal = () => {
        let total = 0
        let products = this.props.products;
        products.forEach(item => {
            total = total + item.price * item.quantity
        })
        return total

    }
    CheckOut = async()=> {
        let param={
            "orderNo":Math.round(Math.random()+1000),
        
            "price":this.getTotal(),
           "user":this.props.user.  _id,
            "items":this.props.products.map(p=>p._id),
            "status":"PENDING",
           "orderDate":new Date().toISOString()
        
        
        }
                 let response = await api(Path.addorder, "POST", param)
             if(response.success){
        this.props.navigation.navigate('Successful')
             }
             else {
                 alert(response.message)
             }
                 
                }

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
                {
                        this.props.products.map((item, index) =>
                            <View key={index} style={{ padding: 20 }}><CheckCard item={item} /></View>
                        )
                    }

                    
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
                <Text>{this.getTotal()}</Text>
            </View>
            <View style={{}}>
                    <TouchableOpacity  onPress={() => this.CheckOut()}
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
// export default CheckOut;
const mapState = state => {
    return {
        products: state.cartReducer.products,
        user: state.authReducer.user

    }
}
const mapDispatch = dispatch => {
    return {
      removeCart: () => dispatch(removeCart()),
    
   
    }
  }
export default connect(mapState,mapDispatch)(CheckOut)