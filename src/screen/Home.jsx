import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import BottomNav from '../component/BottomNav';
import { AntDesign } from '@expo/vector-icons';
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import { Carousal } from '../component/Carousel';
import Card from '../component/Card';
import CardSec from '../component/CardSec';
import { connect } from 'react-redux';
import { _getCategories, _getItems } from '../store/middlewares/appMiddleware';
import kella from '../../assets/kella.png'

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         food: [
    //             {
    //                 name: 'banana',
    //                 price: "99$ ",
    //                 desription: '',
    //                 image: [
    //                     kella, kella, kella
    //                 ]
    //             },

    //             {
    //                 name: 'banana',
    //                 price: "99$ ",
    //                 desription: '',
    //                 image: [
    //                     kella, kella, kella
    //                 ]
    //             },

    //             {
    //                 name: 'banana',
    //                 price: "99$ ",
    //                 desription: '',
    //                 image: [
    //                     kella, kella, kella
    //                 ]
    //             },

    //             {
    //                 name: 'banana',
    //                 price: "99$ ",
    //                 desription: '',
    //                 image: [
    //                     kella, kella, kella
    //                 ]
    //             },

    //         ],

    //         fruits: [
    //             {
    //                 name: 'banana',
    //                 price: '99$',
    //                 image: [kella]
    //             }
    //         ]

    //     }

    // }




    // async componentDidMount() {
    //     let res = await this.props._getCategories()
    // }
    // getcategorie = async (e) => {
    //     e.preventDefault()
    //     // this.props.setLoading(true)---------
    //     let res = await this.props._getCategories({})

    // }

    // async componentDidMount() {
    //     let res = await this.props._getItems()
    //   }
    //   getitem = async (e) => {
    //     e.preventDefault()
    //     // this.props.setLoading(true)
    //     let res = await this.props._getItems({
    
    //     })
    
    //     // this.props.setLoading(false)--------
    //   }
    async componentDidMount() {
        let res = await this.props._getItems()
      }
      getitem = async (e) => {
        e.preventDefault()
        // this.props.setLoading(true)
        let res = await this.props._getItems({
    
        })
    }




    render(props) {
    // console.log(this.props.items)
    console.log(this.props.items)

        // const Home = (props) => {
        return (

            <View style={styles.container}>
                {/* <View style={{ borderRadius:13,flexDirection:"row",backgroundColor:'#f5f8fa', flex:0.25,  width: '90%', alignSelf: 'center', 
          alignItems:'center',paddingHorizonta:20}}> */}
                <View style={{ alignSelf: 'center', justifyContent: 'center', paddingTop: 40, }}>
                    <Image
                        source={require('../../assets/parrot.png')} />
                </View>

                <View style={styles.search}>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput
                        placeholder='Search Store'>
                    </TextInput>
                    {/* </View> */}
                </View>
                <ScrollView>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', paddingTop: 10 }}>
                        {/* <Carousal active='#000' inActive='#D9D9D9' height={100} images={[require('../../assets/home.jpeg'), require('../../assets/home.jpeg'), require('../../assets/home.jpeg')]} /> */}
                        <Image
                        source={require('../../assets/home.jpeg')} />

                    </View>

                    <View style={{
                        width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',
                        paddingTop: 10,}} >

                        <Text style={{ fontSize: 25, fontWeight: 'bold',textAlignVertical:"top",paddingHorizontal:10 }}>Best Selling</Text>
                        
                    </View>
                    
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between",paddingHorizontal:20 }}>
                   
                    

                        {/* {this.state.food.map((item, index) =>

                            <Card navigation={this.props.navigation} item={item} key={index} />

                        )} */}
                        

                        {
                           this.props.items.map((item, index) => 

                           <Card navigation={this.props.navigation} item={item} key={index}    />
                           
                           )
                       }
                        
                    </View>
                    <View style={{
                        width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',
                        paddingTop: 10
                    }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Best Selling</Text>
                        <TouchableOpacity><Text style={{ color: '#59C32F', fontSize: 15 }}>See all</Text></TouchableOpacity>
                    </View>
                    <ScrollView style={{ flexGrow: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {/* <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View> */}
                        {
                           this.props.items.map((item, index) => 

                           <Card navigation={this.props.navigation} item={item} key={index}    />
                           
                           )
                       }
                    </ScrollView>
                    <View style={{
                        width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',
                        paddingTop: 10
                    }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Groceries</Text>
                        <TouchableOpacity><Text style={{ color: '#59C32F', fontSize: 15 }}>See all</Text></TouchableOpacity>
                    </View>
                    <ScrollView style={{ flexGrow: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {/* <View style={{ paddingHorizontal: 10 }}>
                            <CardSec />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <CardSec />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <CardSec />
                        </View> */}
                    </ScrollView>
                    <ScrollView style={{ flexGrow: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {/* <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Card navigation={this.props.navigation} />
                        </View> */}
                    </ScrollView>

                </ScrollView>
                <BottomNav navigation={this.props.navigation} />
            </View>
        );
    }
};

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
// const mapState = state => {
//     return {
//         // categories: state.appReducer.categories,
//         // items: state.appReducer.items,
//         items: state.appReducer.items,
//     }
// }
// const mapDispatch = dispatch => {
//     return {
//         _getCategories: () => dispatch(_getCategories()),
//         _getItem: () => dispatch(_getItems()),
//     }
// }

// export default connect(mapState, mapDispatch)
const mapState = state => {
    return {
        // logged: state.authReducer.logged,
        // items: state.appReducer.items,
        categories: state.appReducer.categories,
        items: state.appReducer.items,

    }
}
const mapDispatch = dispatch =>{
    return{
        // _getItem: () => dispatch(_getItems()),
        // setLoading: (bol) => dispatch(_setLoading(bol)),
        _getCategories: () => dispatch(_getCategories()),
        _getItems: () => dispatch(_getItems())

    }
}
export default connect(mapState,mapDispatch)(Home)