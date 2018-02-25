import {REFRESH_HOMEPAGE} from '../actions/home'
import {printf} from 'react-redux';

export const homeIndex = (state = initHomeData(), action) => {
    console.log('homeIndex Reducer receive an action：'+ action)
    switch (action.type) {
        case REFRESH_HOMEPAGE:
            return action.data
        default:
            return state
    }
}

initHomeData = () => {
    return {
        status: 200,
        serverTime: new Date().valueOf()
    }
}