import React, { Component } from 'react';
import {
    Dimensions, Platform,
    StyleSheet,
    Text,
    View, Image, TextInput, StatusBar
} from 'react-native';
import Resolution from "../../containers/common/Resolution";
import '../../commons/utils/Global';


export default class SearchBar extends Component<{}> {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {text: '', show: false};
    }
    render() {
        return (
                <View style={{flexDirection: 'row',alignItems:'center',}}>
                    <View style={styles.searchBar}>
                        <Image source={{uri:domain+'images/icon_search.png'}} style={styles.searchIcon}/>
                        <TextInput style={styles.searchBarTextInput}
                                       returnKeyType="search" underlineColorAndroid={'transparent'}
                                       placeholder="搜索你感兴趣的项目"
                                       value={this.state.text} />
                    </View>
                    <Image style={{height:SCALE(40),width:SCALE(40),marginLeft:SCALE(20)}} source={{uri:domain+'images/icon_lingdang.png'}} />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        flexDirection: 'row',
        width: SCALE(621),
        height: SCALE(56),
        backgroundColor:'#fff',
        alignItems: 'center',
        borderRadius: SCALE(28),
    },
    searchIcon: {
        marginLeft: SCALE(30),
        marginRight: SCALE(10),
        width: SCALE(25),
        height: SCALE(25),
        resizeMode: 'stretch'
    },
    searchBarTextInput: {
        width: SCALE(500),
        lineHeight:SCALE(40),
        fontSize:SCALE(28),
        padding:0
    },
});
