import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
					<LoginForm />
			</Provider>
		);
	}
} 

export default App;
