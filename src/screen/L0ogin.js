
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
// import Middle from '../src/components/Middle';
import Btn from '../component/Btn'
// import Lets from '../src/components/Lets';
// import Inputfield from '../src/components/Inputfield';




class LOogin extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         text: '',
    //         email: '', 
    //         password: '',
    //     }
    // }
    // addToReduc = () => {

    //     if (this.state.email == '') {
    //         alert('Please write Email')
    //     }
        
    //     else if (this.state.password == '') {
    //         alert('Please write PASSWORD  ')
    //     }
    //     else  {
    //         this.props.navigation.navigate('Home')
    //     }
       



    // }
 
    render() {
        return (

            <View style={{ height: '100%' }}>

                {/* <ImageBackground resizeMode='stretch' source={require('../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} /> */}
{/* 
                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                    <Text style={{ fontFamily: 'sp', fontSize: 23, textAlign: 'center' }}>Mughal</Text>
                    {/* <Lets /> */}

                    {/* <View style={{ width: '100%' }} > */}

                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        {/* <TextInput  keyboardType={'email-address'}  style={styles.inputfield} placeholder="enter email"
                            onChangeText={(email) => { this.setState({ email }) }}
                        /> */}
                        {/* <Inputfield text="Password" /> */}
                        {/* <TextInput style={styles.inputfield} placeholder="enter password" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        /> */}

                        {/* <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                            <Text style={{ color: 'white', }}>Login</Text>
                        </TouchableOpacity> */} 
                        {/* <Btn onPress={() => this.props.navigation.navigate('Home')} text="Login" color='#000DAE' width="90%" /> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Btn text="FaceBook" color='red' width="43%" />
                            <Btn text="Google" color='#97aabd' width="43%" />

                        </View>

                    </View>
                // </ScrollView>
            // </View>

        )


    }
}
const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 43,
        backgroundColor: '#000DAE',
        borderRadius: 3,
        width: "90%"
    },
    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        fontFamily: 'Poppins',
        marginTop: 20,
        color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10






    },

});




























export default Login