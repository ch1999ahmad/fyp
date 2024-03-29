import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FavCard from "../component/FavCard";
import BottomNav from '../component/BottomNav';
import { connect } from 'react-redux';
import Card from '../component/Card';

class Favourite extends React.Component{
    render(){
console.log(this.props.fav)
// const Favourite =(props)=>{
    return(
        <View style={styles.container}>
              
              <View style={{ borderBottomWidth: 1, borderColor: '#E2E2E2' }}>
                <Text style={{
                    fontSize: 23, fontWeight: "bold", alignSelf: 'center',
                    justifyContent: 'center', paddingTop: 40, paddingBottom: 9,
                }}>Favourite</Text>
            </View>
            <ScrollView  showsVerticalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between", }}>
                        {
                            this.props.fav.map((item, index) =>
                                <Card key={index} navigation={this.props.navigation} item={item} />
                            )
                        }
                    </View>
                </ScrollView>
           {/* <View style={{ position: 'absolute', zIndex: 10, alignSelf: 'center', bottom:100,}}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('MyCart')}
                style={{backgroundColor:"#59C32F",width:'160%',alignSelf:"center"
                    ,height:50,justifyContent:"center",borderRadius:13, }}>
                 <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',color:"#fff"}}>Add All To Cart</Text>
                </TouchableOpacity>
                </View> */}
            <BottomNav navigation={this.props.navigation}/>
        </View>
    )
    }
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
});


const mapState = state => ({
    fav: state.appReducer.favourites
})
const mapDispatch = dispatch => ({
    // fav: state.appReducer.favourites
})

export default connect(mapState, mapDispatch)(Favourite)