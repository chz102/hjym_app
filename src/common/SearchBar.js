import React, { Component } from 'react';
import {
    Dimensions, Platform,
    StyleSheet,
    Text,
    View, Image, TextInput, StatusBar
} from 'react-native';
import Resolution from "./Resolution";


export default class SearchBar extends Component<{}> {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {text: '', show: false};
    }
    render() {
        return (
            <Resolution.FixWidthView>
                <View style={{flexDirection: 'row',alignItems:'center',}}>
                    <View style={styles.searchBar}>
                        <Image source={{uri:domain+'images/icon_search.png'}} style={styles.searchIcon}/>
                        <TextInput style={styles.searchBarTextInput}
                                       returnKeyType="search" underlineColorAndroid={'transparent'}
                                       placeholder="搜索你感兴趣的项目"
                                       value={this.state.text} />
                    </View>
                    <Image style={{height:40,width:40,marginLeft:20}} source={{uri:domain+'images/icon_lingdang.png'}} />
                </View>
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        flexDirection: 'row',
        width: 621,
        height: 56,
        backgroundColor:'#fff',
        alignItems: 'center',
        borderRadius: 28,
    },
    searchIcon: {
        marginLeft: 30,
        marginRight: 10,
        width: 25,
        height: 25,
        resizeMode: 'stretch'
    },
    searchBarTextInput: {
        width: 500,
        lineHeight:40,
        fontSize:28,
    },
});
