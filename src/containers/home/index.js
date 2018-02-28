import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import BasePureComponent from '../base';

import Recommend from './recommend';
import SearchBar from "../../components/SearchBar/index";
import Video from './video';
import MicroPlastic from './plastic';
import Private from './private';
import BigHealth from './health';
import ExpertList from './expert';
import Resolution from "../common/Resolution";

export default class HomePage extends BasePureComponent {
    static navigationOptions = {
        headerLeft: (<SearchBar/>),
        headerStyle: {
            height: SCALE(76), padding: SCALE(10),
            backgroundColor: "#850000",
        },
    }
    render() {
        this.logMsg('render')
        this.logMsgWithKey('props', this.props)
        const {navigation} = this.props;
        return (
            <Resolution.FixWidthView isTab={true}>
            <ScrollableTabView tabBarBackgroundColor={'#FFFFFF'}
                               tabBarActiveTextColor={'#850000'}
                               tabBarUnderlineStyle={{backgroundColor: '#850000'}}
                               style={{width:750}} initialPage={0}
                               renderTabBar={
                                   () => <ScrollableTabBar style={{height:70}}
                                                           textStyle={{fontSize:28,}}
                                                           tabsContainerStyle={{width:750,justifyContent:'center',alignItems:'center'}
                                                           }/>}
            >
                <Recommend tabLabel="推荐" navigation={navigation}/>
                <Video tabLabel="视频" navigation={navigation}/>
                <MicroPlastic tabLabel="微整" navigation={navigation}/>
                <Private tabLabel="私密" navigation={navigation}/>
                <BigHealth tabLabel="鸿嘉宝顺" navigation={navigation}/>
                <ExpertList tabLabel="专家咨询" navigation={navigation}/>
            </ScrollableTabView>
            </Resolution.FixWidthView>
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