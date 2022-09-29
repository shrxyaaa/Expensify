import {useState, useContext} from 'react';
import { Text, View,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { StateContext } from '../App'; 



const Profile=()=>{

  const {state,dispatch}= useContext(StateContext)
  //const profile= state.user;
  return(
    <View style={styles.userProfile}>
          
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={styles.dp}
          />
          <View style={{padding:10}}>
            <Text>{profile.name} </Text>
            <Text> {profile.email }</Text>
          </View>

        </View>
  )
}

const Heading=(props)=>{

  return(
    <View style={styles.settings}>
    <Text>{props.name} </Text>
  </View> 
  )

}

const Settings=(props,{navigation})=>{
  
  return(
    <TouchableOpacity  onPress={() =>  navigation.navigate(props.link)}>
    <View  style={styles.settings}>
            <Image 
            source={{ uri: props.image}}
            style={styles.image}
            />
            <View>
              <Text>{props.name} </Text>
            </View>
          </View>
      </TouchableOpacity>
  )

}

const SettingsList=()=>{
  return(
    <View style={{ flex: 4, backgroundColor:'yellow' }}>
        <Heading name='Preferences'/>  
        <Settings 
        link= 'emailsetting'
        image='https://reactnative.dev/docs/assets/p_cat2.png'
        name='Email Settings'
        /> 
        <Settings 
        image='https://reactnative.dev/docs/assets/p_cat2.png'
        name='Device and Push notification Settings'
        /> 
        <Settings 
        image='https://reactnative.dev/docs/assets/p_cat2.png'
        name='Passcode'
        />  

        <Heading name='FeedBack'/>  
        <Settings 
        image='https://reactnative.dev/docs/assets/p_cat2.png'
        name='Rate '
        /> 
        <Settings 
        image='https://reactnative.dev/docs/assets/p_cat2.png'
        name='Contact Expensify Support'
        /> 
    </View>
  )

}


const  Account=({navigation})=> {
  
    return (
      <View style={styles.container}>
       
      
        <SettingsList/>
        <View style={styles.logOut}>
        <Image 
            source={""}
            style={styles.image}
            />
            <View >
              <Text>Log Out</Text>
            </View>
          
        </View>
  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#F1F1F1' 
    },
    dp:{ 
      width: 100, 
      height: 100
    },
    image:{
      width: 40, 
      height: 40
    },
    settings:{
      flex:1, 
      flexDirection:"row", 
      backgroundColor:'white' 
    },
    logOut:{
      flex: 2, 
      backgroundColor:'white' 
    },
    userProfile:{
      flex: 1,  
      flexDirection:"row", 
      alignItems:'center'
    }
    
  });


  export default Account;
