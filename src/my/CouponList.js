import React, { Component } from 'react';
import { ScrollView, ListView, Text, View ,StyleSheet, Image} from 'react-native';
import Resolution from "../common/Resolution";

export default class CouponList extends Component {
    static navigatorStyle = {
        navBarBackgroundColor:'#850000',
        navBarTextColor:'#fff',
        navBarHidden:false,navBarTransparent:false,
    };
    static navigatorButtons= {leftButtons: [{id:'back',title:'<返回',buttonColor: '#fff',}],};

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                });
            }
        }
    }
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    }
    render() {
        return (
            <Resolution.FixWidthView >
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({

});