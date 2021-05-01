import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


class Counter extends Component {
    state = {
        counter: 0
    }
    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.counter === 0 ?

                    <TouchableOpacity onPress={() => this.increaseCounter()}
                        style={{backgroundColor: "#59C32F"
                            , height: 40,justifyContent:"center" ,borderRadius: 8,}}>
                        <Text style={{ fontSize: 17, textAlign: "center",color:"#fff" }}>Add to Cart</Text>
                    </TouchableOpacity>


                :
                    <View style={{ flexDirection: "row", width: 120, justifyContent: "space-around",alignSelf:"center" }}>
                        <TouchableOpacity style={{ justifyContent: "center" }}
                            onPress={() => this.decreaseCounter()}>
                            <Entypo name="minus" size={24} color="black" />

                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, borderWidth: 1, width: '30%', height: 44, textAlign: 'center', textAlignVertical: "center", borderRadius: 13, borderColor: '#E2E2E2' }}>{this.state.counter}</Text>
                        <TouchableOpacity style={{ justifyContent: "center" }}
                            onPress={() => this.increaseCounter()}>
                            <Entypo name="plus" size={24} color="black" />

                        </TouchableOpacity>
                    </View>
            }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:"100%"
        // minWidth:"100%"
        // flex: 1,
        //backgroundColor: '#fff',
        //  alignSelf:"center",
        // justifyContent:"center"

    },
})

export default Counter;