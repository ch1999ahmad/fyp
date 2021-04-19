import React from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, TextInput, Dimensions, TouchableOpacity, Image } from "react-native";




const Registration = ({ navigation }) => {
    return (
        
        <View >
        <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false}>
        
                <View >

                    <Image source={require('../../assets/logo.webp')}
                        style={{ width: height_logo, height: height_logo, alignSelf: 'center', }}
                    />
                </View>
                <View style={{paddingHorizontal:20}}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', }}
                    >Signin Now</Text>
                    <Text style={{ color: 'black' }}>Enter your credentials to continue</Text>
                </View>
                <View style={{paddingHorizontal:20}}>

                    <Text style={{ fontSize: 15, color: 'black',  fontWeight: 'bold' }}>Email</Text>
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
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>Confirm Password</Text>
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.textinput}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                </View>
                <View >
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center', color: '#fff' }}>Register</Text>
                    </TouchableOpacity>
                </View>

       
        </ScrollView>
            </View>

    )
};


const { height } = Dimensions.get('screen')
const height_logo = height * 0.22;

const styles = StyleSheet.create({
    textinput: {
        // flex:3,
        width: '100%',
        height: 43,
        
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        borderRadius: 13,
        marginTop: 10,
        color: "black",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: "#59C32F",
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginBottom:30,
        borderRadius: 13,
        width: '60%',
        // textAlignVertical: "bottom",


    }

});
export default Registration;