import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar ,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Front';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  home() {
      Actions.home()
  }
  izijackpotfinal() {
      Actions.izijackpotfinal()
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(25)).map((v, i) => {
      return { id: i+1 };
    });
    that.setState({
      dataSource: items,
    });
  }
 static navigationOptions = {
    title: "Izi Jackpot",
    headerStyle: {
      backgroundColor: "#354247"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
	render() {

    var jackpotNumbers = [];


		return(
      <View style={styles.container}>
        <Text style={styles.logoText}>You need to spent 15 tokens to play this game. Do you want to move forward ?</Text>
         <View style={styles.btncontainer}>
           <TouchableOpacity style={styles.button} onPress={this.home} >
             <Text style={styles.buttonText}>Cancel</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={this.izijackpotfinal} >
             <Text style={styles.buttonText}>Submit</Text>
           </TouchableOpacity>
         </View>
      </View>

			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#6F9000',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  btncontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'    
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
  },
  iziPizi: {
    width: 55,
    padding: 15,
    marginHorizontal: 5,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  },
  logoText : {
    color:'#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: 20
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    width: '40%',
    height: 60,
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});
