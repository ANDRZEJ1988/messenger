import React from 'react';

import './People.css';
import Icon from '../../icons/uncknown.jpg';
import Search from '../../icons/search.png';
import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../../store/selectors";
import {SearchUserAction} from "../../actions/actions";
import {initialState} from "../../store";
import {User} from "../user/User";

export const People = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    dispatch(SearchUserAction(users));
    const search = (event) => {
        const searchUser = event.target.value;
        const copy = users.slice();
        if (searchUser.length === 0) {
            dispatch(SearchUserAction(initialState.users));
        } else {
            const result = copy.filter(value => value.name.toLowerCase().includes(searchUser));
            dispatch(SearchUserAction(result));
        }
    };

    return (
        <div className='people'>
            <div className='i'>
                <img className='icon' src={Icon} alt=""/>
                <img src={Search} alt=""/>
                <input type="text" className='serchContact' placeholder='Search or start new chat'
                       onInput={search}/>
            </div>
            <div className='chats'>Chats</div>
            <User/>
        </div>
    );

}

