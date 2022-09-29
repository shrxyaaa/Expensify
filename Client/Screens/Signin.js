import { StatusBar } from "expo-status-bar";
import React, {useContext, useState } from "react";
import { StateContext } from '../App';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
 
export default function Signin({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {state,dispatch}=useContext(StateContext);


  const saveData = async (STORAGE_KEY,result) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, result)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const PostData=()=>{
    fetch("/signin",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              password,
              email
          })
    }).then(res=>res.json())
    .then(data=>{
     if(data.error){
       console.log(data.error)
     }
     else{
        saveData("state",data)
        dispatch({type:"STATE",payload: data})

        navigation.navigate("mytabs")
     }
     console.log(data)
    }).catch(err=>console.log(err))
}


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logoWhite.jpeg")} />
 
      <StatusBar style="auto" />

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
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
       onPress={() => navigation.navigate('mytabs')}
      style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity 
         onPress={() => PostData()}
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
  loginText:{
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