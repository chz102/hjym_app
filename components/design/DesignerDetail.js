import React, { Component } from 'react';
import {
    Text,
    View,
    Image,StyleSheet,StatusBar,
    Dimensions,TouchableHighlight
} from 'react-native';



export default class  DesignerDetail extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View>
                <Image style={{width:750,height:540/480*750}} source={{uri:this.props.designer.image}}/>
                <View style={styles.statistics}>
                    <Text style={styles.statisticsNumber}>人气值：11554</Text>
                    <Text style={styles.statisticsNumber}>粉丝：323</Text>
                    <Text style={styles.statisticsNumber}>相册数：666</Text>
                </View>
                <View style={styles.container} >
                    <Text style={{fontSize:32,lineHeight:45,marginRight:50}}>{this.props.designer.name}</Text>
                    <Text style={styles.tag}>处女座</Text>
                    <Text style={styles.tag}>♀ 21</Text>
                </View>
            </View>
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
    statistics:{flexDirection:'row',backgroundColor:'rgba(0, 0, 0, 0.1)',alignItems:'center',justifyContent:'space-between',padding:20,marginTop:-85},
    statisticsNumber:{fontSize:32,lineHeight:45,color:'#fff'},
    tag:{
        fontSize: 35,padding:10,marginHorizontal:20,backgroundColor:'#C4A073',borderRadius:10,overflow:'hidden',color:'#fff'
    }
});