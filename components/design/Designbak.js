import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,TouchableHighlight
} from 'react-native';
import SearchBar from '../index/SearchBar';
import Swiper from 'react-native-swiper';
import Slide from './Slide';
import Resolution from "../common/Resolution";


var jsonData = require('../../json/designerList.json').data;

const styles = {
    wrapper: {
        alignItems:'center',
        justifyContent:'center'
    }
}


export default class Design extends Component {
    constructor (props) {
        super(props)
        this.state = {
            pre:jsonData.length-1, next:1
        }
        this.loadHandle = this.loadHandle.bind(this)
    }

    loadHandle (i) {
        let pre = i==0?(jsonData.length-1):(i-1);
        let next = (i==jsonData.length-1)?0:(i+1);
        this.setState({
            pre,next
        })
    }

    render() {
        return (
            <Resolution.FixWidthView>
                <SearchBar/>
                <View style={{flex:1,alignItems:'center',justifyContent:'space-around',marginBottom:0}}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{fontSize:40,}}>{jsonData.length}位设计师为您制定专属您的美</Text>
                    </View>
                    <View style={{width:750,flexDirection:'row',alignItems:'center'}}>
                        <View style={{zIndex:10, transform: [{scale:0.8}]}}>
                            <Slide designer={jsonData[this.state.pre]} />
                        </View>
                        <View style={{width: 480, height:830, zIndex:100, marginLeft:-345}}>
                            <Swiper style={styles.wrapper} onIndexChanged = {this.loadHandle} showsPagination={false}>
                                {
                                    jsonData.map((item, i) =>
                                            <Slide designer={item} key={i} i={i} navigation={this.props.navigation}/>)
                                }
                            </Swiper>
                        </View>
                        <View style={{zIndex:10, transform: [{scale:0.8}], marginLeft:-345}}>
                            <Slide designer={jsonData[this.state.next]} />
                        </View>
                    </View>
                </View>
            </Resolution.FixWidthView>
        )
    }
}

