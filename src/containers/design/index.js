import React, { Component } from 'react';
import {
    Text,
    View,Animated,
    Image,ScrollView,
    Dimensions,TouchableHighlight,TouchableWithoutFeedback
} from 'react-native';
import Swiper from 'react-native-swiper'
import SearchBar from "../../components/SearchBar/index";
import Resolution from "../common/Resolution";


var jsonData = require('../../../json/designerList2.json').data;

const Slide = props => {
    return (
        <View style={styles.slide}>
            <TouchableWithoutFeedback onPress={()=>{props.gotoPage("DesignerDetail",{designer:props.designer,title:props.designer.name})}}>
            <View style={styles.slide}>
                <Image style={styles.image} source={{uri: props.designer.image}} />
                <Text style={styles.name}>{props.designer.name}</Text>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default class Design extends Component {
    static navigationOptions = {
        headerLeft: (<SearchBar/>),
        headerStyle: {
            height: SCALE(76), padding: SCALE(10),
            backgroundColor: "#850000",
        },
    }
    constructor(props) {
        super(props);
    }
    gotoPage = (screen, params) => {
        this.props.navigation.navigate(screen, params);
    };
    render() {
        return (
            <Resolution.FixWidthView>
            <View style={{flex:1}}>
                {/*<View style={{flexDirection:'row',justifyContent:'center',paddingVertical:20}}>*/}
                    {/*<Text style={{fontSize:40,}}>{jsonData.length}位设计师为您制定专属您的美</Text>*/}
                {/*</View>*/}
                <Swiper autoplay={false} removeClippedSubviews={false} showsButtons={true} loadMinimal={false} showsPagination={false}>
                    {
                        jsonData.map((item, i) => <Slide designer={item} i={i} key={i} gotoPage={this.gotoPage}/>)
                    }
                </Swiper>
            </View>
            </Resolution.FixWidthView>
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

