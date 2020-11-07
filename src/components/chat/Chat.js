import React, {useRef} from 'react';
import '../chat/Chat.css';
import {useDispatch, useSelector} from "react-redux";
import {
    smsByIdSelector, smsSelector,
    userByIdSelector, usersSelector,

} from "../../store/selectors";
import {peopleAction, SearchUserAction, sendSmsAction} from "../../actions/actions";
import {number, string} from "../../constants/constants";

export const Chat = () => {
    const userById = useSelector(userByIdSelector);
    const copyUserByID = {...userById};
    const smsById = useSelector(smsByIdSelector);
    const copySmsById = JSON.parse(JSON.stringify(smsById));
    const messages = useSelector(smsSelector);
    const copyAllSms = messages.slice();
    const anotherSms = copyAllSms.filter(value => value.userId !== copyUserByID.userId);
    const users = useSelector(usersSelector);
    const copyUsers = users.slice();
    const anotherUsers = copyUsers.filter(value => value.userId !== copyUserByID.userId);
    const inputRef = useRef();
    const dispatch = useDispatch();
    const send = () => {
        const sms = inputRef.current.value;
        const date = new Date();
        copySmsById.txt.push({
            text: sms,
            date: date.toLocaleString("en", number),
            userId: 0
        });
        const resultForAllSms = [...anotherSms, copySmsById];
        dispatch(sendSmsAction(resultForAllSms));
        copyUserByID.text = sms;
        copyUserByID.date = date.toLocaleString("en", string);
        const resultForUsers = [copyUserByID, ...anotherUsers];
        dispatch(SearchUserAction(resultForUsers));
        dispatch(peopleAction(resultForUsers));
        inputRef.current.value = '';
        getJoke();
    };
    const getJoke = () => {
        setTimeout(async () => {
            try {
                const date = new Date();
                const request = await fetch('https://api.chucknorris.io/jokes/random');
                const result = await request.json();
                const {value: answer} = result;
                copySmsById.txt.push({
                    text: answer,
                    date: date.toLocaleString("en", number),
                    userId: copySmsById.userId
                });
                const resultForAllSms = [...anotherSms, copySmsById];
                dispatch(sendSmsAction(resultForAllSms));
                copyUserByID.text = answer;
                copyUserByID.date = date.toLocaleString("en", string);
                const resultForUsers = [copyUserByID, ...anotherUsers];
                dispatch(SearchUserAction(resultForUsers));
                dispatch(peopleAction(resultForUsers));
            } catch (e) {
                console.log(e);
            }
        }, Math.floor(Math.random() * 5000) + 10000)
    }

    return (
        <div className='chat'>
            <div className='header'>
                <img src={userById.photo} alt=""/>
                <h4>{userById.name}</h4>
            </div>
            <div className='main'>
                {
                    smsById.txt.map((value, index) => {
                        return (
                            value.text !== '' &&
                            <div key={index} className={`message ${value.userId === 0 && 'flexEnd'}`}>
                                {value.userId !== 0 && <img src={userById.photo} alt=""/>}
                                <div className={`${value.userId !== 0 ? 'hisSms' : 'mySms'}`}>{value.text}</div>
                                <div className='date'>{value.date}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='footer'>
                <input type="text" placeholder='Type yor message' ref={inputRef}/>
                <button onClick={send}>ok</button>
            </div>
        </div>
    );
}

