import React, { Component } from 'react';
import {
    Dimensions, Platform
} from 'react-native';

export function isIphoneX() {
    let dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
    );
}

export function ifIphoneX(iphoneXStyle, regularStyle, androidStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    } else if (Platform.OS === 'android') {
        return androidStyle;
    } else {
        return regularStyle
    }
}

export function iphoneX(iphoneXStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
}