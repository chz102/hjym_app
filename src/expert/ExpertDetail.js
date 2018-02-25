import React, { Component } from 'react';
import {
    Text,
    View,
    Image,StyleSheet,StatusBar,
    Dimensions,TouchableHighlight
} from 'react-native';
import Resolution from "../common/Resolution";



export default class  ExpertDetail extends Component {
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
            <Resolution.FixWidthView >
                <Image source={require('../../images/icon/my/bg_top.png')}/>
                <View style={styles.top}>
                    <View style={{paddingHorizontal:40,flexDirection:'row',alignItems:'center',}}>
                        <Image style={{width:100,height:100,borderRadius:50}} source={{uri:'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                        <View style={{marginHorizontal: 20,justifyContent:'flex-start'}}>
                            <Text style={styles.userName}>{this.props.expert.userName}</Text>
                            <Text style={styles.position}>{this.props.expert.position}</Text>
                        </View>
                    </View>
                </View>
            </Resolution.FixWidthView>
        )
    }
}

const styles = StyleSheet.create({
    top:{marginTop:-400,height:400,width:750,justifyContent:'center',borderWidth:0},
    userName:{fontSize:28,color:'#fff',marginBottom:30},
    position:{fontSize:28,color:'#fff'},
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