import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import LoginAction from "../actions/LoginAction";
import ActionTypes from '../actions'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,paddingVertical:30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#850000",
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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'hongjia',
            password: 'hongjia',
            token: ''
        };
    }

    _onLayout(event){
        let {x, y, width, height,borderRadius} = event.nativeEvent.layout;
        alert(borderRadius+"   "+width+" "+height+"  ==  "+x+" "+" "+y);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === ActionTypes.USER_LOGIN_INPUT || nextProps.status === ActionTypes.USER_LOGIN_IN)
            return true;
        else if (nextProps.status === ActionTypes.USER_LOGIN_SUCCESS) {
            Actions.pop();
            return false;
        }
    }

    userLogin() {
        if (this.props.status !== ActionTypes.USER_LOGIN_IN) {
            this.props.dispatch(LoginAction.userLogin(this.props.userLogin));
        }
    }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={{borderWidth:2,borderRadius:0,borderColor:'#C6A348',borderStyle:'solid',width:700,flex:1,alignItems: "center",justifyContent:'space-between'}}>

            <View  style={{marginTop:287,}}>
            <Image style={{width:258,height:238}} source={require('../images/login/logo.png')}/>
          </View>
          <View style={styles.inputView}>
            <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#C6A348',padding:10}}>
              <Image style={{width:40,height:40}} source={require('../images/login/smile.png')}/>
              <TextInput
                  style={{marginLeft:20,fontSize:24,textAlignVertical:'center',color:'#fff'}}
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
            <View style={{flexDirection:'row',marginTop:50,borderBottomWidth:1,borderColor:'#C6A348',padding:10}}>
              <Image style={{width:40,height:40}} source={require('../images/login/password.png')}/>
              <TextInput
                  style={{marginLeft:20,width:300,fontSize:24,color:'#fff'}}
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
            <View style={{width:480,height:88,marginTop:50,backgroundColor:'#C6A348',borderRadius:8,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.userLogin()}
              >
                <Text style={{fontSize:30,color:'white'}}>登 录</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginBottom:30,}}>
            <Image style={{width:260,height:55}} source={require('../images/login/solgn.png')}/>
          </View>
        </View>
      </View>
    );
  }
}
function select(store) {
    return {
        userLogin: store.default.userStore.userLogin,
        status: store.default.userStore.status,
    }
}

export default connect(select)(Login);