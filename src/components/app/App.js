import './App.css';
import {People} from "../people/People";
import {Chat} from "../chat/Chat";


function App() {
    return (
        <div className='appl'>
            <div className='components'>
            <People/>
            </div>
            <Chat/>
        </div>
    );
}

export default App;
