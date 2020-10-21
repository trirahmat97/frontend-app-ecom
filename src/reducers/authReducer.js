import { SIGN_IN, SIGN_OUT } from '../actions/type';

const INITIAL_STATE = {
    isLogin: false,
    user: {}
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isLogin: true, user: action.payload };
        case SIGN_OUT:
            return { ...state, isLogin: false, user: {} };
        default:
            return state;
    }
}