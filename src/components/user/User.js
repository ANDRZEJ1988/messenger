import React from 'react';
import './User.css';
import {useDispatch, useSelector} from "react-redux";
import {lastSMSSelector, listSelector} from "../../store/selectors";
import {selectUserAction} from "../../actions/actions";

export const User = () => {
    const lastSMS = useSelector(lastSMSSelector);
    const list = useSelector(listSelector);
    const dispatch = useDispatch();
    const selectUsers = (id) => {
        dispatch(selectUserAction(id));
    };
    const render = () => {
        return (
            list.map(user => {
                    const one = lastSMS.filter(sms => sms.userId === user.userId)
                    return (
                        <div className='user' key={user.userId} onClick={() => selectUsers(user.userId)}>
                            <img src={user.photo} alt=""/>
                            <div className='name'>
                                <div>{user.name}</div>
                                {one.length !== 0 && <p>{one[0].text}</p>}
                                <div className='date'>{one[0].date}</div>
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

