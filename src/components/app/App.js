import './App.css';
import {People} from "../people/People";
import {Chat} from "../chat/Chat";
import {User} from "../user/User";
import {useDispatch, useSelector} from "react-redux";
import {lastSMSSelector, usersSelector} from "../../store/selectors";
import {allUserAction, peopleAction, SearchUserAction} from "../../actions/actions";


function App() {
    // const dispatch = useDispatch();
    // const users = useSelector(usersSelector);
    // dispatch(SearchUserAction(users));



    // const dispatch = useDispatch();
    // const users = useSelector(usersSelector);
    // const lastSms = useSelector(lastSMSSelector);
    // const copyUsers = users.slice();
    // const copyLastSms = lastSms.slice();
    // const result=copyUsers.map(user => {
    //     const one = copyLastSms.find(sms => sms.userId === user.userId)
    //     return (
    //         {
    //             userId: user.userId,
    //             name: user.name,
    //             photo: user.photo,
    //             text: one.text,
    //             date: one.date
    //         })
    //
    // });
    // dispatch(allUserAction(result));
    // dispatch(peopleAction(result));

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
