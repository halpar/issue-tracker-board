import * as actionTypes from './actionTypes';

export const setSidebarCollapseState = (data) => ({
    type: actionTypes.SET_SIDEBAR_COLLAPSE_STATE,
    payload: data,
});

export const resetState = () => ({ type: actionTypes.RESET });
