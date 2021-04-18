                                                                                                                                            
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
// import Middle from '../component/Middle';
// import Btn from '../src/component/Btn';
// import Lets from '../src/component/Lets';
// import Inputfield from '../src/component/Inputfield';
import { EvilIcons } from '@expo/vector-icons';




class Forgetpass extends React.Component {
    constructor() {
        super();
        this.state = {
           
            email: '',

        }
    }
    addToReduc = () => {

        if (this.state.email == '') {
            alert('Please write Email')
        }


        else {
            this.props.navigation.navigate('SuccessfulRegister', {
                itemId: 1234,

            });




        }}

        render() {
            return (

                <View style={{ height: '100%', justifyContent: 'space-evenly' }}>

                    <ImageBackground resizeMode='stretch' source={require('../../assets/Veges.jpg')} style={{
                        width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                    }} />


                    <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                        {/* <Image style={{width:'50%',height:150,}} source={require('../../assets/q.png')} /> */}

                        <View>
                            <View>
                            <Image source={require('../../assets/lock.png')}
                          style={{ width: height_logo, height: height_logo, alignSelf: 'center', }}/>
                                {/* <EvilIcons style={{ alignSelf: 'center' }} name="question" size={84} color="black" /> */}
                                <Text style={{ textAlign: 'center', fontSize: 32, fontFamily: 'Poppin',fontWeight:'bold' }}>Forget Your Password</Text>
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: 15 }}>Enter your email or phone{'\n'}to get verification code</Text>
                            </View>
                        </View>


                        <View style={{ width: '100%' }} >

                            {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                            <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="Email or phone"
                                onChangeText={(email) => { this.setState({ email }) }}
                            />



                            <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                                <Text style={{ color: 'white', }}>Next</Text>
                            </TouchableOpacity>
                            {/* <Btn onPress={() => this.props.navigation.navigate('Home')} text="Login" color='#000DAE' width="90%" /> */}


                        </View>
                    </ScrollView>
                </View>

            )


        }
    }
    const { height } = Dimensions.get('screen')
const height_logo = height * 0.10;

    const styles = StyleSheet.create({
        text: {
            alignItems: 'center',
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            height: 43,
            backgroundColor: '#59C32F',
            borderRadius: 13,
            width: "60%",
            fontWeight:'bold',
        },
        inputfield: {
            width: '90%',
            height: 43,
            borderRadius: 13,
            backgroundColor: '#F5F8FA',
            borderColor: '#97aabd',
            borderWidth: 1,
            padding: 0, margin: 0,
           // fontFamily: 'Poppins',
            marginTop: 20,
            color: "#97AABD",
            alignSelf: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: 10






        },

    });




























    export default Forgetpass