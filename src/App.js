import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyB7qH0q5SeHuIzWspfjJi7iu9lakQOfZUQ',
			authDomain: 'employee-manager-ecd33.firebaseapp.com',
			databaseURL: 'https://employee-manager-ecd33.firebaseio.com',
			storageBucket: 'employee-manager-ecd33.appspot.com',
			messagingSenderId: '94542337368'
		};

		firebase.initializeApp(config);
	}
	
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>Initial commit</Text>
				</View>
			</Provider>
		);
	}
} 

export default App;
