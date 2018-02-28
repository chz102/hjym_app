/**
 * Created by zhangyanlf on 2018/2/2.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    ImageBackground,
    DeviceEventEmitter
} from 'react-native';
import '../commons/utils/Global'
import Resolution from '../containers/common/Resolution';

export default class Tab extends Component {
    renderItem = (route, index) => {
        const {
            navigation,
            jumpToIndex,
        } = this.props;

        const focused = index === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = {
            focused:focused,
            route:route,
            tintColor:color
        };

        if(index === 2){
            return (<View
                    key={route.key}
                    style={[styles.tabItem,{backgroundColor:'transparent'}]}>
                </View>
            );
        }

        return (
            <TouchableOpacity
                key={route.key}
                style={styles.tabItem}
                onPress={() => jumpToIndex(index)}
            >
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    <Text style={{ ...styles.tabText,marginTop:SCALE(10),color }}>{this.props.getLabel(TabScene)}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    render(){
        const {navigation,jumpToIndex} = this.props;
        const {routes,} = navigation.state;
        const focused = 2 === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = {
            focused:focused,
            route:routes[2],
            tintColor:color
        };
        return (<View style={{width:WIDTH}}>
            <View style={styles.tab}>
                {routes && routes.map((route,index) => this.renderItem(route, index))}
            </View>
            {/*设置中间按钮凸出样式  使用绝对定位*/}
            <TouchableOpacity
                key={"centerView"}
                style={[styles.tabItem,{position:'absolute',bottom:SCALE(Resolution.isIphoneX()?25:0),left:(WIDTH-SCALE(120))/2,right:WIDTH-SCALE(120),height:SCALE(160)}]}
                onPress={() => jumpToIndex(2)}>
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    {/*<Text style={{ ...styles.tabText,marginTop:SCALE(10),color }}>{this.props.getLabel(TabScene)}</Text>*/}
                </View>
            </TouchableOpacity>
        </View>);
    }
}
const styles = {
    tab:{
        width:WIDTH,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        backgroundColor:'#850000',
        paddingBottom: SCALE(Resolution.isIphoneX()?35:10),
        height: SCALE(Resolution.isIphoneX()?125:100),
    },
    tabItem:{
        height:SCALE(80),
        width:SCALE(120),
        alignItems:'center',
        justifyContent:'center'
    },
    tabText:{
        marginTop:SCALE(13),
        fontSize:FONT(10),
        color:'#7b7b7b'
    },
    tabTextChoose:{
        color:'#f3474b'
    },
    tabImage:{
        width:SCALE(42),
        height:SCALE(42),
    },
};