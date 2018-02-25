// import { StyleSheet} from 'react-native';
// import {
//     StackNavigator,
//     TabBarBottom,
// } from 'react-navigation';
// import App from "../../App";
// import ProjectList from "../ProjectList";
// import ProjectDetail from "../ProjectDetail";
// import BaikeList from '../BaikeList';
//
//
// const styles = StyleSheet.create({
//     navigationHeader:{
//         height:80,
//         padding:10,
//         backgroundColor:'#850000'
//     },
//     headerTitleStyle:{
//         fontSize:36,
//         color:'#fff'
//     }
// });
//
// const IndexNavigation = StackNavigator({
//     Home: {
//         screen: App,
//         navigationOptions: {
//             header: null
//         },
//     },
//     ProjectList: {
//         screen: ProjectList
//     },
//     ProjectDetail: {
//         screen: ProjectDetail
//     },
//     BaikeList: {
//         screen: BaikeList
//     }
// },{
//     initialRouteName: 'Home', // 默认显示界面
//     navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
//         headerBackTitle:'返回',  // 左上角返回键文字
//         headerTintColor: '#fff',
//         headerStyle:styles.navigationHeader,
//         headerTitleStyle:styles.headerTitleStyle,
//         headerBackTitleStyle:styles.headerTitleStyle,
//         cardStack: {
//             gesturesEnabled: true
//         }
//     },
//     mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
//     headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
//     onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
//     onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
// });
//
// export default IndexNavigation;