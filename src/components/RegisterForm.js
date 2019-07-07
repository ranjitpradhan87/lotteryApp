import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class RegisterForm extends Component<{}> {
  login() {
    Actions.login()
  }
  // For store the user data
  constructor(props){
      super(props)
      this.state = {
        userName:"",
        userEmail:"",
        userPassword:""
      }
  }
  userRegister = () => {
    const {userName} = this.state;
    const {userEmail} = this.state;
    const {userPassword} = this.state;

    fetch('http://mojse.com/wetest/createuser.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          username: userName,
          email: userEmail,
          password: userPassword,
        })      
    })
    .then((response) => response.json())
      .then((responseJson) =>{
        alert(responseJson);
        this.login;
      })
      .catch((error)=>{
        console.error(error);
    });
  }
	render(){
		return(
			<View style={styles.container}>

            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Name" 
              placeholderTextColor = "#ffffff"
              onChangeText= {userName => this.setState({userName})}
            />
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Email" 
              placeholderTextColor = "#ffffff"
              keyboardType="email-address"
              onChangeText= {userEmail => this.setState({userEmail})}
            />
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Password" 
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText= {userPassword => this.setState({userPassword})}
            />
           <TouchableOpacity style={styles.button} onPress={this.userRegister}>
             <Text style={styles.buttonText} >Register</Text>
           </TouchableOpacity>     
  		</View>
			)
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