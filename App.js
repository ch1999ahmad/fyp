import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs, View, ActivityIndicator, Text } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import Navgition from './Navgition';
import Store from './src/store/Store';
import { Provider } from 'react-redux';
// import * as Font from 'expo-font'
// import First from "./src/screen/First";
// import Load from "./src/screen/Load";
// import Start from './src/screen/Start';
// import Login from './src/Auth/Login';
// import Registration from './src/Auth/Registration';
// import Forgetpass from './src/screen/Forgetpass';
// import SuccessfulRegister from './src/screen/SuccessfulRegister';
// import Home from './src/screen/Home';
// import Find from './src/screen/Find';
// import AddItem from './src/screen/AddItem';
// import Categories from './src/screen/Categories';
// import MyCart from './src/screen/MyCart';
// import Favourite from './src/screen/Favourite';
// import Account from './src/screen/Account';
// import CheckOut from './src/screen/CheckOut';
// import Successful from './src/screen/Successful';
// import Seacrhlist from './src/component/Searchlist';
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
<PersistGate loading ={false} persistor={Store.persistor}>
  <Provider store={Store.store}>
    <Navgition/>
  </Provider>
</PersistGate>
     
      // :
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <ActivityIndicator size='large' color='red' />
      //   <Text>Font is loading</Text>
      // </View>
    );
  }
}
export default App;