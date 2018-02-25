import React, { Component } from 'react';
import {
    Platform,TouchableHighlight,Dimensions,WebView,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

const screenWidth =Dimensions.get('window').width;
const screenHeight =Dimensions.get('window').height;

export default class VideoList extends Component{

    render() {
        return (
            <WebView ref='webViewRef' allowsInlineMediaPlayback={false} style={{width:750}}
                     // source={{uri:'https://oa.dataguiding.com/oa/images/video.html'}} />
                     source={{uri:'https://oa.dataguiding.com/oa/video/youku.html'}} />
        );
    }
}



