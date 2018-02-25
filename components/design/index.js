import React, { Component } from 'react';
import {
    Text,
    View,Animated,
    Image,ScrollView,
    Dimensions,TouchableHighlight,TouchableWithoutFeedback
} from 'react-native';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';


var jsonData = require('../../json/designerList2.json').data;

const Slide = props => {
    return (
        <View style={styles.slide}>
            <TouchableWithoutFeedback onPress={()=>{Actions.design_detail({designer: props.designer});}}>
            <View style={styles.slide}>
                <Image style={styles.image} source={{uri: props.designer.image}} />
                <Text style={styles.name}>{props.designer.name}</Text>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default class Design extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                {/*<View style={{flexDirection:'row',justifyContent:'center',paddingVertical:20}}>*/}
                    {/*<Text style={{fontSize:40,}}>{jsonData.length}位设计师为您制定专属您的美</Text>*/}
                {/*</View>*/}
                <Swiper autoplay={false} removeClippedSubviews={false} showsButtons={true} loadMinimal={false} showsPagination={false}>
                    {
                        jsonData.map((item, i) => <Slide designer={item} i={i} key={i}/>)
                    }
                </Swiper>
            </View>
        );
    }
}


const styles = {

    slide: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 750,
        height: 1125,
        flex: 1,
    },
    name:{
        fontSize: 35,
        marginTop: -100,
        height:100,
        lineHeight:50,
        paddingHorizontal:20,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',

    }
}

