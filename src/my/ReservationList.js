import React, { Component } from 'react';
import { TouchableHighlight, ListView, Text, View ,StyleSheet, Image} from 'react-native';
import Resolution from "../common/Resolution";

export default class ReservationList extends Component {
    static navigatorStyle = {
        navBarBackgroundColor:'#850000',
        navBarTextColor:'#fff',
        navBarHidden:false,navBarTransparent:false,
    };
    static navigatorButtons= {leftButtons: [{id:'back',title:'<返回',buttonColor: '#fff',}],};

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                });
            }
        }
    }
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }


    _renderRow(rowData)  {
        return (
            <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>Navigation.showModal({screen:'ProjectDetail',title: '项目详情'})}>
                <View style={styles.wrapper}>
                    <View style={{width: 690,height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize: 35}}>预约号：20180109001</Text>
                        <Text style={styles.itemCouponText}>2018.02.10 14:00</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', height: 220}}>
                        <View><Image style={styles.image} source={{uri:domain+'images/eye.png'}}/></View>
                        <View style={{width: 520,marginLeft:20}}>
                            <Text style={styles.itemTitle}>【数字化综合眼部美化】修美与年轻化同步 塑造灵动迷人双眼</Text>
                            <Text style={styles.itemDoctor}>主刀医生：黄丽丽</Text>
                            <Text style={styles.itemPoint}>249积分</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <Resolution.FixWidthView>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} />
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({
    sortBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
        paddingHorizontal:20,
        backgroundColor:'#fff',
        height:66
    },
    sortItem:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    sortText:{
        fontSize:28,
        lineHeight:30,
        color:'#850000',
        paddingHorizontal:5,
    },
    wrapper: {
        height:290, alignItems:'center', paddingVertical:20,
        backgroundColor:'#FFFFFF',marginBottom:20
    },
    image:{
        width:180,
        height:180,
    },
    itemTitle:{
        marginTop:20,
        fontSize: 28,
        lineHeight: 40,
        color: '#333333'
    },
    itemDoctor:{
        marginTop:10,
        fontSize: 24,
        lineHeight: 33,
        color: '#999999'
    },
    itemPoint:{
        marginTop:15,
        fontSize: 30,
        lineHeight: 42,
        color: '#850000'
    },
    itemCoupon:{
        width: 690,
        borderTopWidth: 1,
        borderColor: '#D8D8D8',
        paddingTop: 20,
        marginBottom: 19,
        flexDirection:'row'
    },
    itemCouponText:{
        fontSize: 20,
        lineHeight: 28,
        color: '#999999',
        marginLeft:10,
    },
    itemCouponIcon:{
        fontSize: 18,
        lineHeight: 25,
        color: '#850000',
        borderColor:'#850000',
        borderWidth:1,
        borderRadius:3,
        paddingHorizontal:5,
    }
});