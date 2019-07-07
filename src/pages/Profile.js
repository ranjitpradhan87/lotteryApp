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
import {Actions} from 'react-native-router-flux';
export default class Profile extends Component {
  home() {
      Actions.home()
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Robert Vadra</Text>
              <Text style={styles.info}>Total Token: 30</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
             <TouchableOpacity style={styles.buttonContainer} onPress={this.home} >
               <Text style={styles.buttonText}>Play Now</Text>
             </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#6F9000",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#6F9000",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#6F9000",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#6F9000",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#6F9000",
  },
  button: {
    width:300,
    backgroundColor:'#6F9000',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    width: '40%',
    height:60
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});