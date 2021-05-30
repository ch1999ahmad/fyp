import React from "react";
import { useState } from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, TextInput, Dimensions, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { connect } from "react-redux";
import { FontAwesome } from '@expo/vector-icons';
import { _login, _updateUser, _updateuser } from '../store/middlewares/authMiddleware';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker'



class Setting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            phone: '',
            avatar: '',
            id: props.user._id,

        }
    }

    componentDidMount() {
        this.setState(this.props.user)
        console.log(this.props.user)
    }


    openImagePickerAsync = async () => {

        let pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });

        this.setState({ image: pickerResult.uri })
        // this.uploadImage(pickerResult.uri)
    }

    uploadImage = async (uri,) => {

        const response = await fetch(uri);
        const blob = await response.blob();
        let folderName = 'avatar'
        let fileName = this.props.user.email
        var ref = firebase.storage().ref().child(folderName + "/" + fileName);
        ref.put(blob).then(() => {
            firebase.storage().ref().child(folderName + "/" + fileName).getDownloadURL()
                .then((URL) => {
                    this.setState({ avatar: URL }, () => {
                        this.updateUser()
                    })

                })
        })
        // .catch(() =>{
        //     alert("error")
        // })
    }
    updateUser = async (e) => {
        let param = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "phone": this.state.phone,
            "city": this.state.city,
            "avatar": this.state.avatar

        }
        let res = await this.props._updateUser(param, this.state._id)

    }

    render() {
        // console.log(this.state.image)
        return (

            <View style={{ height: '100%' }}>

                <ImageBackground resizeMode='stretch' source={require('../../assets/Veges.jpg')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', left: 20, top: 30 }}><Entypo name="cross" size={24} color="#171717" /></TouchableOpacity>
                    <Text style={{ fontSize: 23, textAlign: 'center', fontWeight: "bold" }}>Edit Your Profile</Text>

                    <TouchableOpacity
                        onPress={this.openImagePickerAsync} style={{ backgroundColor: '#F5F8FA', borderRadius: 120, width: "27%", height: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Image source={{ uri: this.state.image || null }} style={{ width: '100%', height: "102%", borderRadius: 120 }} />
                        <FontAwesome name="plus-square-o" size={24} color="black" />
                    </TouchableOpacity>


                    <View style={{ paddingHorizontal: 20 }}>

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>FirstName</Text>
                        <TextInput
                            value={this.state.firstName}
                            onChangeText={(firstName) => { this.setState({ firstName }) }}
                            placeholder="FirstName"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>LastName</Text>
                        <TextInput
                            value={this.state.lastName}
                            onChangeText={(lastName) => { this.setState({ lastName }) }}
                            placeholder="LastName"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />



                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>City</Text>
                        <TextInput
                            value={this.state.city}
                            onChangeText={(city) => { this.setState({ city }) }}
                            placeholder="City"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />

                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Phone</Text>
                        <TextInput
                            value={this.state.phone}
                            onChangeText={(phone) => { this.setState({ phone }) }}
                            placeholder="Phone"
                            style={styles.textinput}
                            keyboardType={'email-address'}
                            autoCapitalize='none' />

                    </View>
                    <View >
                        <TouchableOpacity style={styles.btn}
                            onPress={() => this.uploadImage(this.state.image)}>
                            <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', justifyContent: 'center', color: '#fff' }}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


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
        paddingHorizontal: 10,
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


const mapState = state => {
    return {
        logged: state.authReducer.logged,
        user: state.authReducer.user,
    }
}

const mapDispatch = dispatch => {
    return {
        _updateUser: (param, _id) => dispatch(_updateUser(param, _id)),
        setLoading: (bol) => dispatch(_setLoading(bol)),
    }
}
export default connect(mapState, mapDispatch)(Setting);