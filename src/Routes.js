import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import IziJackpot from './pages/IziJackpot';
import IziJackpotconfirm from './pages/IziJackpotconfirm';
import IziJackpotfinal from './pages/IziJackpotfinal';
import Profile from './pages/Profile';
import MaxJackpot from './pages/MaxJackpot';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="home" component={Home} title="Home" initial={true}/>
			      <Scene key="login" component={Login} title="Login"/>
			      <Scene key="signup" component={Signup} title="Register" />
			      <Scene key="izijackpot" component={IziJackpot} title="IziJackpot" />
			      <Scene key="izijackpotconfirm" component={IziJackpotconfirm} title="IziJackpotconfirm" />
			      <Scene key="izijackpotfinal" component={IziJackpotfinal} title="IziJackpotfinal" />
			      <Scene key="profile" component={Profile} title="Profile" />
			      <Scene key="maxjackpot" component={MaxJackpot} title="MaxJackpot" />
			    </Stack>
			 </Router>
			)
	}
}