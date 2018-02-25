import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, ListView, StatusBar, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

var jsonData = require('../../json/circleList.json').data;

export default class Circle extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
            listDataSource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow!=newRow
            })
        };
        this.renderListItem = this.renderListItem.bind(this);
    }

    componentWillMount(){
        if(jsonData === null) return;
        this.setState({
            listDataSource:this.state.listDataSource.cloneWithRows(jsonData)
        });
    }

    render() {
        return (
                <View style={styles.container}>
                    {(
                        (jsonData.length !==0)?
                            (<ListView dataSource={this.state.listDataSource} renderRow={this.renderListItem} />):
                            (<View><Text>nothing</Text></View>)
                    )}
                </View>
        );
    }

    renderListItem(log, sectionID, rowID){
        return (
                <View style={{padding: 30, borderBottomWidth:1, borderColor:'#850000'}}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Image source={{uri:log.headPortrait }} style={{width:80,height: 80, borderRadius: 40}}/>
                        <Text style={{flex:1, paddingLeft:50, fontSize: 32}}>{log.userName}</Text>
                        <Text style={{fontSize: 28}}>{log.category}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', marginVertical: 30}}>
                        <Image source={{uri:log.images[0] }} style={{width:330,height: 330}}/>
                        <Image source={{uri:log.images[1] }} style={{width:330,height: 330}}/>
                    </View>
                    <Text style={{fontSize: 24}}>{log.content}</Text>
                    <View style={{flexDirection:'row', justifyContent:'flex-end',alignItems:'center', marginTop: 30}}>
                        <Image source={{uri: domain+'images/circle/zan@3x.png'}} style={{width:42,height: 42}}/>
                        <Text style={{fontSize: 30,paddingHorizontal: 20}}>点赞{log.thumbsUpCount}</Text>
                        <Image source={{uri: domain+'images/circle/talk@3x.png'}} style={{width:42,height: 42}}/>
                        <Text style={{fontSize: 30,paddingHorizontal: 20}}>评论{log.commentCount}</Text>
                    </View>
                </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 750,
    }

});