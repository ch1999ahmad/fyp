import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addQuantity, addToCart, removeCart, removeItemCart } from '../store/actions/cartAction'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qt: 0,
        }
    }



    handleChange = async (num) => {
        var total = this.state.qt + num
        var product = this.props.product
        if (total < 1) {
            await this.props.removeItemCart(product._id)
            // alert(JSON.stringify(this.props.items))
            this.setState({ qt: 0, })
        } else {

            let quantity = total
            var _id = this.props.product._id
            console.log(_id)
            this.props.addToCart({ _id, quantity, product: this.props.product })
            this.setState({ qt: total, })
        }
    }

    componentDidMount() {
        this.handleCheckCarted()
    }

    handleCheckCarted = async () => {
        let index = this.props.products.findIndex(product => product._id == this.props.product._id)

        if (index !== -1) {
            await this.setState({ qt: this.props.products[index]?.quantity, })
        }


    }
    componentDidUpdate(prevProps, prevState) {
        const { products } = this.props

        if (prevProps.products !== products) {
            this.handleCheckCarted()
        }

    }






    // increaseCounter = () => {
    //     this.setState({ qt: this.state.qt + 1 })
    // }
    // decreaseCounter = () => {
    //     this.setState({ qt: this.state.qt - 1 })
    // }


    render() {
        console.log(this.props.products)
        return (
            <View style={styles.container}>
                {this.state.qt === 0 ?

                    <TouchableOpacity onPress={() => this.handleChange(1)}
                        style={{
                            backgroundColor: "#59C32F"
                            , height: 40, justifyContent: "center", borderRadius: 8,
                        }}>
                        <Text style={{ fontSize: 17, textAlign: "center", color: "#fff" }}>Quantity</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ flexDirection: "row", width: 120, justifyContent: "space-around", alignSelf: "center" }}>
                        <TouchableOpacity style={{ justifyContent: "center" }}
                            onPress={() => this.handleChange(-1)}>
                            <Entypo name="minus" size={24} color="black" />

                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, borderWidth: 1, width: '30%', height: 44, textAlign: 'center', textAlignVertical: "center", borderRadius: 13, borderColor: '#E2E2E2' }}>{this.state.qt}</Text>
                        <TouchableOpacity style={{ justifyContent: "center" }}
                            onPress={() => this.handleChange(1)}>
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
        width: "100%"
        // minWidth:"100%"
        // flex: 1,
        //backgroundColor: '#fff',
        //  alignSelf:"center",
        // justifyContent:"center"

    },
})

const mapState = state => {
    return {
        products: state.cartReducer.products,

    }
}
const mapDispatch = dispatch => {
    return {
        removeCart: (dt) => dispatch(removeCart(dt)),
        addQuantity: (data) => dispatch(addQuantity(data)),
        addToCart: (data) => dispatch(addToCart(data)),
        removeItemCart: (data) => dispatch(removeItemCart(data)),

    }
}
export default connect(mapState, mapDispatch)(Counter)