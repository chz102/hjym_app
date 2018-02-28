import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,StyleSheet, Image, TouchableHighlight} from 'react-native';
import Resolution from "../../common/Resolution";

var jsonData = require('../../../../json/category.json').data;

export default class Category extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.state.params.title,
            tabBarVisible: false,
            headerStyle: {
                height: SCALE(76), padding: SCALE(10),
                backgroundColor: "#812325",
            },
        }
    }

    renderCategoryItem(item, rowID) {
        return (

            <TouchableHighlight key={rowID} underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>{Actions.plastic_project_list({title: item.name});}}>
                <View style={styles.item} >
                    <Image style={styles.image} source={{uri:domain+item.icon}} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <Resolution.FixWidthView>
                <View style={styles.wrapper}>
                    {
                        jsonData.map((item, i) => this.renderCategoryItem(item,i))
                    }
                </View>
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection:'row',flexWrap:'wrap', alignItems:'center', justifyContent:'space-around',
        backgroundColor:'#FFFFFF'
    },
    image:{
        width:60,
        height:60,
        resizeMode:'contain'
    },
    text:{
        marginTop:27,
        fontSize: 24
    },
    item:{
        width:180,height:180,justifyContent:'center',alignItems:'center'
    }
});