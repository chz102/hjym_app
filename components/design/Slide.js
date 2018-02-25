import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,TouchableHighlight
} from 'react-native';


export default class Slide extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <TouchableHighlight underlayColor='#fff' >
                <View style={{width: 480, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={[styles.slide, {zIndex: 100, width: 480}]}>
                        <Image style={styles.image} source={{uri: this.props.designer.images}}/>
                        <View style={{ padding: 20, width: 480, flexDirection: 'row'}}>
                            <Image source={{uri: this.props.designer.headPortrait}}
                                   style={{width: 80, height: 80, borderRadius: 40, marginTop: -40}}/>
                            <Text style={{fontSize: 28, marginLeft: 20}}>{this.props.designer.userName}</Text>
                        </View>
                        <View style={{ padding: 20, width: 480, height: 200, }}>
                            <Text style={{fontSize: 24,}}>{this.props.designer.introduction}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}


const styles = {
    wrapper: {
        alignItems:'center',
        justifyContent:'center'
    },
    slide: {
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#ccc',
        overflow:'hidden'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: 480,
        height: 540,
    },
}