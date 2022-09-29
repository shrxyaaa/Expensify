import {useState} from 'react';
import { Text, View,Image,FlatList, StyleSheet ,SafeAreaView, Button, Dimensions, ScrollView} from 'react-native';
const win = Dimensions.get('window');
const friends = ["Shreya","teju","akshita","asfiya","anushka","Shreya","teju","akshita","asfiya","anushka"];



const Friend=(props)=>{
return (
  <View style={styles.friend}>
  <Image
source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
style={styles.FriendsImage}
/>
  <Text style={{padding:15}}>{props.name}</Text>
</View>
)

}


const  Group=()=> {
  
  const [myGroup, setMyGroups] = useState([1]);
  
  return(
    <ScrollView style={styles.eachGroupText}>
      <Image
  style={{
    width: win.width,
    height: win.width/4,
    resizeMode: "contain",
    borderWidth: 1,
    borderRadius: 20,
  }}
  source={require("../assets/logoWhite.jpeg")}
  resizeMode="stretch"
/>
  <Image
  source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
  style={styles.image}
  />
  
  <View style={{padding:10}}>
    <Text 
    style={styles.groupName}
    >GroupNAME </Text>
    <Text> you are owed </Text>
    <Text> overall you owe </Text>
    <Text> you are owed </Text>
  </View>
  <View style={styles.buttons}>
    <Button title="Settle Up" color='#000000'/>
    <Button title="Total"/>
  </View>
  <View>
    <Text> Overall you are owed </Text>
    <View style={styles.allFriendsText}>
      
    <FlatList
        data={friends}
        renderItem={({item}) => 
        <Friend name={item}/>
       }
      />  
    </View>
  </View>
  </ScrollView>
  )

}


  const styles=StyleSheet.create({
    headText:{
      fontWeight:"bold",
      fontSize:25,
      padding:15
    },
    allGroupsText:{
      flex: 1, 
      backgroundColor:'#F1F1F1' 
    },
    eachGroupText:{
      padding:4,
      flexDirection:"column",
      margin:5,
      height: 100 
    },
    image:{
      width: 100, 
      height: 100
    },
    FriendsImage:{
      width:50,
      height: 50
    },
    groupName:{
      fontWeight:"bold",
      fontSize:15
    },
    buttons:{
      flexDirection:"row",
      justifyContent: 'space-around',
      margin: 10
    },
    eachButton:{
      padding:2,
      color:'#FFA500'
    },
    allFriendsText:{
      padding: 10,
      flexDirection:"row",
      backgroundColor:'#F1F1F1' 
    },
    friend:{
       flexDirection:"row"
    }
  })

  export default Group