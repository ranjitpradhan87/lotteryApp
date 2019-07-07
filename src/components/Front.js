import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar ,
    TouchableOpacity 
} from 'react-native';
import LoginForm from '../components/LoginForm';
import {Actions} from 'react-native-router-flux';
export default class Logo extends Component<{}> {
    izijackpot() {
        Actions.izijackpot()
    }
    maxjackpot() {
        Actions.maxjackpot()
    }
    izipizi() {
        Actions.izipizi()
    }
	render(){
		return(
        <View style={styles.container}>
            <View style={styles.iziPizi}>
            <TouchableOpacity onPress={this.izipizi}><Text style={styles.logoText}>Izi Pizi</Text></TouchableOpacity>
            </View>
            <View style={styles.iziJackpot}>
            <TouchableOpacity onPress={this.izijackpot}><Text style={styles.logoText}>Izi Jackpot</Text></TouchableOpacity>
            </View>
            <View style={styles.jackpotMax}>
            <TouchableOpacity onPress={this.maxjackpot}><Text style={styles.logoText}>Jackpot Max</Text></TouchableOpacity> 
            </View>
        </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logoText : {
    color:'#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent:'center',

  },
  iziPizi: {
    width: 100,
    height : 110,
    marginHorizontal: 5,
    backgroundColor:'rgba(255, 255,255,0.2)',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex: 0.8,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  iziJackpot: {
    width: 100,
    height : 110,
    marginHorizontal: 5,
    backgroundColor:'rgba(255, 255,255,0.2)',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex: 0.8,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  jackpotMax: {
    width: 100,
    height : 110,
    marginHorizontal: 5,
    backgroundColor:'rgba(255, 255,255,0.2)',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex: 0.8,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap'
  }
});