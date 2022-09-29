import * as React from 'react';
import { Text, View,Image,FlatList, StyleSheet ,SafeAreaView, Button, Dimensions, TextInput,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

const SettleUp=()=> {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  
  return(
    <View style={styles.container}>
    <Text style={styles.headText}>Record Payment</Text>
    
    <View style={styles.paid}>
      <Image
source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
style={styles.FriendsImage}
/>
<Icon name="arrow-right" style={styles.arrow} type="entypo"/>
      <Image
source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
style={styles.FriendsImage}
/>
    </View>

    <View style={styles.friendsName}>
    <Text style={styles.friendText}>Friend Name paid you</Text>
    <Text style={styles.friendText}>friendname@gmail.com</Text>
    </View>

    <View style={styles.amount}>
    <Text style={styles.textStyle}>{'\u20B9'}</Text>
    <TextInput 
    style={styles.textInput}
    onChangeText={onChangeNumber}
  value={number}
   keyboardType='numeric'
/>
    </View>

      <TouchableOpacity 
      style={styles.loginBtn}>
        <Text style={styles.loginText}>Settle Up</Text>
      </TouchableOpacity>    

    </View>
  )

}


  const styles=StyleSheet.create({
     container: {
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
  },
    headText:{
      fontWeight:"bold",
      fontSize:25,
      padding:15
    },
    paid:{
      flexDirection:"row",
      justifyContent:'space-around',
      marginBottom: 3
    },
    FriendsImage:{
      width:50,
      height: 50
    },
    arrow:{
      size:20,
      color:"black",
      padding: 10
    },
    friendsName:{
      marginBottom: 30
    },
    friendText:{
      fontSize:15,
      textAlign:"center"
    },
    textInput:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
    },
    textStyle: {
    marginTop: 10,
    color: '#646464',
    fontSize: 30,
    padding: 5
  },
  amount:{
    flexDirection:"row",
    justifyContent:'space-around',
    marginBottom:30
  },
    loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0F3D3E",
    borderColor:"white",
    borderWidth: 2

  },
    loginText:{
    color:"white"
  }

  })

  export default SettleUp