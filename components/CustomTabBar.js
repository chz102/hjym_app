import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
    tabItem:{
      width:150,height:150,alignItems:'center',justifyContent:'flex-end',backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    tabOver:{
      height:0,opacity:0.5
    },
    tabBg:{
      backgroundColor:'#850000',width:150,height:85,alignItems:'center',padding:5
    },
    tabIcon1: {
        width: 50, height: 50, marginBottom:5,
    },
    tabIcon2: {
        width: 140, height: 140, marginBottom: 5,
        overflow:'visible',justifyContent:'flex-end',position:'absolute',left:0,bottom:0,zIndex:100
    },

})
const img_arr = new Map([
    ["home0", require('../images/tab/home0.png')],
    ["home1", require('../images/tab/home1.png')],
    ["circle0", require('../images/tab/circle0.png')],
    ["circle1", require('../images/tab/circle1.png')],
    ["plus0", require('../images/tab/plus1.png')],
    ["plus1", require('../images/tab/plus1.png')],
    ["design0", require('../images/tab/design0.png')],
    ["design1", require('../images/tab/design1.png')],
    ["my0", require('../images/tab/my0.png')],
    ["my1", require('../images/tab/my1.png')]
]);
export default class CustomNavBar extends React.Component {


  render() {
    return (
        <View style={{flexDirection:'row',position:'absolute',left:0,bottom:0,height: 150,width:750,alignItems:'flex-end'}}>
          <View style={styles.tabItem}>
            <View style={styles.tabOver}></View>
            <View style={styles.tabBg}>
              <Image style={styles.tabIcon1} source={img_arr.get('home0')}/>
              <Text>首页</Text>
            </View>
          </View>
          <View style={styles.tabItem}>
            <View style={styles.tabOver}></View>
            <View style={styles.tabBg}>
              <Image style={styles.tabIcon1} source={img_arr.get('circle0')}/>
              <Text>美丽圈</Text>
            </View>
          </View>
          <View style={styles.tabItem}>
            <View style={styles.tabBg}>
            </View>

            <Image style={styles.tabIcon2} source={img_arr.get('plus1')}/>
          </View>
          <View style={styles.tabItem}>
            <View style={styles.tabOver}></View>
            <View style={styles.tabBg}>
              <Image style={styles.tabIcon1} source={img_arr.get('design0')}/>
              <Text>形象设计</Text>
            </View>
          </View>
          <View style={styles.tabItem}>
            <View style={styles.tabOver}></View>
            <View style={styles.tabBg}>
              <Image style={styles.tabIcon1} source={img_arr.get('my0')}/>
              <Text>我的</Text>
            </View>
          </View>
        </View>
    )
  }
}
