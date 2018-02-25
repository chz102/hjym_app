import React, { Component } from 'react';
import {
    Text,
    View,Animated,
    Image,ScrollView,
    Dimensions,TouchableHighlight
} from 'react-native';
import SearchBar from '../index/SearchBar';
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
    state: {
        xOffset: Animated,
    };
    constructor(props) {
        super(props);
        this.state = {
            xOffset: new Animated.Value(0),
        };
    }
    render() {
        return (
            <Resolution.FixWidthView>
                <SearchBar/>
                <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:50}}>
                    <Text style={{fontSize:40,}}>{jsonData.length}位设计师为您制定专属您的美</Text>
                </View>
                <ScrollView horizontal={true} //水平滑动
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {x: this.state.xOffset}}}]//把contentOffset.x绑定给this.state.xOffset
                            )}
                            scrollEventThrottle={5}//onScroll回调间隔
                >
                    {
                        jsonData.map((item, i) => this.renderAnimatedView(item,i))
                    }
                </ScrollView>
            </Resolution.FixWidthView>
        );
    }


    renderAnimatedView(item , i){
        if(i==0) {
            return (
                <Animated.View key={i} style={{justifyContent:'center',
                    transform: [{scale: this.state.xOffset.interpolate({ inputRange: [0, 450], outputRange: [1.0, 0.8] })}],
                    opacity:this.state.xOffset.interpolate({ inputRange: [0, 450], outputRange: [1.0,0.5] }),
                    marginLeft:125
                }}>
                    <Slide designer={item}/>
                </Animated.View>
            )
        }else if(i==jsonData.length-1){
            return (
                <Animated.View key={i} style={{justifyContent:'center',
                    transform: [{scale: this.state.xOffset.interpolate({ inputRange: [(i-1)*450, i*450], outputRange: [0.8, 1.0] })}],
                    opacity:this.state.xOffset.interpolate({ inputRange: [(i-1)*450, i*450], outputRange: [0.5, 1.0] }),
                    marginRight:125,marginLeft:-50
                }}>
                    <Slide designer={item}/>
                </Animated.View>
            )
        }else{
            return (
                <Animated.View key={i} style={{justifyContent:'center',
                    transform: [{scale: this.state.xOffset.interpolate({ inputRange: [(i-1)*450, i*450, (i+1)*450], outputRange: [0.8, 1.0, 0.8] })}],
                    opacity:this.state.xOffset.interpolate({ inputRange: [(i-1)*450, i*450, (i+1)*450], outputRange: [0.5, 1.0, 0.5] }),
                    marginLeft:-50
                }}>
                    <Slide designer={item}/>
                </Animated.View>
            )
        }
    }
}

