import {SEARCH_USER, SELECT_USER, SEND_LAST_SMS, SEND_SMS} from "./action-types";

export const selectUserAction = (id) => {
    return ({
        type: SELECT_USER,
        payload: id
    })
};
export const SearchUserAction = (user) => {
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
export const sendLastSmsAction = (list) => {
    return ({
        type: SEND_LAST_SMS,
        payload: list
    })
};
