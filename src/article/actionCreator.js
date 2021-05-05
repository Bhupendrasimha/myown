import * as actionTypes from './actionTypes';

export function setArticle(payload) {
    return {
        type: actionTypes.SET_ARTICLE,
        payload,
    };
}

export function getArticle(payload) {
    return {
        type: actionTypes.GET_ARTICLE,
        payload,
    }
}

export function editArticle() {
    return {
        type: actionTypes.EDIT_ARTICLE,

    }
}