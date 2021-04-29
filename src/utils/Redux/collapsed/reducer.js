import * as actionTypes from './actionTypes';

const initialState = {
    isCollapsed: false,
};

const setSidebarCollapseStatusReducer = (state, action) => ({
    ...state,
    isCollapsed: action.payload,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SIDEBAR_COLLAPSE_STATE:
            return setSidebarCollapseStatusReducer(state, action);
        case actionTypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
