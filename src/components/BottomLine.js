import React, { PureComponent } from "react"
import { View, Text, } from "react-native"

export default class BottomLine extends PureComponent {
    render() {
        return (
            <View style={{height:70,alignItems:'center'}}>
                <Text>—————————— 我是有底线的 ——————————</Text>
            </View>
        )
    }
}
