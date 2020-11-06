import './App.css';
import {People} from "../people/People";
import {Chat} from "../chat/Chat";


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


    let date = new Date();
    let num = {
        year: 'numeric',
        // month: 'long',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    let string = {
        year: 'numeric',
        month: 'short',
        // month: 'numeric',
        day: 'numeric'
        // hour: 'numeric',
        // minute: 'numeric',
    };

    console.log( date.toLocaleString("en", num) );
    console.log( date.toLocaleString("en", string) );
    // console.log(formatDate(date));
    // console.log(date.toString());



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
