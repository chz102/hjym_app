import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,StyleSheet, Image, TouchableHighlight} from 'react-native';
import Resolution from "../common/Resolution";
import { Navigation } from 'react-native-navigation';

var jsonData = require('../../json/category.json').data;

export default class Category extends Component {
    static navigatorStyle = {
        navBarBackgroundColor:'#850000',
        navBarTextColor:'#fff',
        navBarHidden:false,navBarTransparent:false,
    };
    static navigatorButtons= {
        leftButtons: [
            {
                id:'back',title:'<返回',buttonColor: '#fff',
            }
        ],
    };

    gotoPage = (screen, title, passProps) => {
        Navigation.showModal({screen: screen,title: title, passProps: passProps});
    };

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



    renderCategoryItem(item, rowID) {
        return (

            <TouchableHighlight key={rowID} underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage(item.gotoPage, item.name, item.child)}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{uri:domain+item.icon}} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <Resolution.FixWidthView>
                <View style={styles.wrapper}>
                    {
                        jsonData.map((item, i) => this.renderCategoryItem(item,i))
                    }
                </View>
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection:'row',flexWrap:'wrap', alignItems:'center', justifyContent:'space-around',
        backgroundColor:'#FFFFFF'
    },
    image:{
        width:60,
        height:60,
        resizeMode:'contain'
    },
    text:{
        marginTop:27,
        fontSize: 24
    },
    item:{
        width:180,height:180,justifyContent:'center',alignItems:'center'
    }
});