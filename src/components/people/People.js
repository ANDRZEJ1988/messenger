import React from 'react';

import './People.css';
import Icon from '../../icons/uncknown.jpg';
import Search from '../../icons/search.png';
import {useDispatch, useSelector} from "react-redux";
import { listSortSelector, peopleSelector} from "../../store/selectors";
import { SearchUserAction} from "../../actions/actions";
// import {initialState} from "../../store";


export const People = () => {
    const dispatch = useDispatch();
    const list=useSelector(listSortSelector);
    const copyList=list.slice();
    const people=useSelector(peopleSelector);
    // const users = useSelector(usersSelector);
    // const lastSms = useSelector(lastSMSSelector);
    // const copy = users.slice();
    // const result=copy.map(user => {
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
    // dispatch(SearchUserAction(result));








    const search = (event) => {
        const searchUser = event.target.value;
        // const copy = list.slice();
        if (searchUser.length === 0) {
            dispatch(SearchUserAction(people));
            // dispatch(SearchUserAction(copyList));
        } else {
            const result = copyList.filter(value => value.name.toLowerCase().includes(searchUser));
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
            {/*<User/>*/}
        </div>
    );

}

