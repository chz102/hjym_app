import { StyleSheet, Dimensions } from 'react-native';
global.totalWidth = Dimensions.get('window').width;
global.totalHeight = Dimensions.get('window').height;
 global.w = totalWidth/750;
global.domain = 'https://oa.dataguiding.com/oa/';

let textSize = totalWidth / 18;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;
let MCV = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    tabBar:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: totalWidth,
        height: 66*w,
        alignItems: 'center',
    },
    tabBarText:{

    },
    banner:{
        width:totalWidth,
    }

});
export { MCV as default };