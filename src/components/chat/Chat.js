import React, {useRef} from 'react';
import '../chat/Chat.css';
import {useDispatch, useSelector} from "react-redux";
import {
    lastSmsByIdSelector, lastSMSSelector,
    smsByIdSelector, smsSelector,
    userByIdSelector,

} from "../../store/selectors";
import {sendLastSmsAction, sendSmsAction} from "../../actions/actions";

export const Chat = () => {
    const userById = useSelector(userByIdSelector);
    const smsById = useSelector(smsByIdSelector);
    const messages = useSelector(smsSelector);
    const lastSmsById = useSelector(lastSmsByIdSelector);
    const lastSMS = useSelector(lastSMSSelector);
    const inputRef = useRef();
    const dispatch = useDispatch();
    const send = () => {
        const copy = JSON.parse(JSON.stringify(smsById));
        const sms = inputRef.current.value;
        copy.txt.push({
            text: sms,
            date: '',
            userId: 0
        });
        const copyAllSms = messages.slice();
        const anotherSms = copyAllSms.filter(value => value.userId !== copy.userId);
        anotherSms.push(copy);
        dispatch(sendSmsAction(anotherSms));
        const copyLastSmsById = JSON.parse(JSON.stringify(lastSmsById));
        copyLastSmsById.text = sms;
        const anotherLastSms = lastSMS.filter(value => value.userId !== copyLastSmsById.userId);
        anotherLastSms.push(copyLastSmsById);
        dispatch(sendLastSmsAction(anotherLastSms));
        inputRef.current.value = '';

    };

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

