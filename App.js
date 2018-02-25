import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Launch from './components/Launch';
import Register from './components/Register';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,} from 'react-native-router-flux';
import {Provider} from 'react-redux'

import Home from './components/home';
import PlasticCategory from './components/home/plastic/Category'
import ProjectList from './components/home/plastic/ProjectList';
import BaikeList from './components/home/plastic/BaikeList';

import DrawerContent from './components/drawer/DrawerContent';
import TabView from './components/TabView';
import Circle from './components/circle';
import Design from './components/design';
import My from './components/my';

import TabIcon from './components/TabIcon';
import EchoView from './components/EchoView';
import MessageBar from './components/MessageBar';
import ErrorModal from './components/modal/ErrorModal';
import DemoLightbox from './components/lightbox/DemoLightbox';
import MenuIcon from './images/menu_burger.png';
import CustomNavBarView from "./components/CustomNavBarView";
import CustomNavBar from "./components/CustomNavBar";
import CustomTabBar from "./components/CustomTabBar";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import CustomNavBar2 from "./components/CustomNavBar2";
import Resolution from './components/Resolution';
import ProjectDetail from "./components/home/plastic/ProjectDetail";
import DesignerDetail from "./components/design/DesignerDetail";
import UserDetail from "./components/my/UserDetail";
import PointRecord from "./components/my/PointRecord";
import ReservationList from "./components/my/ReservationList";
import BrowsingHistory from "./components/my/BrowsingHistory";
import PointMall from "./components/my/PointMall";
import CouponList from "./components/my/CouponList";
import SatisfactionSurvey from "./components/my/SatisfactionSurvey";
import RecommendForm from "./components/my/RecommendForm";
import Service from "./components/my/Service";
import Setting from "./components/my/Setting";
import NoticeList from "./components/my/NoticeList";
import CollectList from "./components/my/CollectList";
import Designer from "./components/my/Designer";
import PublishCircle from "./components/circle/publish";
// import {allReducers} from "./reducers/all-reducers";

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#850000',height:100
    },
    labelStyle: {
        fontSize: 20,lineHeight:28,
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#000',
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};
import configureStore from './components/store'
let store = configureStore();


