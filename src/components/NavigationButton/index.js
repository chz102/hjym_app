import React from 'react';
import { TouchableOpacity,Text,Image,View } from 'react-native';
import Icon from '../Icon';

const typeMap = {
  share: 'md-share-alt',
  search: 'ios-search',
  back: 'ios-arrow-back',
  reload: 'ion-ios-reload',
  delete: 'ios-trash-outline',
};

const iStyle = {
  paddingLeft: 8,
  paddingRight: 8,
};

const creatIcon = props => {
  const { name, usename = false, size = 30, color = 'white' } = props;
  const names = usename ? name : typeMap[name];
  const styles = usename ? '' : iStyle;
  return <Icon name={names} style={styles} size={size} color={color} />;
    // var icon = require('../../../images/tab/home1.png');
    // return <View style={{width:100,height:100,borderWidth:2,borderColor:'#fff'}}><Image source={icon} style={{width:100,height:100,borderWidth:2,borderColor:'#fff'}} /></View>
};

const runCallback = options => {
  const { callback } = options;

  const buttons =
    callback && typeof callback === 'function' ? (
      <TouchableOpacity onPress={callback}>
        {creatIcon(options)}
      </TouchableOpacity>
    ) : (
      creatIcon(options)
    );

  return buttons;
};

const NavigationButton = props => {
  const propsLength = props.length;
  let Buttons = null;
  if (propsLength >= 1) {
    props.map(item => {
      Buttons = runCallback(item);
      return null;
    });
  } else {
    Buttons = runCallback(props);
  }
  return Buttons;
};
export default NavigationButton;
