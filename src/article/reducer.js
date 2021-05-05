import * as actionTypes from './actionTypes';
import { initialState } from './constants';

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.SET_ARTICLE:
            return setArticle(state, payload);
        // case actionTypes.SET:
        //     return setUserDetails(state, payload);
        // case actionTypes.RESET_USER:
        //     return resetUser();
        default:
            return state;
    }
}

const setArticle = (state, payload) => {
    return {
        ...state,
        postData: payload,
    };
};

// const setUserDetails = (state, payload) => {

//     return {
//         ...state,
//         details: payload,
//     }
    
// }

// const resetUser = () => {
//     return {
//         email: null,
//         details: null,
//     }
// }