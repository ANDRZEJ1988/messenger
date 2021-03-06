import {LOCAL_STATE, PEOPLE, SEARCH_USER, SELECT_USER, SEND_SMS} from "./action-types";

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

export const peopleAction = (user) => {
    return ({
        type: PEOPLE,
        payload: user
    })
};
export const sendSmsAction = (list) => {
    return ({
        type: SEND_SMS,
        payload: list
    })
};
export const stateLocalAction = (state) => {
    return ({
        type: LOCAL_STATE,
        payload: state
    })
};

