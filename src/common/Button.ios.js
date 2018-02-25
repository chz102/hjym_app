const React = require('react');
const ReactNative = require('react-native');
const {
    TouchableOpacity,
    View,
} = ReactNative;

export default Button = (props) => {
    return <TouchableOpacity {...props}>
        {props.children}
    </TouchableOpacity>;
}

