import React, {Component, PropTypes} from 'react';
import {
    Dimensions,
    PixelRatio,
    Platform,
    StatusBar,
    View, SafeAreaView
} from 'react-native';


let props = {};
export default class Resolution {
    static get(useFixWidth = true){
        return useFixWidth?{...props.fw}:{...props.fh}
    }

    static setDesignSize(dwidth=750,dheight=1336,dim="window"){
        let designSize = {width:dwidth,height:dheight};

        let navHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
        let pxRatio = PixelRatio.get(dim);
        let {width,height} = Dimensions.get(dim);
        if(dim != "screen")height-=navHeight;
        let w = PixelRatio.getPixelSizeForLayoutSize(width);
        let h = PixelRatio.getPixelSizeForLayoutSize(height);

        let fw_design_scale = designSize.width/w;
        fw_width = designSize.width;
        fw_height = h*fw_design_scale;
        fw_scale = 1/pxRatio/fw_design_scale;

        let fh_design_scale = designSize.height/h;
        fh_width = w*fh_design_scale;
        fh_height = designSize.height;
        fh_scale = 1/pxRatio/fh_design_scale;

        props.fw = {width:fw_width,height:fw_height,scale:fw_scale};
        props.fh = {width:fh_width,height:fh_height,scale:fh_scale};
    }

    static FixWidthView = (p) => {
        let {width,height,scale,status_bar_height} = props.fw;
        if(p.isTab){
            height-=80;//搜索栏
            height-=(Resolution.isIphoneX()?125:100);//底部TAB
            height-=(Platform.OS === 'android' ?0:(Resolution.isIphoneX()?88:40));//状态栏
        }
        return (
            <View style={{
                // paddingBottom:padding_bottom,
                width:width,
                height:height,
                backgroundColor: 'transparent',
                transform:[{translateX:-width*.5},
                    {translateY:-height*.5},
                    {scale:scale},
                    {translateX:width*.5},
                    {translateY:height*.5}]
            }} {...p}>
            </View>
        );
    };

    static FixHeightView = (p) => {
        let {width,height,scale,navHeight} = props.fh;
        return (
            <View  style={{
                // marginTop:navHeight,
                // width:width,
                // height:height,
                backgroundColor: 'transparent',
                transform:[{translateX:-width*.5},
                    {translateY:-height*.5},
                    {scale:scale},
                    {translateX:width*.5},
                    {translateY:height*.5}]
            }}>
                {p.children}
            </View>
        );
    };

    static isIphoneX() {
        let dimen = Dimensions.get('window');
        return (
            Platform.OS === 'ios' &&
            !Platform.isPad &&
            !Platform.isTVOS &&
            (dimen.height === 812 || dimen.width === 812)
        );
    }

    static ifIphoneX(iphoneXStyle, regularStyle, androidStyle) {
        if (this.isIphoneX()) {
            return iphoneXStyle;
        } else if (Platform.OS === 'android') {
            return androidStyle;
        } else {
            return regularStyle
        }
    }
};
//init
Resolution.setDesignSize();