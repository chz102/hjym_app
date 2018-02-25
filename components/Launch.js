import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MessageBarManager } from 'react-native-message-bar';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text:{
        width:'90vw',
        backgroundColor:'#fff'
    },
    bg:{
        width:'100vw'
    }
});

class Launch extends React.Component {
    componentDidMount() {

        this.timer = setTimeout(
            () => {Actions.drawer()},
            0
        );
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
  render() {
    return (
        <ImageBackground style={{flex:1}}  source={require("../images/launch.jpg")}>
          <View {...this.props} style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <Button title="Go to Login" onPress={() => Actions.login({ data: 'Custom data', title: 'Custom title' })} />
            <Button title="Go to Register page" onPress={Actions.register} />
            <Button title="Display Error Modal" onPress={Actions.error} />
            <Button title="Display Lightbox" onPress={() => Actions.demo_lightbox({data: 'passed data'})} />
            <Button title="Go to CustomNavBar page" onPress={() => Actions.customNavBar()} />
            <Button
              title="MessageBar alert"
              onPress={() => MessageBarManager.showAlert({
                title: 'Your alert title goes here',
                message: 'Your alert message goes here',
                alertType: 'success',
                // See Properties section for full customization
                // Or check `index.ios.js` or `index.android.js` for a complete example
              })}
            />
            <Button title="Go to TabBar page" onPress={Actions.drawer} />
          </View>
        </ImageBackground>
    );
  }
}

export default Launch;
