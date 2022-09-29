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




 
export default function Signup({navigation}) {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const PostData=()=>{
    fetch("/signup",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              name,
              password,
              email
          })
    }).then(res=>res.json())
    .then(data=>{
     if(data.error){
       alert(data.error)
     }
     else{
       navigation.navigate("welcome")
     }
      alert(data)
    }).catch(err=>console.log(err))
}

 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logoWhite.jpeg")} />
 
      <StatusBar style="auto" />


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={name}
        />
      </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>

      
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

 
      <TouchableOpacity 
        onPress={() => PostData()}
      style={styles.loginBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
         onPress={() => navigation.navigate('welcome')}
      style={styles.backBtn}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
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
  },
   signupText:{
    color:"white"
  },
 
  inputView: {
    backgroundColor: "#E2DCC8",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  back:{
    color:"#0F3D3E"
  },

 
  backBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderColor:"#0F3D3E",
    borderWidth: 2

  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0F3D3E",
  },
});