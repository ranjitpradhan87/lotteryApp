import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../components/Logo';
import Front from '../components/Front';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {
  state = {
      'username': '',
      'userId':''
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        this.setState({ username: value.name });
      }
      else {
        this.setState({ username: "Robert V" });
      }
    } catch(e) {
      
    }
  }
  login() {
    Actions.login()
  }
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Front type="Login"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Please signin to play?</Text>
					<TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> Signin</Text></TouchableOpacity>
				</View>
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
