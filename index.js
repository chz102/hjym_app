import { AppRegistry } from 'react-native';
import Root from './src/root';
import './src/commons/utils/Global';

global.domain = 'https://oa.dataguiding.com/oa/';

AppRegistry.registerComponent('hjym', () => Root);
