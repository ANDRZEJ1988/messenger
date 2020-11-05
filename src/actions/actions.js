import {SEARCH_USER, SELECT_USER, SEND_SMS} from "./action-types";

export const selectUserAction = (user) => {
    return ({
        type: SELECT_USER,
        payload: user
    })
};
export const SearchtUserAction = (user) => {
    return ({
        type: SEARCH_USER,
        payload: user
    })
};
export const sendSmsAction = (list) => {
    return ({
        type: SEND_SMS,
        payload: list
    })
};
