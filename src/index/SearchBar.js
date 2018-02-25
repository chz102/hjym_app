import React, { Component } from 'react';
import {
    Dimensions, Platform,
    StyleSheet,
    Text,
    View, Image, TextInput, StatusBar
} from 'react-native';

export function isIphoneX() {
    let dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
    );
}

export function ifIphoneX(iphoneXStyle, regularStyle, androidStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    } else if (Platform.OS === 'android') {
        return androidStyle;
    } else {
        return regularStyle
    }
}
let local_images_dir = "../../images/";
export default class Banner extends Component<{}> {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {text: '', show: false};
    }
    render() {
        return (
            <View style={{backgroundColor: '#850000', width:750}}>
                <StatusBar backgroundColor={'#850000'} barStyle={'light-content'} />
                <View style={styles.searchBar}>
                    <View style={styles.searchBarView}>
                        <Image source={{uri:domain+'images/icon_search.png'}} style={styles.searchIcon}/>
                        <TextInput style={styles.searchBarTextInput}
                                   returnKeyType="search" underlineColorAndroid={'transparent'}
                                   placeholder="搜索你感兴趣的项目"
                                   value={this.state.text} />
                    </View>
                    <Image style={{height:40,width:40}} source={{uri:domain+'images/icon_lingdang.png'}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...ifIphoneX({
            marginTop: 88
        }, {
            marginTop: 64
        }, {
            marginTop: 10
        }),
        marginBottom: 10,
        paddingHorizontal:20
    },
    searchBarView:{  //搜索关键字输入框样式定义
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'black',
        height: 56,
        width: 621,
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
        fontSize:28
    },
});
