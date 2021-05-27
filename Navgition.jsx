import React, {Profiler} from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import * as Font from 'expo-font';
import First from "./src/screen/First";
import Load from "./src/screen/Load";
import Start from './src/screen/Start';
import Login from './src/Auth/Login';
import Registration from './src/Auth/Registration';
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
import { connect } from 'react-redux';
 import Setting from "./src/screen/Setting";



const Stack = createStackNavigator();


class AppNavigition extends React.Component {

    // state = {
    //     fontsLoaded: false
    //   }

    // async componentDidMount() {
    //     await Font.loadAsync({
    //       Montserrat: require('./assets/fonts/Montserrat-Black.ttf'),
    //       Poppins: require('./assets/fonts/Poppins-Light.ttf'),
    //       Poppin: require('./assets/fonts/Poppins-Bold.ttf'),
    //       sp: require('./assets/fonts/sf-ui-display-bold-58646a511e3d9.otf'),
    //       sf: require('./assets/fonts/sf-ui-display-semibold-58646eddcae92.otf'),
    //       Rock: require('./assets/fonts/RockSalt-Regular.ttf'),
    
    //     });
    //     this.setState({ fontsLoaded: true });
    //   }

      AuthStack = () => {
        return (
            <Stack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}>
               <Stack.Screen name="First" component={First} />
               <Stack.Screen name="Load" component={Load} />
               <Stack.Screen name="Start" component={Start} />
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Registration" component={Registration} />
               <Stack.Screen name="Forgetpass" component={Forgetpass} />
               <Stack.Screen name="SuccessfulRegister" component={SuccessfulRegister} />
            </Stack.Navigator>
        )
    }
    AppStack = () => {
        return (
            <Stack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Find" component={Find} />
         
            <Stack.Screen name="AddItem" component={AddItem} />
            {/* <Stack.Screen name="Next" component={Next} /> */}
            <Stack.Screen name="Categories" component={Categories} />
            
            <Stack.Screen name="MyCart" component={MyCart} />
            
            <Stack.Screen name="Favourite" component={Favourite} />
            
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
            
            <Stack.Screen name="Successful" component={Successful } />
            <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
        )
    }

    render() {
        return (
            <NavigationContainer >
                {
                    this.props.logged ?
                        this.AppStack()
                        :
                        this.AuthStack()
                }
            </NavigationContainer>
        )
    }
}
const mapState = state => {
    return {
        logged: state.authReducer.logged,
    }
}

export default connect(mapState, null)(AppNavigition);
