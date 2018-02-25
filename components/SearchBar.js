import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions} from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button';

const styles = StyleSheet.create({
    container: {
        width:750,height:100,
        // marginLeft:325,
        // marginRight:10000,
        height: (Platform.OS === 'ios') ? 168 : 108,
        flexDirection: 'row',
        paddingTop: 60,
        backgroundColor: '#850000'
    },
    navBarItem: {
        flex: 1,
        justifyContent: 'center'
    },
    navBarMiddle:{
        width:660,
        justifyContent: 'center',alignItems:'center'
    },
    navBarRight:{
        width:90,
        justifyContent: 'center',alignItems:'center'
    },
    searchBar:{
        flexDirection: 'row',
        width: 621,
        height: 56,
        backgroundColor:'#fff',
        alignItems: 'center',
        borderRadius: 28,
    },
    searchIcon: {
        marginLeft: 30,
        marginRight: 10,
        width: 25,
        height: 25,
        resizeMode: 'stretch'
    },
    searchBarTextInput: {
        width: 500,
        lineHeight:40,
        fontSize:28,
    },
})

export default class CustomNavBar extends React.Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {text: '', show: false};
    }

  _renderMiddle() {
    return (
      <View style={styles.navBarMiddle}>
          <View style={styles.searchBar}>
              <Image source={{uri:domain+'images/icon_search.png'}} style={styles.searchIcon}/>
              <TextInput style={styles.searchBarTextInput}
                         returnKeyType="search" underlineColorAndroid={'transparent'}
                         placeholder="搜索你感兴趣的项目"
                         value={this.state.text} />
          </View>
      </View>
    )
  }

  _renderRight() {
    return (

    <View style={styles.navBarRight}>

        <Button onPress={() => { Actions.example(); }}>
            <Image style={{height:40,width:40}} source={{uri:domain+'images/icon_lingdang.png'}} />
        </Button>
      </View>
    )
  }

  render() {
    return (

        <View style={[styles.container]}>
          { this._renderMiddle() }
          { this._renderRight() }
        </View>
    )
  }
}
