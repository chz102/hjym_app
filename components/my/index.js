import React, { Component } from 'react';
import {
    Dimensions, Platform,TouchableHighlight,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'
import BasePureComponent from "../base";
import {checkLoginState} from "../../actions/my";
import ActionTypes from '../../actions'


class My extends Component {
    componentWillMount(){
        // alert(1)
        if(this.props.status !== ActionTypes.USER_LOGIN_SUCCESS) {
            Actions.login({type:'reset', data: 'Custom data', title: 'Custom title' });
        }
    }
    componentWillUnmount(){
        // alert(4)
    }
    componentWillReceiveProps(nextProps){

    }
    render() {
            return (
                <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
                    <Image source={require('../../images/icon/my/bg_top.png')}/>
                    <View style={styles.top}>
                        <View style={{flexDirection: 'row', paddingHorizontal: 40, justifyContent: 'flex-end'}}>
                            <TouchableHighlight underlayColor='#fff' onPress={() => {
                                Actions.my_setting();
                            }}>
                                <Image style={{width: 40, resizeMode: 'contain', marginRight: 50}}
                                       source={require('../../images/icon/my/setting.png')}/>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='#fff' onPress={() => {
                                Actions.my_notice_list();
                            }}>
                                <Image style={{width: 40, resizeMode: 'contain'}}
                                       source={require('../../images/icon/my/notice.png')}/>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight underlayColor='#850000' onPress={() => {
                            Actions.my_user_detail();
                        }}>
                            <View style={{paddingHorizontal: 40, flexDirection: 'row', alignItems: 'center',}}>
                                <Image style={{width: 100, height: 100, borderRadius: 50}}
                                       source={{uri: 'https://oa.dataguiding.com/oa/images/circle/H1.png'}}/>
                                <Text style={styles.nick}>鸿嘉怡美</Text>
                                <Image style={{width: 20, height: 35, marginRight: 0}}
                                       source={require('../../images/icon/my/arrow_right_white.png')}/>
                            </View>
                        </TouchableHighlight>
                        <Image style={{width: 750, height: 42,}}
                               source={require('../../images/icon/my/bg_bottom.png')}/>
                    </View>
                    <View style={styles.statistics}>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_point_record();
                        }}>
                            <View style={styles.statisticsItem}>
                                <Text style={styles.statisticsNumber}>11554</Text><Text style={styles.statisticsTitle}>积分</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_collect_list();
                        }}>
                            <View style={styles.statisticsItem}>
                                <Text style={styles.statisticsNumber}>323</Text><Text
                                style={styles.statisticsTitle}>收藏</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_browsing_history();
                        }}>
                            <View style={styles.statisticsItem}>
                                <Text style={styles.statisticsNumber}>666</Text><Text
                                style={styles.statisticsTitle}>足迹</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bottonLine}>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_point_mall();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/mall.png')}/>
                                <Text style={styles.buttonLable}>积分商城</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_coupon_list();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/coupon.png')}/>
                                <Text style={styles.buttonLable}>优惠券</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_reservation_list();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/appointment.png')}/>
                                <Text style={styles.buttonLable}>我的预约</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bottonLine}>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_recommend_form();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/recommend.png')}/>
                                <Text style={styles.buttonLable}>推荐有奖</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_collect_list();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/collect.png')}/>
                                <Text style={styles.buttonLable}>我的收藏</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_satisfaction_survey();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/satisfaction_survey.png')}/>
                                <Text style={styles.buttonLable}>满意度调查</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bottonLine}>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_designer_detail();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/designer.png')}/>
                                <Text style={styles.buttonLable}>我是设计师</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_baike_list();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/baike.png')}/>
                                <Text style={styles.buttonLable}>百科</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' onPress={() => {
                            Actions.my_service();
                        }}>
                            <View style={styles.buttonItem}>
                                <Image source={require('../../images/icon/my/service.png')}/>
                                <Text style={styles.buttonLable}>客服中心</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            );

    }
}

const styles = StyleSheet.create({
    top:{marginTop:-350,height:350,justifyContent:'space-between',borderWidth:0},
    nick:{fontSize: 32, lineHeight: 45, color: '#fff', paddingHorizontal: 20, width: 550,},
    statistics:{flexDirection:'row',alignItems:'center',paddingVertical:20,marginBottom:20,backgroundColor:'#fff'},
    statisticsItem:{width:250.5,alignItems:'center',borderRightWidth:1,borderColor:'#eee'},
    statisticsNumber:{fontSize:32,lineHeight:45,color:'#850000'},
    statisticsTitle:{fontSize:26,lineHeight:37,color:'#333333'},
    bottonLine:{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderBottomWidth:1,borderColor:'#eee'},
    buttonItem:{width:250.5,height:150,alignItems:'center',justifyContent:'center',borderWidth:1,borderRightWidth:2,borderColor:'#eee'},
    buttonLable:{fontSize:24,lineHeight:33,color:'#333'}
});

function select(store) {
    return {
        userLogin: store.default.userStore.userLogin,
        status: store.default.userStore.status,
    }
}

export default connect(select)(My);
