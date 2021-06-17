import React from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, TextInput, Dimensions, TouchableOpacity, Image } from "react-native";
import api from "../api/Api";
import Path from "../api/Path";



class Registration extends React.Component {

    constructor() {
        super();
        this.state = {
            Fname: '',
            Lname: '',
            email: '',
            city: '',
            password: '',
            Cpassword: '',
            phone: '',

        }
    }
    addToReduc = async () => {
        if (this.state.Fname == '') {
            alert('Please Enter First Name')
        }
        else if (this.state.Lname == '') {
            alert('Please Enter Last Name')
        }
        else if (this.state.email == '') {
            alert('Please Enter Email')
        }
        else if (this.state.city == '') {
            alert('Please Enter City')
        }
        else if (this.state.password == '') {
            alert('Please Enter Password')
        }
        else if (this.state.Cpassword == '') {
            alert('Please Enter Confirm password')
        }
        else if (this.state.phone == '')
            alert('Please Enter Phone#')
        else {
            let param = {
                "firstName": this.state.Fname,
                "lastName": this.state.Lname,
                "phone": this.state.phone,
                "email": this.state.email,
                "city": this.state.city,
                "password": this.state.password,
            }
            let response = await api(Path.register, "POST", param)
            // alert(response.msg)
            console.log(response.message)
            alert(response.message)

        }

    }

    registerHandler = async (e) => {
        e.preventDefault()
        if (this.state.password !== this.state.confirmPassword) {
            return alert('Your Password not match')
        }
        this.props.setLoading(true)
        let user = {
            firstName: this.state.Fname.trim(),
            lastName: this.state.Lname.trim(),
            phone: this.state.phone.trim(),
            email: this.state.email.trim(),
            city: this.state.city.trim(),
            password: this.state.password,
            Cpassword: this.state.Cpassword,


        }
        let res = await api.registerUser(user)
        if (res) {
            await this.props._login(this.state.email, this.state.password)
            window.location.replace("/")
        }
        // this.props.setLoading(false)
    }

    render() {

     
        // const Registration = ({ navigation }) => {
        return (

            <View >
                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false}>

                    <View >


                        <Image source={require('../../assets/logo.webp')}
                            style={{ width: height_logo, height: height_logo, alignSelf: 'center', }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', }}
                        >Signin Now</Text>
                        <Text style={{ color: 'black' }}>Enter your credentials to continue</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>FirstName</Text>
                        <TextInput
                            onChangeText={(Fname) => { this.setState({ Fname }) }}
                            placeholder="FirstName"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>LastName</Text>
                        <TextInput
                            onChangeText={(Lname) => { this.setState({ Lname }) }}
                            placeholder="LastName"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />



                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Phone</Text>
                        <TextInput
                            onChangeText={(phone) => { this.setState({ phone }) }}
                            placeholder="Phone"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Email</Text>
                        <TextInput
                            onChangeText={(email) => { this.setState({ email }) }}
                            placeholder="Your Email"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>City</Text>
                        <TextInput
                         placeholder="City"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            onChangeText={(city) => { this.setState({ city }) }}
                           
                             />

                        <Text style={{ fontSize: 15, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>Password</Text>
                        <TextInput
                            onChangeText={(password) => { this.setState({ password }) }}
                            placeholder="Your Password"
                            style={styles.textinput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <Text style={{ fontSize: 15, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>Confirm Password</Text>
                        <TextInput
                            onChangeText={(Cpassword) => { this.setState({ Cpassword }) }}
                            placeholder="Confirm Password"
                            style={styles.textinput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                    </View>
                    <View >
                        <TouchableOpacity style={styles.btn}
                            onPress={() => this.addToReduc()}>
                            <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center', color: '#fff' }}>Register</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>

        )
    }
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