import './App.css';
import {People} from "../people/People";
import {Chat} from "../chat/Chat";
import {User} from "../user/User";
import {useDispatch, useSelector} from "react-redux";
import {stateSelector} from "../../store/selectors";
import {useCallback, useEffect} from "react";
import {stateLocalAction} from "../../actions/actions";

function App() {
    const state = useSelector(stateSelector);
    const dispatch = useDispatch();
    const getState = useCallback(() => {
        const stateJson = JSON.stringify(state);
        localStorage.setItem('stateMessage', stateJson);
        const newState = JSON.parse(localStorage.getItem('stateMessage'));
        dispatch(stateLocalAction(newState));
    }, [state, dispatch]);

    useEffect(() => {
        getState();
    }, [getState]);

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
