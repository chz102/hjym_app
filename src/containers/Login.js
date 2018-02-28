import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, InteractionManager} from "react-native";
import {receiveLogin, fetchLogin} from "../app/actions/login";
import ActionTypes from '../app/constants/actionTypes'
import LoginSelector from "../app/selectors/login"
import * as LoginActions from "../app/actions/login"
import connect from "../app/store/connect"
import Resolution from './common/Resolution';

@connect(LoginSelector, LoginActions)
export default class Login extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false,
        headerStyle: {
            height: SCALE(76), padding: SCALE(10),
            backgroundColor: "#812325",
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            username: 'hongjia',
            password: 'hongjia',
            token: ''
        };
    }

    _onLayout(event) {
        let {x, y, width, height, borderRadius} = event.nativeEvent.layout;
        alert(borderRadius + "   " + width + " " + height + "  ==  " + x + " " + " " + y);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.access_token) {
            this.props.navigation.navigate('My');
            return false;
        }
        return true;
        // else if (nextProps.status === ActionTypes.USER_LOGIN_SUCCESS) {
        //     Actions.pop();
        //     return false;
        // }
    }

    userLogin() {

        // InteractionManager.runAfterInteractions(() => {
            this.props.actions.fetchLogin()
        // })
    }

    goTab = () => {
        const {navigation} = this.props;
        navigation.navigate('Home');
    };

    render() {
        return (
            <Resolution.FixWidthView>
                <View style={styles.container}>
                    <View style={{
                        borderWidth: 2,
                        borderRadius: 30,
                        borderColor: '#C6A348',
                        borderStyle: 'solid',
                        width: 700,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: 'space-between'
                    }}>
                        <View style={{flexDirection: 'row', width: 600, justifyContent: 'flex-end'}}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.goTab();
                                }}
                            >
                                <Text style={{fontSize: 80, color: '#888888'}}>x</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 0,}}>
                            <Image style={{width: 258, height: 238}} source={require('../../images/login/logo.png')}/>
                        </View>
                        <View style={styles.inputView}>
                            <View style={{
                                flexDirection: 'row',
                                borderBottomWidth: 1,
                                borderColor: '#C6A348',
                                padding: 10
                            }}>
                                <Image style={{width: 40, height: 40}}
                                       source={require('../../images/login/smile.png')}/>
                                <TextInput
                                    style={{marginLeft: 20, fontSize: 24, textAlignVertical: 'center', color: '#fff'}}
                                    placeholder="请输入账号" placeholderTextColor="white"
                                    secureTextEntry={false}
                                    onChangeText={(text) => {
                                        this.setState({
                                            username: text
                                        });
                                    }}
                                    value={this.state.username}
                                    underlineColorAndroid={'transparent'}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 50,
                                borderBottomWidth: 1,
                                borderColor: '#C6A348',
                                padding: 10
                            }}>
                                <Image style={{width: 40, height: 40}}
                                       source={require('../../images/login/password.png')}/>
                                <TextInput
                                    style={{marginLeft: 20, width: 300, fontSize: 24, color: '#fff'}}
                                    placeholder="请输入密码" placeholderTextColor="white"
                                    clearButtonMode="while-editing"
                                    secureTextEntry
                                    onChangeText={(text) => {
                                        this.setState({
                                            password: text
                                        });
                                    }}
                                    value={this.state.password}
                                    underlineColorAndroid={'transparent'}
                                />
                            </View>
                            <View style={{
                                width: 480,
                                height: 88,
                                marginTop: 50,
                                backgroundColor: '#C6A348',
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.userLogin()}
                                >
                                    <Text style={{fontSize: 30, color: 'white'}}>登 录</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginBottom: 30,}}>
                            <Image style={{width: 260, height: 55}} source={require('../../images/login/solgn.png')}/>
                        </View>
                    </View>
                </View>
            </Resolution.FixWidthView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,paddingVertical:60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#812325",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});
