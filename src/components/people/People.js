import React from 'react';

import './People.css';
import Icon from '../../icons/uncknown.jpg';
import Search from '../../icons/search.png';
import {useDispatch, useSelector} from "react-redux";
import { usersSelector} from "../../store/selectors";
import {peopleAction} from "../../actions/actions";

export const People = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const copyUsers = users.slice();
    const search = (event) => {
        const searchUser = event.target.value;
        if (searchUser.length === 0) {
            dispatch(peopleAction(copyUsers));
        } else {
            const result = copyUsers.filter(value => value.name.toLowerCase().includes(searchUser));
            dispatch(peopleAction(result));
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
        </div>
    );
}

