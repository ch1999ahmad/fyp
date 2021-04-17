import React from "react";
import { ImageBackground, View,Text,StyleSheet, ScrollView, TextInput,Dimensions} from "react-native";
import Btn from "../component/Btn";



const Login= () =>{
 return(
     
       <ScrollView Style={{ minHeight: Dimensions.get('screen').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false}>
       <ImageBackground  style={styles.container}
       source={require('../../assets/lback.png')}>
        <Text style={{fontSize:28,alignSelf:'center',fontWeight:'bold',textAlignVertical:"center",textShadowColor:"#16A309",textShadowRadius:30,height:'28%'}}>
        {'\n '}Well Come! </Text>
        <View style={{paddingHorizontal:20}}>
       <Text style={{fontSize:25, fontWeight:'bold', textAlignVertical:'bottom'}}
        >Login</Text>
        <Text style={{color:'black',paddingBottom:10,}}>Enter your email and password</Text>
        <Text style={{fontSize:15,color:'black',paddingTop:10,fontWeight:'bold'}}>Email</Text>
        <TextInput
           placeholder="Your Email"
           style={styles.textinput}
           keyboardType={'email-address'} 
           autoCapitalize='none'/>
            <Text style={{fontSize:15,color:'black',paddingTop:10,fontWeight:'bold'}}>Password</Text>
            <TextInput
           placeholder="Your Password"
           style={styles.textinput}
           autoCapitalize='none'
            secureTextEntry={true}
           />
           <Text style={{paddingVertical:10,alignSelf:'flex-end',color:}}>Fetget Password</Text>
           </View>
      </ImageBackground>  
      </ScrollView> 
      

       
      
       
 );


};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height:"100%",
        minHeight: Dimensions.get('screen').height,
       
    },
    textinput:{
       // flex:3,
        width: '100%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        
        marginTop: 20,
        color: "black",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    }
    
})
export default Login;