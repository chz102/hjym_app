import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import ScreenUtil from './ScreenUtil';

export default class Detail extends Component<{}> {
    render() {
        return (
            <View style={styles.wrapper}>
                <Image resizeMode={'contain'} style={{width: 750}} source={{uri:domain+'images/鸿嘉怡美-详情页.png'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4A073'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
