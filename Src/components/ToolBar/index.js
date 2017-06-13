import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'

let bgimage = require('../../assets/Background.png');
let logoimage = require('../../assets/Graduation-Cap-@2x.png');
import {Metrics} from '../../assets/metrics';

class ToolBar extends Component {
    render() {
        return (
            <View style={{
                paddingBottom : 40
            }}>
            <Image style={{
                width : Metrics.FULL_WIDTH,
                height : Metrics.FULL_HEIGHT / 5,
            }}
            source = {bgimage}
            >
            <View style={{
                width : Metrics.FULL_WIDTH,
                height : Metrics.FULL_HEIGHT / 5,
                backgroundColor : 'rgba(1,1,1,0.4)',
                justifyContent : 'center',
                alignItems : 'center',
                borderBottomColor : '#455157',
                borderBottomWidth : 10
            }}>
                <Text style={{
                    fontSize : 20,
                    color : 'white',
                    fontWeight : '500'
                }}>{this.props.label}</Text>

                
            </View>
            </Image>
            <View style={{
                    width : 60,
                    backgroundColor : 'white',
                    position : 'absolute',
                    padding : 10,
                    elevation : 3,
                    top : 80,
                    left : 20
                }} >
                    <Image style={{
                        width : 40,
                        height : 40,
                    }} 
                    source = {logoimage}
                    />
            </View>
            </View>
        );
    }
}

export default ToolBar;