import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TextInput, ScrollView, ListView
} from 'react-native';

export default class BigHealth extends Component<{}> {
    render() {
        return (
            <ScrollView horizontal={false} bounces={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                <View>
                    <Image resizeMode={'contain'}  style={{width:750,height:750/1440*750}} source={{uri:domain+'images/hjbs.jpg'}}/>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.title}>鸿嘉宝顺国际血液净化中心</Text>
                    </View>
                    <View>
                        <Text style={styles.p}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            香港鸿嘉集团是大健康产业的领跑者，成立于1976年，旗下子公司有香港鸿嘉怡美环球医疗和香港鸿嘉宝顺国际血液净化中心。
                            鸿嘉宝顺国际血液净化中心为广东省卫计委审核批准民营医院，希望为民族健康事业作出贡献，造福全人类。
                        </Text>
                        <Text style={styles.p}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            鸿嘉宝顺在健康产业的核心优势：第一，主要技术来源于美国宾夕法尼亚大学顶级医疗团队和国际顶级医疗器械公司的支持，有独特的核心技术。
                            第二，我们是现阶段国内唯一从血液净化学科入手做健康产业的。提出了血液健康了，器官和细胞就健康了，从而预防和治疗疾病。
                            第三，我们也是现阶段卫计委审批的唯一合法机构。
                            鸿嘉宝顺凝聚了国内外顶级医护团队、全进口FDA认证医疗器材，拥有与目前医疗市场完全不同的服务和体系，具有独特的核心竞争力，
                            做到精准、全面、高端、“预-治-养”一体化。
                        </Text>
                    </View>
                </View>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:48,
        lineHeight:67,
        color:'#333333',
        marginVertical:40,
    },
    p:{
        fontSize:26,
        lineHeight:37,
        color:'#333333',
        paddingHorizontal:20
    }
});