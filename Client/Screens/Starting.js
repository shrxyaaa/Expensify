import { StatusBar } from "expo-status-bar";
import React, { useState,useContext,useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StateContext } from "../App"; 

export default function Starting({navigation}) {
  
    const {state,dispatch}= useContext(StateContext)

    
    const readData = async () => {
      try {
        const value = await AsyncStorage.getItem('state');
    
        if (value !== null) {
          dispatch({type:"STATE", payload:value})
         
          navigation.navigate("mytabs")
        }
        else{
          navigation.navigate("welcome")
        }
      } catch (e) {
        alert('Failed to fetch the input from storage');
      }
    };
  
  
   

    useEffect(() => {
        readData()
      }, []);
    
   

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logoWhite.jpeg")} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 100,
     borderColor:"#0F3D3E",
     borderWidth:2,
    height:150,
    width:350
  }
});