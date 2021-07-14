import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import BottomNav from '../component/BottomNav';
import { AntDesign } from '@expo/vector-icons';
import Card from '../component/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardThrd from "../component/CardThrd";
import { connect } from 'react-redux';
import { _getCategories, _getItems } from '../store/middlewares/appMiddleware';

class Find extends React.Component{

    constructor(props){
     super(props)
     this.state={
         active:"",
     }
    }


    async componentDidMount(){
        await this.props._getCategories()
        await this.props._getItems()
    }
    // async componentDidMount() {
    //     let res = await this.props._getItems()
    //   }
    //   getitem = async (e) => {
    //     e.preventDefault()
    //     // this.props.setLoading(true)
    //     let res = await this.props._getItems({
    
    //     })
    // }




    render(props){
        // console.log(this.props.items)
        console.log(this.props.cat)
// const Find = (props) => {
    return (
        <View style={styles.container}>

            <View style={{ alignSelf: 'center', justifyContent: 'center', paddingTop: 40 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Categories</Text>
            </View>
            <View style={styles.search}>
                <AntDesign name="search1" size={20} color="black" />
                <TextInput
                    placeholder='Search Store'>
                </TextInput>
            </View>
            <ScrollView style={{flexGrow:0}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                      this.props.categories &&
                      this.props.categories.map((cat,index)=>
                      <TouchableOpacity onPress={()=> this.setState({active:cat.name})} key={index} style={{ padding:10,marginTop:20,borderColor:'#ACC39E',borderWidth:1,borderRadius:15,margin:10}}><Text style={{  fontSize: 15, }} >
                      {cat.name}
                  </Text></TouchableOpacity> )
                  }
                   
                {/* <View><Text style={{fontSize:20,fontWeight:"bold",paddingHorizontal:20,alignSelf:'center',paddingTop:10}}>Related Products</Text></View>
                <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between",paddingHorizontal:20 }}>
                    */}
                    

                    </ScrollView>  
                    
           <View>
               <Text style={{fontSize:18,fontWeight:"bold",paddingHorizontal:10}}>Related Products</Text>
           </View>

                  

                   <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between",paddingHorizontal:10 }}>
                        {
                            this.props.items.map((item, index) =>
                            this.state.active===item.categoryID &&
                                <Card navigation={this.props.navigation} item={item} key={index}/>

                            )
                        }


                    </View>


            
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
export default connect(mapState,mapDispatch)(Find)
