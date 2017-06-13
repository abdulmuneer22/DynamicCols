import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import {Metrics} from '../../assets/metrics';
import Toggle from '../Toggle';
import InputBox from '../InputBox';
import {connect} from 'react-redux'
import * as actions from '../../redux/actions';

class SettingsCard extends Component {

    constructor(){
        super();
        this.state = {
            colCount : 0,
            showCols : false
        }
    }

    _renderColumns(){
        let count = this.state.colCount;
        let colData = [];
        for(let i = 0 ; i < count ; i ++ ) {
            colData.push(
                <View key={i} style={{
                    flex : 1,
                    margin : 5,
                    backgroundColor : 'white',
                    elevation : 3
                }}>
                    {/*<Text>{i+1}</Text>*/}
                </View>
            );
        }
        return (
        <View style={{
            flexDirection : 'row',
            height : 400,
            
        }}>
            {colData}
        </View>)
    }

    componentWillReceiveProps(next){
        console.log(next)
        this.setState({
            colCount : next.ColCount,
            showCols : next.ColView
        })
    }

    render() {
        console.log("col count" , this.props)
        return (
            <ScrollView style={{
                width : Metrics.FULL_WIDTH * 0.95,
                backgroundColor : 'white',
                alignSelf : 'center',
                elevation : 3
            }}>
                <View style={{
                    alignItems : 'center',
                    justifyContent : 'center',
                    borderBottomWidth : 1,
                    borderBottomColor : 'rgba(1,1,1,0.1)',
                    padding : 10
                }}>
                    <Text style={{
                        color : '#b1b1b1',
                        fontSize : 14,
                        fontWeight : '500'
                    }}>
                        SETTINGS
                    </Text>
                </View>


                <View style={Styles.row}>
                    <View style={{
                        flex : 1
                    }}>
                        <Text style={Styles.regularLabel}>Show columns below</Text>
                    </View>
                    <Toggle />
                </View>
                
                <View style={Styles.row}>
                    <View style={{
                        flex : 1
                    }}>
                    <Text style={Styles.regularLabel}>Number of columns</Text>
                    </View>
                    <InputBox />
                </View>
                

                <View>
                {
                    this.state.colCount > 0 && this.state.showCols ?
                    this._renderColumns()
                    :
                    <View/>

                }
                </View>

            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    row : {
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : 1,
        borderBottomColor : 'rgba(1,1,1,0.1)',
        padding : 15,
        flexDirection : 'row'
    },
    regularLabel : {
        fontSize : 18,
        color : '#222222'
    }

})

const mapStateToProps = (state) => {
    return {
        ColCount: state.ColCountReducer,
        ColView : state.ColViewReducer
    }
}

export default connect(mapStateToProps, actions)(SettingsCard)
