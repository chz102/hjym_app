import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import BasePureComponent from '../base';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import Recommend from './recommend';
import Video from './video';
import MicroPlastic from './plastic';
import Private from './private';
import BigHealth from './health';
import ExpertList from './expert';

export default class HomePage extends BasePureComponent {
    render() {
        this.logMsg('render')
        this.logMsgWithKey('props', this.props)
        return (
            <ScrollableTabView tabBarBackgroundColor={'#FFFFFF'}
                               tabBarActiveTextColor={'#850000'}
                               tabBarUnderlineStyle={{backgroundColor: '#850000'}}
                               renderTabBar={
                                   () => <ScrollableTabBar style={{height:70}}
                                                           textStyle={{fontSize:28}}
                                                           tabsContainerStyle={{width:750,justifyContent:'center',alignItems:'center'}
                                                           }/>}
            >
                <Recommend tabLabel="推荐" />
                <Video tabLabel="视频"/>
                <MicroPlastic tabLabel="微整"/>
                <Private tabLabel="私密"/>
                <BigHealth tabLabel="鸿嘉宝顺"/>
                <ExpertList tabLabel="专家咨询"/>
            </ScrollableTabView>
        )
    }

    componentDidMount() {
        let param = {
            from: 'home-index'
        }
        // this.props.refreshHomePage(param)
    }
}

const styles = StyleSheet.create({
    navigationBar: {
        // backgroundColor: yellow_EF7907
    },
    title: {
        color: 'white'
    },
    container: {
        backgroundColor: "#f6f6f6",
    }
})