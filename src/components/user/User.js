import React from 'react';
import './User.css';
import {useDispatch, useSelector} from "react-redux";
import {
    listSortSelector,
} from "../../store/selectors";
import { selectUserAction} from "../../actions/actions";

export const User = () => {







    const dispatch = useDispatch();


    // const users = useSelector(usersSelector);
    // const lastSms = useSelector(lastSMSSelector);
    // const copyUsers = users.slice();
    // const copylastSms = lastSms.slice();
    // const result=copylastSms.map(user => {
    //     const one = lastSms.find(sms => sms.userId === user.userId)
    //     return (
    //         {
    //             userId: user.userId,
    //             name: user.name,
    //             photo: user.photo,
    //             text: one.text,
    //             date: one.date
    //         })
    //     // return result
    //
    // });
    // dispatch(allUserAction(result));
    const list = useSelector(listSortSelector);



    // const lastSMS = useSelector(lastSMSSelector);
    // const lastSMSSort = useSelector(lastSmsSortSelector);
    // console.log(lastSMS);
    // console.log(lastSMSSort);
    // const list = useSelector(listSortSelector);
    // console.log(list);
    // const dispatch = useDispatch();
    const selectUsers = (id) => {
        dispatch(selectUserAction(id));
    };
    const render = () => {
        // console.log(list);
        return (
            list.map(user => {
                    // const one = lastSMS.filter(sms => sms.userId === user.userId)
                    return (
                        <div className='user' key={user.userId} onClick={() => selectUsers(user.userId)}>
                            <img src={user.photo} alt=""/>
                            <div className='name'>
                                <div>{user.name}</div>
                                {/*{one.length !== 0 && <p>{one[0].text}</p>}*/}
                                {/*<div className='date'>{one[0].date}</div> */}
                                {user.text && <p>{user.text}</p>}
                                <div className='date'>{user.date}</div>
                            </div>
                        </div>
                    )
                }
            )
        )
    }

    return (
        <div className='users'>
            {render()}
        </div>
    );

}

