import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs, View, ActivityIndicator, Text } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
// import * as Font from 'expo-font'
import First from "./src/screen/First";
import Load from "./src/screen/Load";
import Start from './src/screen/Start';
import Login from './src/screen/Login';
import Registration from './src/screen/Registration';
import Forgetpass from './src/screen/Forgetpass';
import SuccessfulRegister from './src/screen/SuccessfulRegister';
import Home from './src/screen/Home';
import Find from './src/screen/Find';
import AddItem from './src/screen/AddItem';
import Categories from './src/screen/Categories';
import MyCart from './src/screen/MyCart';
import Favourite from './src/screen/Favourite';
import Account from './src/screen/Account';
import CheckOut from './src/screen/CheckOut';
import Successful from './src/screen/Successful';
import Seacrhlist from './src/component/Searchlist';
// import Counter from "./src/screen/Counter";

const Stack = createStackNavigator();

class App extends React.Component {

  // state = {
  //   fontsLoaded: false
  // }

  // async componentDidMount() {
  //   await Font.loadAsync({

  //     Poppins: require('./assets/fonts/Poppins-Light.ttf'),


  //   });
  //   this.setState({ fontsLoaded: true });
  // }


  render() {
    return (
      // this.state.fontsLoaded ?

      <NavigationContainer>

        <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}
          initialRouteName="First" headerMode='none' >
           <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Load" component={Load} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Forgetpass" component={Forgetpass} />
          <Stack.Screen name="SuccessfulRegister" component={SuccessfulRegister} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Find" component={Find} />
          <Stack.Screen name="AddItem" component={AddItem} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="Favourite" component={Favourite} />
           <Stack.Screen name="Account" component={Account} /> 
           <Stack.Screen name="CheckOut" component={CheckOut} /> 
          <Stack.Screen name="Successful" component={Successful}/>
          <Stack.Screen name="Seacrhlist" component={Seacrhlist}/>

          {/* <Stack.Screen name="Rapp" component={Rapp}/> */}


        </Stack.Navigator>

      </NavigationContainer>

      // :
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <ActivityIndicator size='large' color='red' />
      //   <Text>Font is loading</Text>
      // </View>
    );
  }
}
export default App;