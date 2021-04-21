import React from 'react';
import { View, StyleSheet, Text, TextInput,Image } from 'react-native';
import BottomNav from '../component/BottomNav';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Home = () => {
    return (

        <View style={styles.container}>
         {/* <View style={{ borderRadius:13,flexDirection:"row",backgroundColor:'#f5f8fa', flex:0.25,  width: '90%', alignSelf: 'center', 
          alignItems:'center',paddingHorizonta:20}}> */}
          
          <View style={styles.search}>
               <AntDesign name="search1" size={20} color="black" /> 
            <TextInput 
                 placeholder='Search Store'>
            </TextInput>
            {/* </View> */}
            </View>
            
            <Image style={{width:'90%',justifyContent:'center',alignSelf:'center',height:'15%',borderRadius:13}}
            source={require('../../assets/home1.jpeg')}/>
            <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',height:'7%',
            backgroundColor:'red'
             }} >
                <Text style={{fontSize:20,fontWeight:'bold'}}> Exclusive Offer</Text>
                <TouchableOpacity><Text style={{color:'#59C32F',fontSize:15}}>See all</Text></TouchableOpacity>
            </View>
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
        backgroundColor:'#FCFFFC',
        borderColor: '#ACC39E',
        borderWidth: 1,
       // shadowRadius:23,
        padding: 0, margin: 0,
        marginTop: 20,
        color: "black",
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection:'row'
        
    },


});


export default Home;
