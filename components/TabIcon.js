import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,Image,View,StyleSheet,Platform
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
    key: PropTypes.string
};
const styles = StyleSheet.create({
    tabIcon1: {
        width: 50, height: 50, marginBottom:5,
    },
    tabIcon2: {
        width: 150, height: 150, marginBottom: 0,
        position:'absolute',left:-75,bottom:-55,overflow:'visible'
    },
});

const img_arr = new Map([
    ["home0", require('../images/tab/home0.png')],
    ["home1", require('../images/tab/home1.png')],
    ["circle0", require('../images/tab/circle0.png')],
    ["circle1", require('../images/tab/circle1.png')],
    ["plus0", require('../images/tab/plus1.png')],
    ["plus1", require('../images/tab/plus1.png')],
    ["design0", require('../images/tab/design0.png')],
    ["design1", require('../images/tab/design1.png')],
    ["my0", require('../images/tab/my0.png')],
    ["my1", require('../images/tab/my1.png')]
]);

const TabIcon = (props) => {
        return (
            <Image style={props.title == 'plus' ? styles.tabIcon2 : styles.tabIcon1}
                   source={img_arr.get(props.title + (props.focused ? 1 : 0))}/>
        )
};

TabIcon.propTypes = propTypes;

export default TabIcon;
