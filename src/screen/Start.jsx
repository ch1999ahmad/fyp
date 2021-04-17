import React from "react";
import {StyleSheet, View,Text,Image, Dimensions, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";




const Start =({navigation})=>{
    return(
        <ImageBackground source={require('../../assets/startimg.png')} style={styles.container}>
        <View style={styles.header}>
         <Image
        source={require('../../assets/logo.webp')}
        style={styles.logo}
         resizeMode="stretch"/> 
     {/* <Text style={{ color:"black",fontSize:23,textAlign:"center"}}>AOA Ahmad</Text>  */}
        </View>
        <View style={styles.footer}>
        <Text style={{ fontSize:23,color:'white'}}>Stay connected with{"\n"} everyone!</Text>
        <Text style={{color:'white'}}>Signin with account</Text>
        <View >
        <TouchableOpacity style={styles.btn}
        onPress={()=>navigation.navigate('Login')}>
            <Text style={{fontSize:15,alignSelf:'center',fontWeight:'bold',justifyContent:'center',}}>Get Started</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>

);
}; 
export default Start;
 const {height} = Dimensions.get('screen')
 const height_logo = height * 0.28;
const styles=StyleSheet.create({
 container:{
     flex:1,
     justifyContent:"center",
     backgroundColor:'#FFFFFF',
     height:'70%',
 },
 header:{
     flex:2,
     justifyContent:"center",
     alignItems:"center",               
 },
 footer:{
     flex:1,
     backgroundColor:"#16A309",
     borderTopLeftRadius:30,
     borderTopRightRadius:30,
     paddingHorizontal:30,
     
     justifyContent:'space-around'
     
 },
 logo:{
     width:height_logo,
     height:height_logo,
     marginTop:50,
   
 },
 btn:{
     backgroundColor:"white",
     height:40,
     justifyContent:'center',
     marginBottom:30,
     borderRadius:13,
     width:'60%',
     
     
     
 },
});
