import React from 'react';
import './User.css';
import {useDispatch, useSelector} from "react-redux";
import {
    peopleSelector,
} from "../../store/selectors";
import {selectUserAction} from "../../actions/actions";

export const User = () => {
    const dispatch = useDispatch();
    const people = useSelector(peopleSelector);
    const selectUsers = (id) => {
        dispatch(selectUserAction(id));
    };
    const render = () => {
        return (
            people.map(user => {
                    return (
                        <div className='user' key={user.userId} onClick={() => selectUsers(user.userId)}>
                            <img src={user.photo} alt=""/>
                            <div className='name'>
                                <div>{user.name}</div>
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

