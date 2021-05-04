import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, ImageBackground } from 'react-native';



class First extends React.Component{
    componentDidMount(){
        setTimeout(() => {
          this.props.navigation.navigate('Load')
        
        }, 3000);
    }
    render(){
    return (

        <View style={styles.container}>

            <View style={{  }}>
                <View style={{ alignSelf: "center", }}>
                    <Image
                        source={require('../../assets/gajr.png')} />
                </View>
                <View>
                    <Text style={{ color: '#fff', fontSize: 50, fontWeight: "bold", alignSelf: "center" }}>
                        AHMAD
                </Text>
                </View>
            </View>
            <View>
            <Text style={{color:"#fff"}}>Online Cash & Carry</Text>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
        //height: "100%",
        backgroundColor: "#59C32F",
        //alignSelf:'center',
        justifyContent: 'center',
        alignItems: "center"

    },
})


export default First;