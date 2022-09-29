import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Welcome({ navigation }) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logoGreen.jpeg")} />
 
      <StatusBar style="auto" />

 
      <TouchableOpacity 
         onPress={() => navigation.navigate('signin')}
      style={styles.loginBtn}>
        <Text style={styles.loginText}>log In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
         onPress={() => navigation.navigate('signup')}
      style={styles.signupBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F3D3E",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 300,
    height:150,
    width:350
  },
   signupText:{
    color:"black"
  },
   loginText:{
    color:"white"
  },

 
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
    borderColor:"white",
    borderWidth: 2

  },
  signupBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderColor:"black",
    borderWidth: 2
  }
});