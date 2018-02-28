import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TextInput, ScrollView, ListView
} from 'react-native';


export default class Private extends Component<{}> {
    render() {
        return (
            <ScrollView horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Image style={styles.image0} source={{uri:domain+'images/adam/adam.png'}}/>
                <Image style={styles.image1} source={{uri:domain+'images/adam/adam_eden.jpg'}}/>
                <View style={styles.images}>
                    <Image style={styles.image2} source={{uri:domain+'images/adam/adam1.png'}}/>
                    <Image style={styles.image2} source={{uri:domain+'images/adam/adam2.png'}}/>
                </View>
                <View style={styles.images}>
                    <Image style={styles.image2} source={{uri:domain+'images/adam/adam3.png'}}/>
                    <Image style={styles.image2} source={{uri:domain+'images/adam/adam4.png'}}/>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    images: {
        flexDirection:'row',
        marginBottom:10
    },
    image0: {
        resizeMode:'contain',
        width:750,
        height:301,
        // marginBottom:30
    },
    image1: {
        resizeMode:'contain',
        width:750,
        height:750/800*457,
        marginBottom:30
    },
    image2: {
        resizeMode:'cover',
        width:360,
        height:300,
        marginHorizontal: 5
    }
});