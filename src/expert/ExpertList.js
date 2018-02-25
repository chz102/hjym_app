import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View ,StyleSheet, Image, TouchableHighlight} from 'react-native';
import Resolution from "../common/Resolution";
import { Navigation } from 'react-native-navigation';

var jsonData = require('../../json/expertList.json').data;

export default class ExpertList extends Component {
    gotoPage = (screen, title, passProps) => {
        Navigation.showModal({screen: screen,title: title, passProps: passProps});
    };


    // 初始化模拟数据
    constructor(props) {
        super(props);
    }

    renderItem(item, rowID) {
        return (

            <TouchableHighlight key={rowID} underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage("ExpertDetail", item.name, {expert:item})}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{uri: item.headPortrait}} />
                    <View>
                        <Text style={styles.name}>{item.userName}</Text>
                        <Text style={styles.text}>资质：{item.position}</Text>
                        <Text style={styles.text}>擅长：{item.good_at}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ScrollView horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    {
                        jsonData.map((item, i) => this.renderItem(item,i))
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1, backgroundColor:'#FFFFFF', alignItems:'center'
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        margin:20
    },
    name:{
        lineHeight:40,
        fontSize: 28,
        fontWeight:'900'
    },
    text:{
        lineHeight:35,
        fontSize: 24,
        color:'#A0A0A0'
    },
    item:{
        width:700,flexDirection:'row',margin:15,alignItems:'center',borderBottomWidth:1,borderColor:'#A0A0A0'
    }
});