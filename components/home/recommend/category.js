import React, { Component } from 'react';
import {
    Platform,TouchableHighlight,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';


export default class RecommendCategory extends Component<{}> {
    constructor (props) {
        super(props);
    }

    gotoPage = (screen, title) => {
        if('ProjectList'==screen) {
            Actions.plastic_project_list({title: title});
        }
    };

    render() {
        return (
            <View style={{backgroundColor:'#F6F6F6'}}>
                <View style={styles.wrapper}>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','玻尿酸')}>
                        <View>
                        <Image style={styles.image} source={{uri:domain+'images/category_boniaosuan.png'}} />
                        <Text style={styles.text}>玻尿酸</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','瘦脸针')}>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image} source={{uri:domain+'images/category_shoulianzhen.png'}} />
                        <Text style={styles.text}>瘦脸针</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','隆鼻')}>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image} source={{uri:domain+'images/category_longbi.png'}} />
                        <Text style={styles.text}>隆鼻</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('ProjectList','鼻头塑形')}>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image} source={{uri:domain+'images/category_bitousuxing.png'}} />
                        <Text style={styles.text} >鼻头塑形</Text>
                    </View>
                    </TouchableHighlight>
                    <Button onPress={() => { Actions.plastic_category(); }}>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image} source={{uri:domain+'images/category_all.png'}} />
                        <Text style={styles.text}>全部</Text>
                    </View>
                    </Button>
                </View>

                <View style={{flexDirection:'row',marginTop:10}}>
                    <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>{Actions.plastic_project_list({title:'热门预约'});}}>
                    <Image style={{width:351,height:255}} source={{uri:domain+'images/hot_reservation.jpg'}}/>
                    </TouchableHighlight>
                    <View style={{marginLeft:3}}>
                        <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>{Actions.plastic_project_list({title:'优惠券中心'})}}>
                        <Image style={{width:400,height:126}} source={{uri:domain+'images/coupon_center.jpg'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>{Actions.plastic_baike_list({title:'整形百科'})}}>
                        <Image style={{width:400,height:126,marginTop:3}} source={{uri:domain+'images/plastic_encyclopedia.jpg'}}/>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:10}}>
                    <Image style={{width:750,height:120}} source={{uri:domain+'images/eyes.jpg'}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height:188, flexDirection:'row', alignItems:'center', justifyContent:'space-around',
        backgroundColor:'#FFFFFF'
    },
    image:{
        width:88,
        height:88
    },
    text:{
        marginTop:7,
        fontSize: 24
    },
});
