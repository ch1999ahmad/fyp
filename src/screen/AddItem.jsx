import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { Carousal } from '../component/Carousel';
import AddToFavorite from '../component/AddToFavorite';
import { AntDesign } from '@expo/vector-icons';
import Counter from '../component/Counter';



class AddItem extends React.Component {
    componentDidMount() {
        // console.log(this.props.route.params);
        this.setState({ Matchcode: this.props.route.params.itemId })
    }
    render() {


        // const AddItem = ({ navigation }) => {

         const product = this.props.route.params.item
          

        return (
            <View style={styles.container}>
                {/* <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}> */}
                <Carousal active='#000' inActive='#D9D9D9' height={300} images={product.image} />
                {/* </View> */}
                <View style={{ paddingHorizontal: 20, flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Name: {product.name}</Text>
                        <AddToFavorite product={product} />
                    </View>
                    <Text style={{ color: '#7C7C7C' }}>1kg,Price: {product.price}</Text>

                    <Counter product={product} />

                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ paddingRight: 9 }}><Entypo name="minus" size={24} color="black" /></TouchableOpacity>
                        <Text style={{
                            fontSize: 18, borderWidth: 1, height: 44, textAlign: 'center', textAlignVertical: 'center', borderRadius: 13,
                            borderColor: '#E2E2E2', width: '30%',}}>1</Text>
                        <TouchableOpacity style={{ paddingLeft: 9 }}><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$4.99</Text>
                    </View>
                </View> */}



                    <View style={{ borderBottomWidth: 1, borderColor: "#E2E2E2", borderTopWidth: 1, }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 8, }}>Product Detail:</Text>
                        <Text style={{ color: '#7C7C7C', paddingBottom: 8 }}>{product.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nutritious</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center" }}>
                            <AntDesign name="star" size={18} color="black" />
                            <AntDesign name="star" size={18} color="black" />
                            <AntDesign name="star" size={18} color="black" />
                            <AntDesign name="star" size={18} color="black" />
                            <TouchableOpacity>
                                <AntDesign style={{ paddingLeft: 10 }}
                                    name="right" size={18} color="black" /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyCart')}
                            style={{
                                backgroundColor: "#59C32F", width: '70%', alignSelf: "center"
                                , height: 50, justifyContent: "center", borderRadius: 13,
                            }}>
                            <Text style={{ fontSize: 17, textAlign: "center", color: "#fff" }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
})

export default AddItem;