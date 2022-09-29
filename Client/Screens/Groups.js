import {useState,useContext} from 'react';
import { Text, View,Image,FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { StateContext } from '../App';

const AllGroups=()=>{

  return(
    
    <View
     style={styles.eachGroupText}
   
     >
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
</View>

  )
}

const  Groups=({navigation})=> {
  
  const {state,dispatch}=useContext(StateContext)
  const [myGroups,setMyGroups]= useState([])

    const saveData = async (STORAGE_KEY,result) => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, result)
        alert('Data successfully saved')
      } catch (e) {
        alert('Failed to save the data to the storage')
      }
    }

    useEffect(()=>{
        fetch("/allGroups",{
          headers:{
            "Authorization":"Bearer " + state.jwt
          }
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setMyGroups(result.groups);
            saveData("state",data)
            dispatch({type:"USER",payload:result})

        })
        },[])


  return (
    <View style={{ flex: 1 }}>
      <Text  style={styles.headText}
      > overall you owe 500</Text>
      
      <View style={styles.allGroupsText}>
        <FlatList
        data={myGroups}
        renderItem={({item}) => 
        <TouchableOpacity
          onPress={() => navigation.navigate('group')}
         >
          <AllGroups/>
         </TouchableOpacity>  
        }/>

      </View>
    </View>
    );
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
      flexDirection:"row",
      margin:5,
      height: 100 
    },
    image:{
      width: 100, 
      height: 100
    },
    groupName:{
      fontWeight:"bold",
      fontSize:15
    }
  })

  export default Groups