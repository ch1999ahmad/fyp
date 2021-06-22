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
import { connect } from 'react-redux';


class MyCart extends React.Component{



    getTotal = () => {
        let total = 0
        let products = this.props.products;
        products.forEach(item => {
            total = total + item.price *item.quantity
        })
        return total

    }

    render(){

// const MyCart = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                <Text style={{
                    fontSize: 23, fontWeight: "bold", alignSelf: 'center',
                    justifyContent: 'center', paddingTop: 40, paddingBottom: 9,
                }}>My Cart</Text>
            </View>
            <ScrollView  showsVerticalScrollIndicator={false} >
          
              {
                  this.props.products.map((item,index)=>
                 <CartCard  item={item} key={index} />   
                     )
              }
     
            <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <Text style={{fontSize:26}}>Total:</Text>
                        <Text style={{fontSize:26, fontWeight:'bold'}}>{this.getTotal()}</Text>
                    </View>

                </View>
                
                
            </ScrollView>
                   <View style={{ position: 'absolute', zIndex: 10, alignSelf: 'center', bottom:100,}}>
                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('CheckOut')}
                style={{backgroundColor:"#59C32F",width:'160%',alignSelf:"center"
                    ,height:50,justifyContent:"center",borderRadius:13, }}>
                 <Text style={{fontSize:18,textAlign:'center',color:"#fff"}}>Go to Checkout</Text>
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
        paddingHorizontal: 20
    },
})

const mapState = state => {
    return {
        products: state.cartReducer.products,

    }
}

export default connect(mapState,)(MyCart)