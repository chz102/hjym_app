import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
    container: {
        width: 750, height: 100,
        height: (Platform.OS === 'ios') ? 168 : 108,
        flexDirection: 'row',
        paddingTop: 60,
        backgroundColor: '#850000',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default class CustomNavBar extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  _renderLeft() {
      return (
        <TouchableOpacity
          onPress={Actions.pop}
          style={{width:50, paddingLeft: 20}}>
          <Image
            style={{width: 27, height: 48, }}
            resizeMode="contain"
            source={require("../images/back.png")}></Image>
        </TouchableOpacity>
      )
  }

  _renderMiddle() {
    return (
      <View>
        <Text style={{fontSize:32, color:'#fff'}}>{ this.props.title }</Text>
      </View>
    )
  }

  _renderRight() {
    return (
      <View style={{width:50, flexDirection: 'row', justifyContent: 'flex-end' }}>

      </View>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          { this._renderLeft() }
          { this._renderMiddle() }
          { this._renderRight() }
        </View>
    )
  }
}
