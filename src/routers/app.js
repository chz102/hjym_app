import { StackNavigator, TabNavigator ,} from "react-navigation"
import { HomePage, Circle, Design,DesignerDetail, PublishCircle, Login, Category ,BaikeList, ProjectDetail, HotList,
    My,BrowsingHistory,CollectList,CouponList,Designer,NoticeList,PointMall,PointRecord,RecommendForm,ReservationList,
    SatisfactionSurvey,Service,Setting,UserDetail
} from "./index"
import { TouchableOpacity,Text,Image,View } from 'react-native';
import React from 'react';

import { headerOptions, RouteConfigs, TabNavigatorConfig, StackNavigatorConfig } from "../config"
import ProjectList from "../containers/home/plastic/ProjectList";

const TabBarText = {
  home: "首页",
  circle: "美丽圈",
  design: "形象设计",
  my: "我的",
}

const Nav = TabNavigator(
    {
        Home: {
            screen: HomePage,
            path: "Home",
            navigationOptions: {
                tabBarLabel: TabBarText.home,
                tabBarIcon: ({tintColor,focused}) => (
                    <Image
                        style={{width:SCALE(50),height:SCALE(50)}}
                        source={focused?require('../../images/tab/home1.png'):require('../../images/tab/home0.png')}/>
                ),
            },
        },
        Circle: {
            screen: Circle,
            path: "Circle",
            navigationOptions: {
                tabBarLabel: TabBarText.circle,
                tabBarIcon: ({tintColor,focused}) => (
                    <Image
                        style={{width:SCALE(50),height:SCALE(50)}}
                        source={focused?require('../../images/tab/circle1.png'):require('../../images/tab/circle0.png')}/>
                ),

            },
        },
        PublishCircle: {
            screen: PublishCircle,
            path: "PublishCircle",
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({tintColor,focused}) => (
                    <Image
                        style={{width:SCALE(120),height:SCALE(120)}}
                        source={require('../../images/tab/plus1.png')}/>
                ),

            },
        },
        Design: {
            screen: Design,
            path: "Design",
            navigationOptions: {
                tabBarLabel: TabBarText.design,
                tabBarIcon: ({tintColor,focused}) => (
                    <Image
                        style={{width:SCALE(50),height:SCALE(50)}}
                        source={focused?require('../../images/tab/design1.png'):require('../../images/tab/design0.png')}/>
                ),

            },
        },
        My: {
            screen: My,
            path: "My",
            navigationOptions: {
                tabBarLabel: TabBarText.my,
                tabBarIcon: ({tintColor,focused}) => (
                    <Image
                        style={{width:SCALE(50),height:SCALE(50)}}
                        source={focused?require('../../images/tab/my1.png'):require('../../images/tab/my0.png')}/>
                ),

            },
        },

    },
  TabNavigatorConfig({
      initialRouteName: "Home",
  })
)

const Routers = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Nav: {
            screen: Nav,
        },
        ProjectList: {
            screen: ProjectList,
            navigationOptions: props => {
                return headerOptions({...props, ...{back: true,},})
            },
        },
        ProjectDetail: {
            screen: ProjectDetail,
            navigationOptions: props => {
                return headerOptions({...props, ...{back: true,},})
            },
        },
        Category: {
            screen: Category,
            navigationOptions: props => {
                return headerOptions({...props, ...{back: true,},})
            },
        },
        BaikeList: {
            screen: BaikeList,
            navigationOptions: props => {
                return headerOptions({...props, ...{back: true,},})
            },
        },
        HotList: {screen: HotList, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        BrowsingHistory: {screen: BrowsingHistory, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        CollectList: {screen: CollectList, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        CouponList: {screen: CouponList, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        Designer: {screen: Designer, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        NoticeList: {screen: NoticeList, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        PointMall: {screen: PointMall, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        PointRecord: {screen: PointRecord, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        RecommendForm: {screen: RecommendForm, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        ReservationList: {screen: ReservationList, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        SatisfactionSurvey: {screen: SatisfactionSurvey, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        Service: {screen: Service, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        Setting: {screen: Setting, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
        UserDetail: {screen: UserDetail, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},

        DesignerDetail: {screen: DesignerDetail, navigationOptions: props => {return headerOptions({...props, ...{back: true,},})},},
    },
  StackNavigatorConfig({
      initialRouteName: "Nav",
  }),
)
export default Routers
