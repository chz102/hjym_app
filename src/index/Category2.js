import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,StyleSheet, Image, TouchableHighlight} from 'react-native';
import Resolution from "../common/Resolution";
import { Navigation } from 'react-native-navigation';

export default class Category2 extends Component {
    static navigatorStyle = {
        navBarBackgroundColor:'#850000',
        navBarTextColor:'#fff',
        navBarHidden:false,navBarTransparent:false,
    };
    static navigatorButtons= {
        leftButtons: [
            {
                id:'back',title:'<返回',buttonColor: '#fff',
            }
        ],
    };

    gotoPage = (screen, title) => {
        Navigation.showModal({screen: screen,title: title});
    };

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
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }



    renderCategoryItem(item, rowID) {
        return (

            <TouchableHighlight key={rowID} underlayColor='#fff' style={{alignItems:'center'}} onPress={()=>this.gotoPage('', item.name)}>
                <View style={styles.item}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.description-view}>
                        <Text style={styles.description}>描述：{item.name}{item.name}{item.name}{item.name}{item.name}{item.name}{item.name}{item.name}{item.name}{item.name}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        if(this.props.type=='list') {
            return (
                <Resolution.FixWidthView>
                    <View style={styles.wrapper}>
                        {
                            this.props.list.map((item, i) => this.renderCategoryItem(item,i))

                        }
                    </View>
                </Resolution.FixWidthView>
            );
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent:'space-around',
        backgroundColor:'#FFFFFF'
    },
    title:{
        width:700,
        fontSize: 35,
        color: '#fff',
        padding: 20,
        backgroundColor: '#850000'
    },
    description:{
        fontSize: 35,
    },
    item:{
        height:300,justifyContent:'center',alignItems:'center',padding:25
    }
});