import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert, Dimensions  } from 'react-native';
import Constants from 'expo-constants';
import COLORS from '../../consts/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
  


const HomeScreen= ({ navigation }) => {
  const [username, setText]=useState('');
  const [password, setText1]=useState('');
  
  return(
    <SafeAreaView style={styles.container}>
  
     <ImageBackground
    style= {{flex:1,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
               
      }}
      source={require('../../assets/bscreen.jpg')
      }>


    <View style={styles.paddingContainer}>
    <TextInput
     style={styles.input}
    placeholder='Email or Username'
    onChangeText={username=> setText(username)}
    defaultValue={username}
    returnKeyType="next">
    </TextInput>
    
   
    <TextInput 
    placeholder='Password'
    secureTextEntry
     style={styles.input}
     onChangeText={password=> setText1      (password)}
    defaultValue={password}
    returnKeyType="go">
    </TextInput>

    <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
      var uname=username;
      var pword=password;

      if(uname=="Akalanka" && pword=="abc123"){
        Alert.alert('successfully logged in!!');
        navigation.navigate('Home');
      }
      else{
        Alert.alert("Incorrect username or Password");
      }
    }}>
    <Text style={styles.buttonText}>Login</Text>
    

    <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
  
    </TouchableOpacity>
 
     </TouchableOpacity>
    </View>
    
    </ImageBackground>
</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:COLORS.grey,
    flex:4
    
    

  },
  paddingContainer :
  {
    padding :20
  },

  input:{
    height :40,
    backgroundColor:COLORS.light,
    color :'#FFF',
    marginBottom:20,
    fontSize:20,
    paddingHorizontal:60
  },
  buttonContainer :{
    backgroundColor:'#2980b9',
    paddingVertical:15
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:15,
  }
});
export default HomeScreen;