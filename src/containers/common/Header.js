import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Header extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.search_bar}>
                    搜索
                </Text>
                <Text style={styles.navigation_bar}>
                    推荐
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#850000',
        height:50,
        width:380,
        paddingTop:40
    },
    search_bar: {
        fontSize: 20,
        textAlign: 'center',
    },
    navigation_bar: {
        textAlign: 'center',
        color: '#333333',
    },
});