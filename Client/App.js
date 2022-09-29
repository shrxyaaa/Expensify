import {useContext,useReducer,createContext} from 'react';
import { Text, View,Image,FlatList } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

import Welcome from './Screens/Welcome';
import Signin from './Screens/Signin';
import Group from './Screens/Group';
import Signup from './Screens/Signup';
import MyTabs from './MyTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {initailState, reducer} from "./Reducers/UserReducer"
import Starting from './Screens/Starting';


export const StateContext= createContext()

const Stack= createNativeStackNavigator()
const MyTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
      card:"#0F3D3E"
    
    
  },
};




const Nav=()=>{
  
 
  
    return(
      <NavigationContainer theme={MyTheme} >
      <Stack.Navigator  initialRouteName='starting'
       screenOptions={{
        headerShown: false
      }}
      >  
        <Stack.Screen name="starting" component={Starting}></Stack.Screen>
        <Stack.Screen name="welcome" component={Welcome}></Stack.Screen>
           <Stack.Screen name="signin" component={Signin}></Stack.Screen>
           <Stack.Screen name="signup" component={Signup}></Stack.Screen>
          <Stack.Screen name="mytabs" component={MyTabs}></Stack.Screen>
          <Stack.Screen name="group" component={Group}></Stack.Screen>
       
   </Stack.Navigator>
    </NavigationContainer>
   
    )
  }

export default function App() {
 
const [state,dispatch]= useReducer (reducer,initailState)

    return (
      <StateContext.Provider value={{state,dispatch}}>
     <Nav/>
    </StateContext.Provider>
    );

}
