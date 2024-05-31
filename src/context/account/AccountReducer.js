import { LOGGIN, LOGOUT, SET_LOGGED } from "../types";

export default (state, action) => {
    switch (action.type) {
        case LOGGIN:
            return {
                ...state,
                account: action.payload,
            };
        case SET_LOGGED:
            return {
                ...state,
                isLogged: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
            };
        default:
            return state;
    }
}