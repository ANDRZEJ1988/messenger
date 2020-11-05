import {createSelector} from "reselect";

export const usersSelector = state => state.users;
export const smsSelector = state => state.sms;
export const listSelector = state => state.list;
export const chatSelector = createSelector(
    listSelector,
    (list) => (list.sms)
);
export const userByNameSelector = createSelector(
    usersSelector,
    (users) => (users.slice().sort((a, b) => a.name > b.name ? 1 : -1))
);
export const smsByIdSelector = (id) => createSelector(
    smsSelector,
    (sms) => (sms.filter(value => value.id === id)
    )
);