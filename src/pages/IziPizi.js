import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

 static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#354247"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  login() {
    Actions.login()
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>hhh</Text>
      </View> 
      )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#6F9000',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
  signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }
});
