import { combineReducers } from 'redux';
import { homeIndex } from './reducers/home';

export const allReducers = combineReducers({
    homeIndex,
    // homeBanner,
    // homeClassify,
    // homeRecolist,
    // meIndex
});