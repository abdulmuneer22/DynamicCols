import React, { Component } from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import ToolBar from '../../components/ToolBar';
import SettingsCard from '../../components/SettingsCard';

let logoimage = require('../../assets/Graduation-Cap-@2x.png');
class Home extends Component {
    render() {
        return (
            <View style={{
                backgroundColor : '#f8f8f8'
            }}>
                <ToolBar
                label="TEST APP"
                />
                <SettingsCard />
            </View>
        );
    }
}

export default Home;