import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import BasePureComponent from '../base';

export default class HomePage extends BasePureComponent {
    render() {
        this.logMsg('render')
        this.logMsgWithKey('props', this.props)
        return (
            <ScrollView style={styles.container}>
                {/*<BannerProvider/>*/}
                {/*<ClassifyProvider/>*/}
                {/*<RecoListProvider/>*/}
            </ScrollView>
        )
    }

    componentDidMount() {
        let param = {
            from: 'home-index'
        }
        // this.props.refreshHomePage(param)
    }
}

const styles = StyleSheet.create({
    navigationBar: {
        // backgroundColor: yellow_EF7907
    },
    title: {
        color: 'white'
    },
    container: {
        backgroundColor: "#f6f6f6",
    }
})