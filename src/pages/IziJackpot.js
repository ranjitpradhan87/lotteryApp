import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar ,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  PropTypes,
  Image,
  Alert,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Front';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      pressed: false,
      selected_category: '',
      selected_1: '',
      black: '',
      selectItems: [],
      selectedItems: [],
      firstNum:'',
      secondNum:'',
      thirdNum:'',
      fourthNum:'',
      fifthNum:''
    };
  }
  _handleCategorySelect = (index) => { 
    this.setState({selected_category: index}); 
    this.state.selectedItems.push(index);
    switch(this.state.selectedItems.indexOf(index)) {

      case 0:
        this.setState({firstNum: index+1});
        break;
      
      case 1:
        this.setState({secondNum: index+1});
        break;

      case 2:
        this.setState({thirdNum: index+1});
        break;

      case 3:
        this.setState({fourthNum: index+1});
        break;

      case 4:
        this.setState({fifthNum: index+1});
        break;

      default:
        this.setState({fifthnum: ""});
    
    }

  }
  _clearAll = () => {
    this.setState({firstNum: ""});
    this.setState({secondNum: ""});
    this.setState({thirdNum: ""});
    this.setState({fourthNum: ""});
    this.setState({fifthNum: ""});
    this.setState({selectedItems: []});
  }
  _isSelected = (index) => {
    return this.state.selectedItems.indexOf(index) ? "select" : "notselect";
  }
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  }
  izijackpotconfirm() {
      Actions.izijackpotconfirm()
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(25)).map((v, i) => {
      return { id: i+1, index: i, status: this._isSelected(i) };
    });

    let selectitems= Array.apply(null, Array(5)).map((v, i) => {
      return { id: i+1, index: i, num: '' };
    });
    that.setState({selectItems: selectitems}); 
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
    let btn_class = this.state.black ? "NormalSet" : "SelectedSet";
    const textColor = this.props.selected ? 'red' : 'black';
    return(
      <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={{ flex: 1, flexDirection: 'row', margin: 1 }}>
            <TouchableOpacity
              //onPress={() => this._handleCategorySelect(item.index)}
              style={ styles.topPressed }
              underlayColor={'gray'}
            >
                <Text style={styles.buttonText}>{this.state.firstNum}</Text></TouchableOpacity>
            <TouchableOpacity
              //onPress={() => this._handleCategorySelect(item.index)}
              style={ styles.topPressed }
              underlayColor={'gray'}
            >
                <Text style={styles.buttonText}>{this.state.secondNum}</Text></TouchableOpacity>
            <TouchableOpacity
              //onPress={() => this._handleCategorySelect(item.index)}
              style={ styles.topPressed }
              underlayColor={'gray'}
            >
                <Text style={styles.buttonText}>{this.state.thirdNum}</Text></TouchableOpacity>
            <TouchableOpacity
              //onPress={() => this._handleCategorySelect(item.index)}
              style={ styles.topPressed }
              underlayColor={'gray'}
            >
                <Text style={styles.buttonText}>{this.state.fourthNum}</Text></TouchableOpacity>
            <TouchableOpacity
              //onPress={() => this._handleCategorySelect(item.index)}
              style={ styles.topPressed }
              underlayColor={'gray'}
            >
                <Text style={styles.buttonText}>{this.state.fifthNum}</Text></TouchableOpacity>
            </View>

        </View>
        <View style={styles.cleartop}>
          <TouchableOpacity
            onPress={() => this._clearAll()}
          >
            <Text style={styles.logoText}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middlecontainertop}>
          <Text style={styles.logoText}>Please Select 5 Numbers and Submit</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          extraData={this.state}
          ref={(e) => this.items = e}
          renderItem={({item}) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <TouchableOpacity
              onPress={() => this._handleCategorySelect(item.index)}
              style={this.state.selectedItems.indexOf(item.index) >= 0 ?  
                 styles.pressed : styles.iziPizi}
              onHideUnderlay={() => {
                  this.setState({ pressed: false });
              }}
              onShowUnderlay={() => {
                  this.setState({ pressed: true });
              }}
              underlayColor={'gray'}
            >
                <Text style={styles.buttonText}>{ item.id}</Text></TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={5}
          keyExtractor={(item, index) => index}
        />

        <View style={styles.middlecontainer}>
         <TouchableOpacity style={styles.button} onPress={this.izijackpotconfirm} >
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
  topContainer: {
    textAlign: 'center',
  },
  middlecontainer: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent :'center',
    flex:1    
  },
  cleartop: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent :'center',
    flex:1,
    marginTop: 30,
    marginBottom: 0,
    top: 20    
  },
  middlecontainertop: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent :'center',
    flex:1,
    marginTop: 15,
    marginBottom: 10,
    top: 10
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
    margin: 5,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex:1
  },
  pressed: {
    width: 55,
    padding: 15,
    margin: 5,
    backgroundColor:'#1c313a',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex:1
  },
  topPressed: {
    width: 55,
    padding: 15,
    height: 60,
    marginTop: 0,
    marginHorizontal:5,
    backgroundColor:'#1c313a',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex:1
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
});
