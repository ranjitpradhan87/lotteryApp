import React from 'react';
import { Button, Image, Platform, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import Login from './src/pages/Login';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./lotterylogo.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      ),
    };
  };

  render() {
    return (
      <View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Login', {
              itemId: 86,
              otherParam: 'Go Back',
            })
          }}
        />

        <Button
          title="Izi-pizi"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Izipizi', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#009D3D"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="MegaMillion"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#FFED00"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Power Ball"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Powerball', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#E30613"
        />
        </View>
      </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
          title="Izi-pizi"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Izipizi', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#009D3D"
        />
        </View>

        <View style={styles.buttonContainer}>
        <Button
          title="MegaMillion"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#FFED00"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Power Ball"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Powerball', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#E30613"
        />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
        <Text h3>ANNUITY</Text>
        <Text style={{fontSize: 40,fontWeight: 'bold'}}>$45 Million</Text>
        <Text h3>CASH</Text>
        <Text style={{fontSize: 30,fontWeight: 'bold'}}>$29 Millions</Text>
        <Text h3>NEXT DRAWING</Text>
        <Text style={{fontSize: 20,fontWeight: 'bold'}}>2 Hours 39 Minutes</Text>
      </View>
      </View>
    );
  }
}

class PowerballScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
          title="Izi-pizi"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Izipizi', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#009D3D"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="MegaMillion"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#FFED00"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Power Ball"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Powerball', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#E30613"
        />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
        <Text style={{fontSize: 40,fontWeight: 'bold'}}>Power Ball</Text>
 
      </View>
      </View>
    );
  }
}

class IzipiziScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
          title="Izi-pizi"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Izipizi', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#009D3D"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="MegaMillion"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#FFED00"
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Power Ball"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Powerball', {
              itemId: 86,
              otherParam: 'Go Back',
            });
          }}
          color="#E30613"
        />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
        <Text style={{fontSize: 40,fontWeight: 'bold'}}>Izi-pizi</Text>
      </View>
      </View>
    );
  }
}
class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={styles.LoginPage}>
        <View style={styles.LoginContainer}>
          <View>
          <Image
            source={require('./lotterylogo.png')}
            style={{ width: 140, height: 140 }}
          />
          
          </View>
        <View style={styles.LoginboxContainer}>
          <TextInput style={styles.InputStyle} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"/>
          <TextInput style={styles.InputStyle} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password"/>
          <TouchableOpacity><Text style={styles.LoginButton}>Login</Text></TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Izipizi: {
      screen: IzipiziScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Powerball: {
      screen: PowerballScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bodyContainer: {
    flex: 1,    
  },
  buttonContainer: {
    flex: 1,
    width: '40%',
    height: '30%'
  },
  button: {
      padding: 20,
      fontSize: 15,
      fontFamily: "arial",
      width: 400,
      height: 40,
      textAlign: "center"
    },
  LoginContainer: {
      flex:1,
      alignItems: "center",
      justifyContent: "center"
  },
  Logotext: {
    fontSize: 18,
    color: '#DDDDDD',
  },
  InputStyle: {
    width: 300,
    backgroundColor: "rgba(255,233,233, 0.7)",
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 25,
    height: 50
  },
  LoginButton: {
    color: '#FFFFFF',
    backgroundColor: "#f4511e",
    fontSize: 16,
    fontWeight: '500',
    height:50,
    alignItems: "center"
  },
  LoginPage: {
    backgroundColor: "#f4511e",    
  },
  LoginboxContainer: {
    marginTop: '30%',
  }
});
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}