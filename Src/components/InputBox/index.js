import React, { Component } from 'react';
import {View,TextInput,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions';

class InputBox extends Component {
    constructor(){
        super();
        this.state = {
            text : ''
        }
    }

    render() {
        return (
            <View>
            <TextInput
                underlineColorAndroid= 'rgba(1,1,1,0)'
                //autoFocus = {true}
                style={{
                height : 35,
                justifyContent : 'center',
                alignItems : 'center'
                }}
                placeholder="0"
                placeholderTextColor = 'rgba(1,1,1,0.2)'
                onChangeText={(text) => {
                    this.setState({text})
                    this.props.UpdateColCount(text)
                    }}
                value={this.state.text}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, actions)(InputBox)