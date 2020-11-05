import React from 'react';

import './People.css';
import Icon from '../../icons/uncknown.jpg';
import Search from '../../icons/search.png';
import {useDispatch, useSelector} from "react-redux";
import {smsSelector, userByNameSelector} from "../../store/selectors";
import {SearchtUserAction, selectUserAction} from "../../actions/actions";
import {initialState} from "../../store";
import {User} from "../user/User";

export const People = () => {
    const {users: initialUsers} = initialState;
    const dispatch = useDispatch();
    const users = useSelector(userByNameSelector);
    const sms = useSelector(smsSelector);
    const selectUser = (user, text) => {
        const list = {
            name: user.name,
            photo: user.photo,
            sms: text
        };
        dispatch(selectUserAction(list));
    };
    const search = (event) => {
        const searchUser = event.target.value;
        const copy = users.slice();
        if (searchUser.length === 0) {
            dispatch(SearchtUserAction(initialUsers));
        } else {
            const result = copy.filter(value => value.name.toLowerCase().includes(searchUser));
            dispatch(SearchtUserAction(result));
        }
    }

    const render = () => {
        return (
            users.map(valueUser => {
                const message = sms.find(valueSMS => {
                    return valueSMS.id === valueUser.id
                });
                return (
                    <div className='user' key={valueUser.id} onClick={() => selectUser(valueUser, message.txt)}>
                        <img src={valueUser.photo} alt=""/>
                        <div className='name'>
                            <div>{valueUser.name}</div>
                            <p>{message.txt[message.txt.length - 1].text}</p>
                        </div>
                    </div>
                )
            })
        )
    };

    return (
        <div className='people'>
            <div className='i'>
                <img className='icon' src={Icon} alt=""/>
                <img src={Search} alt=""/>
                <input type="text" className='serchContact' placeholder='Search or start new chat'
                       onInput={(event) => search(event)}/>
            </div>
            <div className='chats'>Chats</div>
            {/*<div>*/}
            {/*    <User/>*/}
            {/*</div>*/}

            {/*<div className='usersBox'>{render()}</div>*/}
            <User/>
        </div>
    );

}

