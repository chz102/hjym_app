import React, { Component } from 'react';
import { ScrollView, ListView, Text, View ,StyleSheet, Image} from 'react-native';
import Resolution from "../common/Resolution";

var jsonData = require('../../json/pointRecord.json').data;


export default class PointRecord extends Component {
    static navigatorStyle = {
        navBarBackgroundColor:'#850000',
        navBarTextColor:'#fff',
        navBarHidden:false,navBarTransparent:false,
    };
    static navigatorButtons= {leftButtons: [{id:'back',title:'<返回',buttonColor: '#fff',}],};

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                });
            }
        }
    }
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state={
            listDataSource: new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow!=newRow
            })
        };
        this.renderListItem = this.renderListItem.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount(){
        this.setState({
            listDataSource:this.state.listDataSource.cloneWithRows(jsonData)
        });
    }

    render() {
        return (
            <Resolution.FixWidthView>
                <View>
                    <ListView dataSource={this.state.listDataSource} renderRow={this.renderListItem} />
                </View>
            </Resolution.FixWidthView>
        );
    }


    renderListItem(log, sectionID, rowID) {
        return (
            <View style={styles.slide}>
                <Text style={styles.item}>{log.date}</Text>
                <Text style={styles.item}>{log.event}</Text>
                <Text style={[log.type=='add'?{color:'green'}:{color:'red'},styles.item]}>{log.type=='add'?'+':'-'}{log.point}</Text>
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