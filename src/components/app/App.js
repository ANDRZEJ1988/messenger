import './App.css';
import {People} from "../people/People";
import {Chat} from "../chat/Chat";
import {User} from "../user/User";
import {useDispatch, useSelector} from "react-redux";
import {lastSMSSelector, usersSelector} from "../../store/selectors";
import {allUserAction, peopleAction} from "../../actions/actions";
// import {useEffect} from "react";


function App() {

    //
    // function formatDate(date) {
    //
    //     let dd = date.getDate();
    //     if (dd < 10) dd = '0' + dd;
    //
    //     let mm = date.getMonth()+1;
    //     // let mm = date.getMonth() + 1;
    //     // if (mm < 10) mm = '0' + mm;
    //
    //     let yy = date.getFullYear() ;
    //     // if (yy < 10) yy = '0' + yy;
    //
    //     return dd + '/' + mm + '/' + yy;
    // };


    // let date = new Date(2019, 5, 23, 21, 0);
    // let num = {
    //     year: 'numeric',
    //     // month: 'long',
    //     month: 'numeric',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    // };
    // let string = {
    //     year: 'numeric',
    //     month: 'short',
    //     // month: 'numeric',
    //     day: 'numeric'
    //     // hour: 'numeric',
    //     // minute: 'numeric',
    // };

    // console.log( date);
    // console.log( typeof(date));
    // console.log( Object.keys(date));
    // console.log( Object.values(date));
    // console.log( date.toLocaleString("en", num) );
    // console.log( date.toLocaleString("en", string) );
    // console.log(formatDate(date));
    // console.log(date.toString());

    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const lastSms = useSelector(lastSMSSelector);
    const copyUsers = users.slice();
    const copyLastSms = lastSms.slice();
    const result=copyUsers.map(user => {
        const one = copyLastSms.find(sms => sms.userId === user.userId)
        return (
            {
                userId: user.userId,
                name: user.name,
                photo: user.photo,
                text: one.text,
                date: one.date
            })

    });
    dispatch(allUserAction(result));
    dispatch(peopleAction(result));



// useEffect(()=>{
//     const result=copyUsers.map(user => {
//         const one = copyLastSms.find(sms => sms.userId === user.userId)
//         return (
//             {
//                 userId: user.userId,
//                 name: user.name,
//                 photo: user.photo,
//                 text: one.text,
//                 date: one.date
//             })
//
//     });
//     // dispatch(allUserAction(result));
//     // dispatch(peopleAction(result));
// });


    return (
        <div className='appl'>
            <div className='components'>
                <People/>
                <User/>
            </div>
            <Chat/>
        </div>
    );
}

export default App;
