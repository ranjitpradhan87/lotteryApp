import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import  { createStackNavigator }  from 'react-navigation';
export default class LoginForm extends Component<{}> {

  constructor(props){
    super(props)
    this.state={
      userEmail:'',
      userPassword:'',
      validating: false
    }
  }

  login = () =>{
    this.state.validating = true;
    const {userEmail,userPassword} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(userEmail==""){
      //alert("Please enter Email address");
      this.setState({email:'Please enter Email address'})
      
    }
    
    else if(reg.test(userEmail) === false)
    {
    //alert("Email is Not Correct");
    this.setState({email:'Email is Not Correct'})
    return false;
      }

    else if(userPassword==""){
    this.setState({email:'Please enter password'})
    }
    else{
    
    fetch('http://mojse.com/wetest/userlogin.php',{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        email: userEmail,
        password: userPassword
      })
      
    })
    .then((response) => response.json())
     .then((responseJson)=>{
        let data = responseJson.data;
        if (this.saveToStorage(data)){
          this.setState({
            validating: false
          });
          /* Redirect to home page */
          Actions.profile()
        } else {
          alert("Wrong Login Details");
        }

     })
     .catch((error)=>{
     console.error(error);
     });
    }
    
    
    Keyboard.dismiss();
  }
	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={userEmail => this.setState({userEmail})}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={userPassword => this.setState({userPassword})}
              />  
           <TouchableOpacity style={styles.button} onPress={this.login} >
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>     
  		</View>
			)
	}

  async saveToStorage(userData){
    if (userData) {
      await AsyncStorage.setItem('user', JSON.stringify({
          isLoggedIn: true,
          authToken: userData.auth_token,
          id: userData.user_id,
          name: userData.user_login
        })
      );
      return true;
    }
 
    return false;
  }
}


const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});
AppRegistry.registerComponent('login', () => login);