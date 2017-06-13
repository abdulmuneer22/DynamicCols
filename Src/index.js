import React, { Component } from 'react';
import {View,Text} from 'react-native'
import Home from './containers/Home';
import configureStore from './redux/store/configureStore'
const store = configureStore();
import { Provider } from 'react-redux';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

