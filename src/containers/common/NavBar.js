import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Image
} from 'react-native';
import {iphoneX} from "./function";
import TabNavigator from 'react-native-tab-navigator';
import IndexNavigation from "../navigation/IndexNavigation";
import Resolution from "./Resolution";
import Circle from "../circle/Circle";
import DesignNavigation from '../design/DesignNavigation';
import My from "../my/My";


var jsonData = require('../../json/circleList.json').data;

export default class NavBar extends Component<{}> {
    state= {
        selectedTab: '首页'
    };

  render() {
    return (
        <Resolution.FixWidthView>
        <TabNavigator tabBarStyle={styles.tabBar}>
            <TabNavigator.Item
                selected={this.state.selectedTab === '首页'}
                title="首页" titleStyle={styles.navBarText2} selectedTitleStyle={styles.navBarText}
                renderIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/index_nomal.png'}} />}
                renderSelectedIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/index_active.png'}} />}
                // badgeText="1"
                onPress={() => this.setState({ selectedTab: '首页' })}>
                <IndexNavigation/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === '美丽圈'}
                title="美丽圈" titleStyle={styles.navBarText2} selectedTitleStyle={styles.navBarText}
                renderIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/meiliquan_nomal.png'}} />}
                renderSelectedIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/meiliquan_active.png'}} />}
                // renderBadge={() => <CustomBadgeView />}
                onPress={() => this.setState({ selectedTab: '美丽圈' })}>
                <Circle circleList={jsonData}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === '形象设计'}
                title="形象设计" titleStyle={styles.navBarText2} selectedTitleStyle={styles.navBarText}
                renderIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/image_design_nomal.png'}} />}
                renderSelectedIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/image_design_active.png'}} />}
                // renderBadge={() => <CustomBadgeView />}
                onPress={() => this.setState({ selectedTab: '形象设计' })}>
                <DesignNavigation/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === '我的'}
                title="我的" titleStyle={styles.navBarText2} selectedTitleStyle={styles.navBarText}
                renderIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/my_nomal.png'}} />}
                renderSelectedIcon={() => <Image style={styles.navIcon} source={{uri:domain+'images/my_active.png'}} />}
                // renderBadge={() => <CustomBadgeView />}
                onPress={() => this.setState({ selectedTab: '我的' })}>
                <My/>
            </TabNavigator.Item>
        </TabNavigator>
        </Resolution.FixWidthView>
    );
  }
}

const styles = StyleSheet.create({
    tabBar:{
        height: 98, overflow: 'hidden', backgroundColor:'#850000' ,
        ...iphoneX(({paddingBottom: 42,height: 140}))
    },
    navBarText:{
        color:'#C4A073',
        fontSize: 20
    },
    navBarText2:{
        color:'#D8D8D8',
        fontSize: 20
    },
    navIcon:{
        width: 50,
        height: 50
    },
});
