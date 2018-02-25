import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import ScreenUtil from './ScreenUtil';

export default class ComingSoon extends Component<{}> {
    render() {
        return (
            <View style={styles.wrapper} autoplay>
                <Text style={styles.text}>即将上线，敬请期待！</Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
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
