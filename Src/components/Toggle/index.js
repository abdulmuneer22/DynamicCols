import React, { Component } from 'react';
import {View,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux'

class Toggle extends Component {
    constructor(){
        super();
        this.state = {
            toggleOn : false
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback
            onPress = {() => {
                this.setState({ toggleOn : !this.state.toggleOn})
                this.props.ToggleColView(!this.state.toggleOn)
                }}
            >
            <Icon
            name={this.state.toggleOn ? "toggle-on" : "toggle-off"}
            size={35}
            color = '#ef6c00'
            />
            </TouchableWithoutFeedback>
        );
    }
}

export default connect(null, actions)(Toggle)
