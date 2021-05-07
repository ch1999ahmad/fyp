import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';



class Successful extends React.Component {
    render(props) {
        return (
            <View style={styles.container}>
                <View><Text style={{ fontSize: 30, color: "#59C32F", fontWeight: "bold", alignSelf: "center" }}>Congratulations</Text></View>
                <Image style={{ alignSelf: 'center', width: "100%" }}
                    source={require('../../assets/payment.png')} />
                <View style={{ justifyContent: 'space-evenly', flex: 0.5 }}>
                    <Text style={{ fontSize: 30, color: "#59C32F", fontWeight: "bold", alignSelf: "center" }}>  Payment{'\n'}Successful</Text>
                    <Text style={{ fontSize: 18, color: "#BACCB3", alignSelf: "center" }}>Thanks you for shopping with us{'\n'}Your account has been charged & {'\n'}
                your transaction is successful.We{'\n'}will be processing your order soon.</Text>
                </View>
                <View style={{ position: 'absolute', zIndex: 10, alignSelf: 'center', bottom: 110, }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
                        style={{
                            backgroundColor: "#59C32F", width: '160%', alignSelf: "center"
                            , height: 50, justifyContent: "center", borderRadius: 13,
                        }}>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: "#fff" }}>Go back to Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,

    },
})
export default Successful;