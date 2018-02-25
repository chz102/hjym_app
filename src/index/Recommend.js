import React, { Component } from 'react';
import {
    View, ScrollView
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Banner from './Banner';
import RecommendCategory from './RecommendCategory'
import Item from "../common/Item";

export  const Recommend = (
            <ScrollView removeClippedSubviews={false} horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{height:360}}>
                    <Banner/>
                </View>
                <RecommendCategory/>
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
            </ScrollView>
);