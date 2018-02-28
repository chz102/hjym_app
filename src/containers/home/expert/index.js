import React, { Component } from 'react';
import { ScrollView, ListView, Text, View ,StyleSheet, Image, TouchableHighlight} from 'react-native';
import BottomLine from '../../../components/BottomLine';
var jsonData = require('../../../../json/expertList.json').data;

export default class ExpertList extends Component {
    gotoPage = (screen, title, passProps) => {
        // Navigation.showModal({screen: screen,title: title, passProps: passProps});
    };


    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(jsonData)
        };
    }


    _renderRow(rowData)  {
        return (
            <TouchableHighlight underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>{Actions.plastic_project_detail({title: '数字化综合眼部美化'});}}>
                <View style={styles.wrapper}>
                    <View style={{flexDirection:'row', alignItems:'center',padding:20, height: 220}}>
                        <View>
                            <Image style={styles.image} source={{uri:rowData.headPortrait}}/>
                        </View>
                        <View style={{marginLeft:20,width: 500,height:180,justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                <Text style={styles.itemDoctor}>{rowData.userName}</Text>
                                <Text style={styles.doctorPosition}>{rowData.position}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                <Text style={styles.hospitalName}>上海市皮肤病医院</Text>
                                <Text style={styles.hospitalLevel}>立即预约</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                <Text style={styles.doctorTag}>面部精雕</Text>
                                <Text style={styles.doctorTag}>无针水光</Text>
                                <Text style={styles.doctorTag}>氧离子线雕</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ScrollView removeClippedSubviews={false} horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, backgroundColor: '#fafafa'}}>
                <View style={styles.sortBar}>
                    <View style={styles.sortItem}>
                        <Text style={styles.sortText}>项目类别</Text>
                        <Image style={{height: 18, width: 30}} source={require('../../../../images/icon/icon_select_red.png')}/>
                    </View>
                    <View style={styles.sortItem}>
                        <Text style={styles.sortText}>地区</Text>
                        <Image style={{height: 18, width: 30}} source={require('../../../../images/icon/icon_select_red.png')}/>
                    </View>
                    <View style={styles.sortItem}>
                        <Text style={styles.sortText}>职称</Text>
                        <Image style={{height: 18, width: 30}} source={require('../../../../images/icon/icon_select_red.png')}/>
                    </View>
                    <View style={styles.sortItem}>
                        <Text style={styles.sortText}>医院</Text>
                        <Image style={{height: 18, width: 30}} source={require('../../../../images/icon/icon_select_red.png')}/>
                    </View>
                </View>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
                <BottomLine/>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
        borderRadius:75,
        margin:20
    },
    name:{
        lineHeight:40,
        fontSize: 28,
        fontWeight:'900'
    },
    text:{
        lineHeight:35,
        fontSize: 24,
        color:'#A0A0A0'
    },
    item:{
        width:700,flexDirection:'row',margin:15,alignItems:'center',borderBottomWidth:1,borderColor:'#A0A0A0'
    },

    sortBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
        paddingHorizontal:20,
        backgroundColor:'#f0f0f0',
        height:66
    },
    sortItem:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    sortText:{
        fontSize:28,
        lineHeight:30,
        color:'#850000',
        paddingHorizontal:5,
    },
    wrapper: {
        padding:20,
        height:200, alignItems:'center', justifyContent:'space-around',
        backgroundColor:'#FFFFFF',marginBottom:20
    },
    itemTitle:{
        marginTop:20,
        fontSize: 28,
        lineHeight: 40,
        color: '#333333'
    },
    itemDoctor:{
        fontSize: 40,
        color: '#850000'
    },
    doctorPosition: {
        marginLeft: 20,
        fontSize: 24,
    },
    doctorTag: {
        fontSize: 20,
        color:'gray',
        lineHeight: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#850000',
        paddingHorizontal: 10,
        marginLeft: 10,
    },
    itemPoint:{
        marginTop:15,
        fontSize: 30,
        lineHeight: 42,
        color: '#850000'
    },
    itemCoupon:{
        width: 690,
        borderTopWidth: 1,
        borderColor: '#D8D8D8',
        paddingTop: 20,
        marginBottom: 19,
        flexDirection:'row'
    },
    itemCouponText:{
        fontSize: 20,
        lineHeight: 28,
        color: '#999999',
        marginLeft:10,
    },
    itemCouponIcon:{
        fontSize: 18,
        lineHeight: 25,
        color: '#850000',
        borderColor:'#850000',
        borderWidth:1,
        borderRadius:3,
        paddingHorizontal:5,
    },
    hospitalName:{
        fontSize: 24,
    },
    hospitalLevel:{
        fontSize: 24,
        lineHeight: 30,
        color: '#fff',
        backgroundColor:'#850000',
        borderWidth:1,
        borderRadius:15,
        overflow:'hidden',
        paddingHorizontal:15,
        marginLeft: 20,
    }
});