import React, {useCallback, useRef} from 'react';

import './People.scss';
import Icon from '../../icons/uncknown.jpg';
import Search from '../../icons/search.png';
import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../../store/selectors";
import {peopleAction} from "../../actions/actions";
import Online from "../../icons/online.png";

export const People = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const copyUsers = users.slice();
    const inpRef = useRef();
    const search = useCallback(() => {
        const searchUser = inpRef.current.value;
        if (searchUser.length === 0) {
            dispatch(peopleAction(copyUsers));
        } else {
            const result = copyUsers.filter(value => value.name.toLowerCase().includes(searchUser));
            dispatch(peopleAction(result));
        }
    }, [copyUsers, dispatch]);

    return (
        <div className='people'>
            <div className='info'>
                <img className='icon' src={Icon} alt=""/>
                <img className='online' src={Online} alt="online"/>
            </div>
            <div className='search'>
                <img className='imgSearch' src={Search} alt="pict"/>
                <input type="text" className='searchContact' placeholder='Search or start new chat'
                       onInput={search} ref={inpRef}/>
            </div>
            <div className='chats'>Chats</div>
        </div>
    );
}

