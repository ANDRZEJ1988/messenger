import React, {useRef, useState} from 'react';
import '../chat/Chat.css';
import {useDispatch, useSelector} from "react-redux";
import {chatSelector, listSelector, smsByIdSelector} from "../../store/selectors";
import {sendSmsAction} from "../../actions/actions";

export const Chat = () => {
    const list = useSelector(listSelector);
    const chat = useSelector(chatSelector);
    // console.log(list);
    // console.log(chat);
    // const [id, setId]=useState(list.id);
    // setId(list.id);
    const smsByID=useSelector(smsByIdSelector(list.id));
    // console.log(smsByID);
    // console.log(smsByID[0].txt);
    const dispatch=useDispatch();
    // console.log(chat);
    const inputRef = useRef();
    const getJoke= (smsFromList)=>{
        setTimeout( async ()=>{
            const request= await fetch('https://api.chucknorris.io/jokes/random');
            const result=await  request.json();
        const { value: answer}=result;
        console.log(answer);
            smsFromList.push({text: answer, date:'', id: list.id});
            const res={
                name: list.name,
                photo: list.photo,
                id: list.id,
                sms:smsFromList
            };
            dispatch(sendSmsAction(res));
        },10000)
    }
    const send = () => {
        let inpVal = inputRef.current.value;
        console.log(inpVal);
        const copy=chat.slice();

        copy.push({text: inpVal, date:'', id: 0});
        // console.log(copy);
        // console.log(list);
        // console.log(list.name);
        // console.log(list.photo);
        const resultForList={
            name: list.name,
            photo: list.photo,
            id: list.id,
            sms:copy
        };
        // console.log(resultForList);
        const resultForSms='';
        // console.log(result);
        dispatch(sendSmsAction(resultForList));
        // setTimeout(getJoke(),10000);
        getJoke(copy);
        inputRef.current.value = '';
    };

    return (
        <div className='chat'>
            <div className='header'>
                <img src={list.photo} alt=""/>
                <h4>{list.name}</h4>
            </div>
            <div className='main'>
                {
                    chat.map((value, index) => {
                        return (
                            <div key={index} className={`message ${value.id === 0 && 'flexEnd'}`}>
                                {value.id !== 0 && <img src={list.photo} alt=""/>}
                                <div className={`${value.id !== 0 ? 'hisSms' : 'mySms'}`}>{value.text}</div>
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

