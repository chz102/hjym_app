import React, { Component } from 'react';
import {
    View, ScrollView, Text
} from 'react-native';

import Banner from './Banner';
import BasePureComponent from "../../base";
import RecommendCategory from './category'
import HotList from "../plastic/HotList";
// import Item from "../common/Item";

export default class Recommend extends BasePureComponent {
    render() {
        const {navigation} = this.props;
        return(

            <ScrollView removeClippedSubviews={false} horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{height: 360}}>
                    <Banner/>
                </View>
                <RecommendCategory navigation={navigation}/>
                <HotList navigation={navigation}/>
            </ScrollView>
        )
    }
};