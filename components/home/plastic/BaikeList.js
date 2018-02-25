import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,StyleSheet, Image} from 'react-native';

var jsonData = require('../../../json/baikeList.json').data;


export default class BaikeList extends Component {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state={
            listDataSource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow!=newRow
            })
        };
        this.renderListItem = this.renderListItem.bind(this);
    }

    componentWillMount(){
        this.setState({
            listDataSource:this.state.listDataSource.cloneWithRows(jsonData)
        });
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.listDataSource} renderRow={this.renderListItem} />
            </View>
        );
    }


    renderListItem(log, sectionID, rowID) {
        return (
            <View style={styles.slide}>
                <Text style={styles.item}>{log.title}</Text>
                <Image style={{width:24,height:42,marginRight:20}} source={require('../../../images/gogo.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:20,
        backgroundColor:'#fff',
        marginBottom:2,
        height:80,
        alignItems:'center',
        justifyContent:'space-between'
    },
    item:{
        fontSize:28,
        lineHeight:40,
    },
});