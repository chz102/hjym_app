import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TextInput, StatusBar, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

var jsonData = require('../../json/circleList.json').data;

export default class PublishCircle extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.row,{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={styles.label}>项目</Text>
                    <Text style={styles.category}>玻尿酸</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>上传术前照片</Text>
                    <Text style={styles.plus}>＋</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>上传术后照片</Text>
                    <Text style={styles.plus}>＋</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>请输入您的近况</Text>
                    <TextInput style={styles.circle_desc} multiline={true} numberofLines={11}/>
                </View>
            </View>
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
    plus: {
        fontSize: 100,
        fontWeight: "300",
        color: '#979797',
        borderWidth: 1,
        borderColor: '#979797',
        width: 110,
        textAlign: 'center',
        marginTop:20
    },
    circle_desc: {
        height: 200,
        borderWidth: 1,
        borderColor: '#979797',
        fontSize: 26,
        lineHeight: 30,
        marginTop: 20,
    }

});