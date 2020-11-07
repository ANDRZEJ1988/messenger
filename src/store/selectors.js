import {createSelector} from "reselect";

export const usersSelector = state => state.users;
export const userIdSelectedSelector = state => state.userIdSelected;
export const userByIdSelector = createSelector(
    usersSelector,
    userIdSelectedSelector,
    (users, id) => (users.find(value => value.userId === id)
    )
);





export const userSortSelector = createSelector(
    usersSelector,
    (users) => (users.sort((a, b)=>
        {
        if (a.dateNum>b.dateNum){return -1}
        else return 1
        })
    )
    // (users) => (users.sort((a, b)=>
    //         a.date-b.date)
    // )
);


export const lastSMSSelector=state=>state.lastSMS;


export const smsSelector = state => state.messages;
export const smsByIdSelector = createSelector(
    smsSelector,
    userIdSelectedSelector,
    (sms, id) => (sms.find(value => value.userId === id)
    )
);
export const lastSmsByIdSelector = createSelector(
    lastSMSSelector,
    userIdSelectedSelector,
    (lastSms, id) => (lastSms.find(sms => sms.userId === id)
    )
);

export const listSelector = state => state.list;
export const peopleSelector = state => state.people;

// export const usersSortSelector = createSelector(
//     usersSelector,
//     lastSMSSelector,
//     (users, lastSms) => (users.map(user=>{
//         const filterSms=lastSms.filter()
//         })
//     )
// );






export const chatSelector = createSelector(
    listSelector,
    (list) => (list.sms)
);
export const userByNameSelector = createSelector(
    usersSelector,
    (users) => (users.slice().sort((a, b) => a.name > b.name ? 1 : -1))
);


