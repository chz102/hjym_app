import React, { Component } from 'react';
import { ScrollView, ListView, Text, View ,StyleSheet, Image} from 'react-native';
import Banner from "../home/recommend/Banner";
import BasePureComponent from "../base";
import Resolution from "../common/Resolution";

export default class PointMall extends BasePureComponent {

    render() {
        return (
            <Resolution.FixWidthView>
                <ScrollView horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View removeClippedSubviews={false} style={{height:360,width:750}}>
                        <Banner/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',height:100,alignItems:'center',borderBottomWidth:1}}>
                        <Text style={{fontSize:28}}>积分 2970</Text>
                        <Text style={{fontSize:28}}>兑换记录</Text>
                    </View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',borderBottomWidth:1,backgroundColor:'white'}}>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                        <View style={{width:180,height:180,justifyContent:'center',alignItems:'center'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                            <Text style={{fontSize:28,lineHeight:40}}>电器</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <View style={{padding:20,width:375,height:415}}>
                            <Image style={{width:335,height:335}} source={{uri:'https://img.alicdn.com/bao/uploaded/i3/TB1dBEMIFXXXXbkaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg'}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:28,lineHeight:40}}>南极人家纺</Text>
                                <Text style={{fontSize:28,lineHeight:40}}>2000积分</Text>
                            </View>
                        </View>
                        <View style={{padding:20,width:375,height:415}}>
                            <Image style={{width:335,height:335}} source={{uri:'https://img.alicdn.com/bao/uploaded/i1/114746002/TB1FUHhntrJ8KJjSspaXXXuKpXa_!!0-item_pic.jpg_430x430q90.jpg'}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:28,lineHeight:40}}>NIKE耐克书包</Text>
                                <Text style={{fontSize:28,lineHeight:40}}>4000积分</Text>
                            </View>
                        </View>
                        <View style={{padding:20,width:375,height:415}}>
                            <Image style={{width:335,height:335}} source={{uri:'https://img.alicdn.com/bao/uploaded/i1/114746002/TB1FUHhntrJ8KJjSspaXXXuKpXa_!!0-item_pic.jpg_430x430q90.jpg'}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:28,lineHeight:40}}>NIKE耐克书包</Text>
                                <Text style={{fontSize:28,lineHeight:40}}>4000积分</Text>
                            </View>
                        </View>
                        <View style={{padding:20,width:375,height:415}}>
                            <Image style={{width:335,height:335}} source={{uri:'https://img.alicdn.com/bao/uploaded/i3/TB1dBEMIFXXXXbkaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg'}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:28,lineHeight:40}}>南极人家纺</Text>
                                <Text style={{fontSize:28,lineHeight:40}}>2000积分</Text>
                            </View>
                        </View>
                        <View style={{padding:20,width:375,height:415}}>
                            <Image style={{width:335,height:335}} source={{uri:'https://img.alicdn.com/bao/uploaded/i3/TB1dBEMIFXXXXbkaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg'}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:28,lineHeight:40}}>南极人家纺</Text>
                                <Text style={{fontSize:28,lineHeight:40}}>2000积分</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({

});