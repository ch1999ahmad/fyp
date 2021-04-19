import React from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, TextInput, Dimensions,TouchableOpacity } from "react-native";




const Login = ({navigation}) => {
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
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textinput}
                        keyboardType={'email-address'}
                        autoCapitalize='none' />
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>Password</Text>
                    <TextInput
                        placeholder="Your Password"
                        style={styles.textinput}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity  onPress={() => navigation.navigate('Forgetpass')} style={{ paddingVertical: 8, alignSelf: 'flex-end',marginBottom:20 }}><Text style={{color:'#0000FF'}}>Forget Password</Text></TouchableOpacity>
                   </View>
                   <View style={{}}>
                    <TouchableOpacity  style={styles.btn} 
                     onPress={() => navigation.navigate('Home')} >
                        <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center', color:'#fff'}}>Login</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                  
            </ImageBackground>
        </ScrollView>





    );


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
export default Login;