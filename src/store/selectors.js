import {createSelector} from "reselect";

export const stateSelector=state=>state;
export const usersSelector = state => state.users;
export const userIdSelectedSelector = state => state.userIdSelected;
export const userByIdSelector = createSelector(
    usersSelector,
    userIdSelectedSelector,
    (users, id) => (users.find(value => value.userId === id)
    )
);
export const smsSelector = state => state.messages;
export const smsByIdSelector = createSelector(
    smsSelector,
    userIdSelectedSelector,
    (sms, id) => (sms.find(value => value.userId === id)
    )
);
export const peopleSelector = state => state.people;

