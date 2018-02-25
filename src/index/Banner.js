import React, { Component } from 'react';
import {
    Text,
    View,
    Image,ScrollView,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper'
import Resolution from "../common/Resolution";


const styles = {
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: 750,
        height: 360,
        flex: 1,
        backgroundColor: 'transparent'
    },

    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    loadingImage: {
        width: 60,
        height: 60
    }
}

const Slide = props => {
    return (<View style={styles.slide}>
        <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
        {
            !props.loaded && <View style={styles.loadingView}>
                {/*<Image style={styles.loadingImage} source={loading} />*/}
            </View>
        }
    </View>)
    // return (
    //     <Text>111</Text>)
}

export default class Banner extends Component<{}> {
    constructor (props) {
        super(props)
        this.state = {
            swiperShow:false,
            imgList: [
                domain+'images/banner/0a65bfaaaa04133bfaf9074add2dfa4f.jpg',
                domain+'images/banner/5b0f59a202caa5bf97d180137eba47a7.jpg',
                'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
                'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
            ],
            loadQueue: [0, 1, 0, 0]
        }
        this.loadHandle = this.loadHandle.bind(this)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }

    loadHandle (i) {
        let loadQueue = this.state.loadQueue
        loadQueue[i] = 1
        this.setState({
            loadQueue
        })
    }


    render() {
        if(this.state.swiperShow) {
            return (
                <Swiper autoplay={true} removeClippedSubviews={false}>
                    {
                        this.state.imgList.map((item, i) => <Slide
                            loadHandle={this.loadHandle}
                            loaded={!!this.state.loadQueue[i]}
                            uri={item} i={i} key={i}/>)
                    }
                </Swiper>
            )
        }else {
            return(<View></View>)
        }
    }
}
