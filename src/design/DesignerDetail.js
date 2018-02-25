import React, { Component } from 'react';
import {
    Text,
    View,
    Image,StyleSheet,StatusBar,
    Dimensions,TouchableHighlight
} from 'react-native';
import Resolution from "../common/Resolution";



export default class  DesignerDetail extends Component {
    static navigatorStyle = {
        // navBarBackgroundColor:'#850000',
        navBarTextColor:'#fff',
        navBarHidden:false,navBarTransparent:true,drawUnderNavBar:true,navBarTranslucent:true
    };
    static navigatorButtons= {
        leftButtons: [
            {
                id:'back',icon:require('../../images/icon/my/arrow_left_white.png'),disableIconTint: true,
            }
        ],
    };

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                });
            }
        }
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    }

    render() {
        return (
            <Resolution.FixWidthView>
                <Image style={{width:750,height:540/480*750}} source={{uri:this.props.designer.images}}/>
                <View style={styles.statistics}>
                    <Text style={styles.statisticsNumber}>人气值：11554</Text>
                    <Text style={styles.statisticsNumber}>粉丝：323</Text>
                    <Text style={styles.statisticsNumber}>相册数：666</Text>
                </View>
                <View style={styles.container} >
                    <Text style={{fontSize:32,lineHeight:45,marginRight:50}}>{this.props.designer.userName}</Text>
                    <Text style={styles.tag}>处女座</Text>
                    <Text style={styles.tag}>♀ 21</Text>
                </View>
            </Resolution.FixWidthView>
        )
    }
}

const styles = StyleSheet.create({
    navigationHeader:{
        height:88,
        backgroundColor:'#850000'
    },
    headerTitleStyle:{
        fontSize:36,
    },
    container:{
        padding:20, flexDirection:'row'
    },
    statistics:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:20,marginTop:-85},
    statisticsNumber:{fontSize:32,lineHeight:45,color:'#fff'},
    tag:{
        fontSize: 35,padding:10,marginHorizontal:20,backgroundColor:'#C4A073',borderRadius:10,overflow:'hidden',color:'#fff'
    }
});