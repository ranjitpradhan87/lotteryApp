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
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(25)).map((v, i) => {
      return { id: i+1, src: 'http://placehold.it/200x200?text=' + (i + 1) };
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
         <TouchableOpacity style={styles.button} onPress={this.home} >
           <Text style={styles.buttonText}>Accept</Text>
         </TouchableOpacity>     

        <Text style={styles.logoText}>After accept it you are deducted by 15 tokens and numbers are finlised for the ganme which you have choosen.</Text>   

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
    padding: 30
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
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});
