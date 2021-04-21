import React, { Profiler } from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs,View ,ActivityIndicator,Text} from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
// import * as Font from 'expo-font'
import Load from "./src/screen/Load";
import Start from './src/screen/Start';
import Login from './src/screen/Login';
import Registration from './src/screen/Registration';
import Forgetpass from './src/screen/Forgetpass';
import SuccessfulRegister from './src/screen/SuccessfulRegister';
import Home from './src/screen/Home';
import Card from './src/component/Card';




 
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
               initialRouteName="Home"    headerMode='none' >
               <Stack.Screen name="Load" component={Load}/>
             <Stack.Screen name="Start" component={Start}/>
             <Stack.Screen name="Login" component={Login} />
             <Stack.Screen name="Registration" component={Registration} />
             <Stack.Screen name="Forgetpass" component={Forgetpass} />
             <Stack.Screen name="SuccessfulRegister" component={SuccessfulRegister} />
             <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="Card" component={Card} />
           
            
           
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