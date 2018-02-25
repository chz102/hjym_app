import React, { Component } from 'react';
import { ScrollView, ListView, Text, View ,StyleSheet, Image} from 'react-native';
import Item from "./common/Item";
import Swiper from 'react-native-swiper'
import Resolution from "./common/Resolution";

const Slide = props => {
    return (<View style={styles.slide}>
        <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
        {
            !props.loaded && <View style={styles.loadingView}>
                {/*<Image style={styles.loadingImage} source={loading} />*/}
            </View>
        }
    </View>)
}

export default class ProjectDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '项目详情',
    });
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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ]),
            imgList: [
                domain+'images/banner/0a65bfaaaa04133bfaf9074add2dfa4f.jpg',
                domain+'images/banner/5b0f59a202caa5bf97d180137eba47a7.jpg',
                'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
                'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
            ],
            loadQueue: [0, 0, 0, 0]
        }
        this.loadHandle = this.loadHandle.bind(this)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    }
    loadHandle (i) {
        let loadQueue = this.state.loadQueue
        loadQueue[i] = 1
        this.setState({
            loadQueue
        })
    }
    render() {
        return (
            <Resolution.FixWidthView >
                <ScrollView style={{flex:1}} removeClippedSubviews={false} horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                    <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
                        {
                            this.state.imgList.map((item, i) => <Slide
                                loadHandle={this.loadHandle}
                                loaded={!!this.state.loadQueue[i]}
                                uri={item}
                                i={i}
                                key={i} />)
                        }
                    </Swiper>
                    <View style={{padding:20,backgroundColor:'#fff'}}>
                        <Text style={styles.projectTitle}>【数字化综合眼部美化】修美与年轻化同步 塑造灵动迷人双眼</Text>
                        <Text style={styles.projectPoint}>666积分</Text>
                        <View style={styles.itemCoupon}>
                            <Text style={styles.itemCouponIcon}>优惠券</Text>
                            <Text style={styles.itemCouponText}>在线预约可获优惠券，现场付款可抵扣￥200</Text>
                        </View>
                    </View>
                    <View style={styles.projectContent}>
                        <Text style={{fontSize:28,textAlign:'center',}} numberOfLines={9}>图文详情图文详情</Text>
                    </View>
                    <View style={styles.projectMore}><Text style={{fontSize:26,color:'#fff'}}>点击展开图文详情∨</Text></View>
                    <Text style={{fontSize:26,color:'#333333',lineHeight:80,textAlign:'center'}}>————————&nbsp;&nbsp;猜你喜欢&nbsp;&nbsp;————————</Text>
                    <View>
                        <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => <Item navigation={this.props.navigation}/>}
                        />
                    </View>
                </ScrollView>
            </Resolution.FixWidthView>
        );
    }
}

const styles = StyleSheet.create({
    searchBar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'#850000',
        ...Resolution.ifIphoneX({
            paddingTop: 88
        }, {
            paddingTop: 64
        }, {
            paddingTop: 10
        }),
        paddingBottom: 10,
        paddingHorizontal:20
    },
    wrapper: { width: 750, height: 560, },
    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: 750,
        height: 560,
        backgroundColor: 'transparent'
    },
    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    loadingImage: {width: 60,height: 60},
    projectTitle:{fontSize:28,lineHeight:40,color:'#333333'},
    projectPoint:{fontSize:30,lineHeight:42,color:'#850000'},
    itemCoupon:{
        width: 690,
        borderTopWidth: 1,
        borderColor: '#D8D8D8',
        paddingTop: 20,
        marginBottom: 19,
        flexDirection:'row'
    },
    itemCouponText:{fontSize: 20,lineHeight: 28,color: '#850000',marginLeft:10,},
    itemCouponIcon:{
        width:66,height:25,borderRadius:4,overflow:'hidden',fontSize: 18,lineHeight: 25,color: '#fff',backgroundColor:'#850000',textAlign:'center'
    },
    projectContent:{width:750,height:560,backgroundColor:'#fff'},
    projectMore:{width:750,height:80,alignItems:'center',justifyContent:'center',marginTop:-80,backgroundColor:'#000',opacity:0.5}
});