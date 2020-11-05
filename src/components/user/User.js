import React from 'react';
import './User.css';
import {useDispatch, useSelector} from "react-redux";
import {lastSMSSelector, smsSelector, usersSelector} from "../../store/selectors";
import {selectUserAction} from "../../actions/actions";

export const User = () => {
    const lastSMS = useSelector(lastSMSSelector);
    const users = useSelector(usersSelector);
    const dispatch=useDispatch();
    const selectUsers=(id)=>{
        console.log(id);
        dispatch(selectUserAction(id));
    };
    const render = () => {
        return (
            lastSMS.map(sms => {
                const findUser = users.find(user => {
                    return (user.userId === sms.userId)
                });
                // onClick={() => selectUser(valueUser, message.txt)}
                // console.log(sms);
                return (
                    <div className='user' key={sms.userId}  onClick={() => selectUsers(sms.userId)}>
                        <img src={findUser.photo} alt=""/>
                        <div className='name'>
                            <div>{findUser.name}</div>
                            <p>{sms.text}</p>
                        </div>
                    </div>
                );
            })
        )
    }

    return (
        <div className='users'>
            {render()}
        </div>
    );

}

