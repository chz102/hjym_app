import React from 'react';
import PropTypes from 'prop-types';

import {
    Text,
} from 'react-native';

const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
};

const TabIcon = (props) => (
    <Text style={{ color: props.focused ? 'red' : 'black' }}>
        {props.title}11{props.title}
    </Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;