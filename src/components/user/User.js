import React, {useCallback} from 'react';
import './User.scss';
import {useDispatch, useSelector} from "react-redux";
import {peopleSelector} from "../../store/selectors";
import {selectUserAction} from "../../actions/actions";
import Online from "../../icons/online.png";

export const User = () => {
    const dispatch = useDispatch();
    const people = useSelector(peopleSelector);
    const selectUsers = useCallback((id) => {
        dispatch(selectUserAction(id));
    }, [dispatch])

    return (
        people.map(user => {
                return (
                    <div className='user' key={user.userId} onClick={() => selectUsers(user.userId)}>
                        <div className='info'><img className='photo' src={user.photo} alt="pict"/>
                            <img className='online' src={Online} alt="online"/></div>
                        <div className='name'>
                            <div className='nameDate'>
                                <h4>{user.name}</h4>
                                {user.text && <div className='text'>{user.text}</div>}
                            </div>
                            <div className='date'>{user.date}</div>

                        </div>
                    </div>
                )
            }
        )
    );
}

