import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TextInput, StatusBar, TouchableOpacity, Button, TouchableHighlight
} from 'react-native';
import SearchBar from "../../components/SearchBar/index";
import Resolution from "../common/Resolution";

var jsonData = require('../../../json/circleList.json').data;

export default class PublishCircle extends Component<{}> {
    static navigationOptions = {
        headerLeft: (<SearchBar/>),
        headerStyle: {
            height: SCALE(76), padding: SCALE(10),
            backgroundColor: "#850000",
        },
    }
    render() {
        return (
            <Resolution.FixWidthView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TextInput style={styles.circle_desc} underlineColorAndroid={'transparent'}
                               multiline={true} numberofLines={11} placeholder="这一刻的想法"/>
                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                        <TouchableHighlight style={styles.plusBtn} onPress={this._onPress}>
                            <Text style={styles.plusBtnText}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight style={styles.btn} onPress={this._onPress}>
                    <Text style={styles.btnText}>发布到美丽圈</Text>
                </TouchableHighlight>
                {/*<View style={styles.row}>*/}
                    {/*<Text style={styles.label}>上传术前照片</Text>*/}
                    {/*<Text style={styles.plus}>＋</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.row}>*/}
                    {/*<Text style={styles.label}>上传术后照片</Text>*/}
                    {/*<Text style={styles.plus}>＋</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.row}>*/}
                    {/*<Text style={styles.label}>请输入您的近况</Text>*/}
                    {/*<TextInput style={styles.circle_desc} multiline={true} numberofLines={11}/>*/}
                {/*</View>*/}
            </View>
            </Resolution.FixWidthView>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    row: {
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 20,
    },
    label: {
        fontSize: 26,
        color: '#979797'
    },
    category: {
        backgroundColor: '#850000',
        fontSize: 26,
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    buttonView: {
        backgroundColor: '#850000',
        fontSize: 26,
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    plusBtn:{
        borderWidth: 2,
        borderColor: '#979797',
        width: 110,
        height: 110,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    plusBtnText: {
        padding:0,
        fontSize: 100,
        lineHeight: 100,
        borderWidth: 0,
        fontWeight: "300",
        color: '#979797',
        textAlign: 'center',
        marginTop:0
    },
    circle_desc: {
        height: 200,
        padding:0,
        // borderWidth: 1,
        // borderColor: '#979797',
        fontSize: 26,
        lineHeight: 30,
        marginTop: 20,
    },
    btn: {
        backgroundColor: '#850000',
        // width: 100,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        width:700,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    btnText: {
        color: '#fff',
        fontSize: 28
    }
});
