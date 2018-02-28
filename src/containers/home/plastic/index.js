import React, { Component } from 'react';
import {
    Platform,TouchableHighlight,
    StyleSheet,
    Text,
    View, Image, TextInput, ScrollView, ListView
} from 'react-native';
import HotList from "../plastic/HotList";


export default class MicroPlastic extends Component<{}> {
    constructor(props) {
        super(props);
    }

    gotoPage = (screen, title) => {
        this.props.navigation.navigate(screen,{title:title});
    };

    render() {
        const {navigation} = this.props;
        return (
            <ScrollView horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.images}>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','面部精雕')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1} source={{uri:domain+'images/8/icon1.png'}}/>
                        <Text style={styles.icon_text}>面部精雕</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','氧离子线雕')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon2.png'}}/>
                        <Text style={styles.icon_text}>氧离子线雕</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','眼综合')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon3.png'}}/>
                        <Text style={styles.icon_text}>眼综合</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','鼻综合')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon4.png'}}/>
                        <Text style={styles.icon_text}>鼻综合</Text>
                    </View>
                    </TouchableHighlight>
                </View>
                <View style={[styles.images,{marginBottom:20}]}>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','纳米脂肪填充')}>
                        <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon5.png'}}/>
                        <Text style={styles.icon_text}>纳米脂肪填充</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','磁力光')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon6.png'}}/>
                        <Text style={styles.icon_text}>磁力光</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','无针水光')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon7.png'}}/>
                        <Text style={styles.icon_text}>无针水光</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','阿诺娜2.0')}>
                    <View style={styles.icon}>
                        <Image style={styles.image1}  source={{uri:domain+'images/8/icon8.png'}}/>
                        <Text style={styles.icon_text}>阿诺娜2.0</Text>
                    </View>
                    </TouchableHighlight>
                </View>
                <HotList  navigation={navigation}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    images: {
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
    icon: {
        width:160,
        height:150,
        alignItems: 'center',
        justifyContent:'center'
    },
    icon_text: {
        fontSize: 24,
        lineHeight: 33,
    },
    image1: {
        resizeMode:'contain',
        width:56,
        height:56,
    }
});