const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const App = () => (
    <Resolution.FixWidthView>
        <Provider store={store}>
        <Router getSceneStyle={getSceneStyle} uriPrefix={prefix}>

        <Overlay key="overlay">
            <Modal key="modal" hideNavBar transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}>
                <Lightbox key="lightbox">
                    <Stack hideNavBar key="root" titleStyle={{ alignSelf: 'center' }} >
                        <Scene key="echo" back clone component={EchoView} getTitle={({ navigation }) => navigation.state.key} />
                        <Scene key="launch" component={Launch} title="Launch" initial/>

                        <Stack key="customNavBar" hideTabBar titleStyle={{alignSelf: 'center'}}>
                            <Scene key="searchBar" navBar={SearchBar} component={SearchBar} back />
                            <Scene key="customNavBar1" title="CustomNavBar 1" navBar={CustomNavBar} component={CustomNavBarView} back/>
                            <Scene key="customNavBar2" title="CustomNavBar 2" navBar={CustomNavBar} component={CustomNavBarView} back/>
                            <Scene key="customNavBar3" title="Another CustomNavBar" navBar={CustomNavBar2} component={CustomNavBarView} back/>
                            <Scene key="hiddenNavBar" title="hiddenNavBar" component={CustomNavBarView} hideNavBar={true} back/>
                        </Stack>

                        <Stack back backTitle="Back" key="register" duration={0} navTransparent>
                            <Scene key="_register" component={Register} title="Register" />
                            <Scene key="register2" component={Register} title="Register2" />
                            <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} />
                        </Stack>

                        <Drawer hideNavBar key="drawer" contentComponent={DrawerContent} drawerImage={MenuIcon} drawerWidth={300}>
                            {/* Wrapper Scene needed to fix a bug where the tabs would reload as a modal ontop of itself */}
                            <Scene panHandlers={null} >
                                <Tabs key="tabbar" swipeEnabled={false} lazy={true} tabBarStyle={styles.tabBarStyle} labelStyle={styles.labelStyle}
                                    activeBackgroundColor="#850000" inactiveBackgroundColor="#850000" tabBarPosition="bottom"
                                    activeTintColor="#C4A073" inactiveTintColor="#fff"
                                >
                                    {/*tabBarComponent={CustomTabBar}*/}
                                    <Stack  key="home" title="home" tabBarLabel="首页" icon={TabIcon} navBar={SearchBar}>
                                        <Scene key="home_index" component={Home} tabBarLabel="首页" />
                                        <Scene key="plastic_category" title="项目分类" navBar={NavBar} component={PlasticCategory}/>
                                        <Scene key="plastic_project_list" title="项目列表" navBar={NavBar} component={ProjectList}/>
                                        <Scene key="plastic_project_detail" title="项目详情" navBar={NavBar} component={ProjectDetail}/>
                                        <Scene key="plastic_baike_list" title="整形百科" navBar={NavBar} component={BaikeList}/>
                                        <Scene key="example" component={TabView}/>
                                    </Stack>

                                    <Stack key="tab_2" title="circle" tabBarLabel="美丽圈" icon={TabIcon} navBar={SearchBar} >
                                        <Scene key="circle_index" component={Circle} icon={TabIcon} rightTitle="Right3" onRight={() => { }}/>
                                    </Stack>

                                    <Stack  key="tab_3" tabBarLabel=" " title="plus" navBar={SearchBar} >
                                        <Scene key="tab_3_1" component={PublishCircle} icon={TabIcon} rightTitle="Right3" onRight={() => { }}/>
                                    </Stack>
                                    <Stack key="design" title="design" tabBarLabel="形象设计" navBar={SearchBar} icon={TabIcon}>
                                        <Scene key="design_index" component={Design} />
                                        <Scene key="design_detail" title="设计师详情" navBar={NavBar} component={DesignerDetail}/>
                                    </Stack>
                                    <Stack initial key="my" title="my" tabBarLabel="我的" navBar={NavBar} icon={TabIcon}>
                                        <Scene key="my_index" component={My} hideNavBar/>
                                        <Scene key="my_user_detail" title="我的资料" component={UserDetail}/>
                                        <Scene key="my_point_record" title="我的积分" component={PointRecord}/>
                                        <Scene key="my_collect_list" title="我的收藏" component={CollectList}/>
                                        <Scene key="my_browsing_history" title="我的足迹" component={BrowsingHistory}/>
                                        <Scene key="my_point_mall" title="积分商城" component={PointMall}/>
                                        <Scene key="my_coupon_list" title="我的优惠券" component={CouponList}/>
                                        <Scene key="my_reservation_list" title="我的预约" component={ReservationList}/>
                                        <Scene key="my_recommend_form" title="推荐有奖" component={RecommendForm}/>
                                        <Scene key="my_satisfaction_survey" title="满意度调查" component={SatisfactionSurvey}/>
                                        <Scene key="my_designer_detail" title="我是设计师" component={Designer}/>
                                        <Scene key="my_baike_list" title="百科" component={BaikeList}/>
                                        <Scene key="my_service" title="客服中心" component={Service}/>
                                        <Scene key="my_setting" title="设置" component={Setting}/>
                                        <Scene key="my_notice_list" title="我的消息" component={NoticeList}/>
                                    </Stack>
                                </Tabs>
                            </Scene>
                        </Drawer>
                    </Stack>

                    <Scene key="demo_lightbox" component={DemoLightbox} />
                </Lightbox>
                <Scene key="error" component={ErrorModal} />
                <Stack hideNavBar key="login" path="login/:data" titleStyle={{ alignSelf: 'center' }}>
                    <Scene
                        key="loginModal"
                        component={Login}
                        // title="登录"
                        // onExit={() => console.log('onExit')}
                        // leftTitle="Cancel"
                        // onLeft={Actions.home_index}
                    />
                    <Scene
                        key="loginModal2"
                        component={Login2}
                        title="Login2"
                        backTitle="Back"
                        panHandlers={null}
                        duration={1}
                    />
                    <Scene
                        key="loginModal3"
                        hideNavBar
                        component={Login3}
                        title="Login3"
                        panHandlers={null}
                        duration={1}
                    />
                </Stack>
            </Modal>

            <Scene component={MessageBar} />
        </Overlay>
    </Router>
        </Provider>
    </Resolution.FixWidthView>
);

export default App;
