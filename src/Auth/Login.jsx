import React from "react";
import { useState } from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, TextInput, Dimensions,TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { _login } from "../store/middlewares/authMiddleware";
//import _login from "../store/middlewares/authMiddleware";


class Login extends React.Component{
    constructor(){
        super();
        this.state={
            text:"",
            email:"",
            password:"",
        }
    }
    addToReduc = () =>{
        if(this.state.email ==""){
            alert("Please Enter Your Email")
        }
       else if(this.state.password==""){
           alert("Please Enter Your Password")
       }
        else {
            let param ={
                "email": this.state.email,
                "password": this.state.password

            }
            this.props._login(param)
        }




    }

    login = async (e) => {
        let param = {
            "email":this.state.email,
            "password":this.state.password
        }
        let res = await this.props._login(param)
    }





    render(props){
        

// const Login = ({navigation}) => {

    // const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");
    return (

        <ScrollView Style={{ minHeight: Dimensions.get('screen').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false}>
            <ImageBackground style={styles.container}
                source={require('../../assets/Veges.jpg')}>
                <View style={{justifyContent:'space-evenly'}}>
                <Text style={{ fontSize: 28, alignSelf: 'center', fontWeight: 'bold', textAlignVertical: "center", textShadowColor: "#16A309", textShadowRadius: 30, height: '30%' }}>
                    {'\n '}Well Come! </Text>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlignVertical: 'bottom' }}
                    >Login</Text>
                    <Text style={{ color: 'black', paddingBottom: 10, }}>Enter your email and password</Text>
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>Email</Text>
                    <TextInput onChangeText={(email)=>{this.setState({email})}}
                        placeholder="Your Email"
                        style={styles.textinput}
                        keyboardType={'email-address'}
                        autoCapitalize='none' />
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>Password</Text>
                    <TextInput onChangeText={(password)=>{this.setState({password})}}
                        placeholder="Your Password"
                        style={styles.textinput}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Forgetpass')} style={{ paddingVertical: 8, alignSelf: 'flex-end',marginBottom:20 }}><Text style={{color:'#0000FF'}}>Forget Password</Text></TouchableOpacity>
                   </View>
                   <View style={{}}>
                    <TouchableOpacity  style={styles.btn} 
                     onPress={() => this.addToReduc()} >
                        <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center', color:'#fff'}}>Login</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                  
            </ImageBackground>
        </ScrollView>





    );

    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: "100%",
        minHeight: Dimensions.get('screen').height,

    },
    textinput: {
        // flex:3,
        width: '100%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        borderRadius:13,
        marginTop: 20,
        color: "black",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: "#59C32F",
        height: 40,
        justifyContent: 'center',
        alignSelf:'center',
        marginBottom:30,
        borderRadius: 13,
        width: '60%',
       // textAlignVertical: "bottom",
     
     
    }
});

const mapState = state =>{
    return{
        logged: state.authReducer.logged,
        // login k liya hain email and password
    }
}
const mapDispatch = dispatch =>{
    return{
        _login: (param) => dispatch(_login(param)),
        setLoading: (bol)=> dispatch(set_loading(bol)),
    }
}

export default connect(mapState, mapDispatch)(Login);