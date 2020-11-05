import './App.css';
import {People} from "../people/People";
import {Chat} from "../chat/Chat";
import {User} from "../user/User";

function App() {
    return (
        <div className='appl'>
            <div className='components'>
            <People/>
            {/*<User/>*/}
            </div>
            <Chat/>

        </div>
    );
}

export default App;
