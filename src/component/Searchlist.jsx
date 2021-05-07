import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class Seacrhlist extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput
                        placeholder='Search Store'>
                    </TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search: {
        width: '90%',
        height: 43,
        borderRadius: 13,
        backgroundColor: '#FCFFFC',
        borderColor: '#ACC39E',
        borderWidth: 1,
        // shadowRadius:23,
        padding: 0, margin: 0,
        marginTop: 20,
        color: "black",
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'

    },
});
export default Seacrhlist;