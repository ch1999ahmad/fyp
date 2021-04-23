import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Categories = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontSize: 24, fontWeight: 'bold', padding: 18, backgroundColor: '#59C32F', borderRadius: 13, width: '90%',
                    alignSelf: 'center', textAlign: 'center'
                }}>Categories</Text>
            </View>
            
            
          
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ paddingLeft: 20 }}>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, paddingLeft: 30 }}>Eggs</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Noodles and Pasta</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Chips and Chrips</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Fast Food</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Fast Food</Text>
                </View>
            </View>
           
            
            
      


            <View>
                <Text style={{
                    fontSize: 24, fontWeight: 'bold', padding: 18, backgroundColor: '#59C32F', borderRadius: 13, width: '90%',
                    alignSelf: 'center', textAlign: 'center'
                }}>Brands</Text>
            </View>
            
           
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ paddingLeft: 20 }}>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, paddingLeft: 30 }}>LU</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Kanoor</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Lays</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Foke n knife</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Feather name="circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingLeft: 30 }}>Tosheeba</Text>
                </View>
            </View>
            
             <View>
            <TouchableOpacity style={{ backgroundColor: '#59C32F', width: '70%', alignSelf: 'center', justifyContent: 'center', height: 55, borderRadius: 13 }}>
                <Text style={{ fontSize: 18, textAlign: 'center' }} >Apply Filter</Text>
            </TouchableOpacity>
            </View>


        </View>

    )


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3F2',
        justifyContent: 'space-evenly',

    },
})

export default Categories;