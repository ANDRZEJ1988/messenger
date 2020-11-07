import {createStore} from "redux";
import Dodo from '../photo/dodo.png';
import Tete from '../photo/tete.png';
import Ismaili from '../photo/ismaili.png';
import Solomon from '../photo/solomon.png';
import Marlos from '../photo/marlos.png';
import Taison from '../photo/taison.png';
import {number, string} from "../constants/constants";

const date1 = new Date(0, 5, 21, 9, 15);
const date2 = new Date(2019, 5, 23, 21, 0);
const date3 = new Date(2005, 1, 1, 14, 22);
const date4 = new Date(2020, 1, 1, 14, 0);

export const initialState = {
    users: [
        {
            userId: 1,
            name: 'Dodo',
            photo: Dodo,
            text: 'Cupiditate et quas unde!',
            date: date1.toLocaleString("en", string),
            // dateNum: date1.toLocaleString("en", number),
            // dates:date1
        },
        {
            userId: 2,
            name: 'Tete',
            photo: Tete,
            text: '',
            date: '',
            // dateNum:''
        },
        {
            userId: 3,
            name: 'Ismaili',
            photo: Ismaili,
            text: 'Lorem ipsum dolor.',
            date: date3.toLocaleString("en", string),
            // dateNum: date3.toLocaleString("en", number)
        },
        {
            userId: 4,
            name: 'Marlos',
            photo: Marlos,
            text: '',
            date: '',
            // dateNum:''
        },
        {
            userId: 5,
            name: 'Solomon',
            photo: Solomon,
            text: 'consectetur adipisicing elit.',
            date: date4.toLocaleString("en", string),
            // dateNum: date4.toLocaleString("en", number)
        },
        {
            userId: 6,
            name: 'Taison',
            photo: Taison,
            text: '',
            date: '',
            // dateNum:''
        }
    ],
    // lastSMS: [
    //     {
    //         userId: 1,
    //         text: 'Cupiditate et quas unde!',
    //         date: date2.toLocaleString("en", string),
    //         dateNum: date2.toLocaleString("en", number),
    //     },
    //     {
    //         userId: 3,
    //         text: 'Lorem ipsum dolor.',
    //         date: date3.toLocaleString("en", string),
    //         dateNum: date3.toLocaleString("en", number)
    //     },
    //     {
    //         userId: 5,
    //         text: 'consectetur adipisicing elit.',
    //         date: date4.toLocaleString("en", string),
    //         dateNum: date4.toLocaleString("en", number)
    //     },
    //     {
    //         userId: 4,
    //         text: '',
    //         date: '',
    //         dateNum:''
    //     },
    //     {
    //         userId: 2,
    //         text: '',
    //         date: '',
    //         dateNum:''
    //     },
    //     {
    //         userId: 6,
    //         text: '',
    //         date: '',
    //         dateNum:''
    //     },
    // ],
    messages: [
        {
            userId: 1,
            txt: [
                {
                    text: 'Lorem ipsum dolor sit amet.',
                    date: date1.toLocaleString("en", number),
                    userId: 1
                },
                {
                    text: 'Cupiditate et quas unde!',
                    date: date2.toLocaleString("en", number),
                    userId: 0
                }
            ]
        },
        {
            userId: 2,
            txt: [
                // {
                //     text: '',
                //     date: '',
                //     userId: 2
                // }
            ]
        },
        {
            userId: 3,
            txt: [
                {
                    text: 'Lorem ipsum dolor.',
                    date: date3.toLocaleString("en", number),
                    userId: 0
                }
            ]
        },
        {
            userId: 4,
            txt: [
                {
                    text: '',
                    date: '',
                    userId: 4
                }
            ]
        },
        {
            userId: 5,
            txt: [
                {
                    text: 'consectetur adipisicing elit.',
                    date: date4.toLocaleString("en", number),
                    userId: 5
                }
            ]
        },
        {
            userId: 6,
            txt: [
                {
                    text: '',
                    date: '',
                    userId: 6
                }
            ]
        }
    ],
    userIdSelected:1,
    list: '',
    people: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_USER' :
            return {...state, userIdSelected: action.payload};
        case 'SEARCH_USER':
            return {...state, users: action.payload};
        case 'ALL_USER':
            return {...state, list: action.payload};
        case 'PEOPLE':
            return {...state, people: action.payload};
        case 'SEND_SMS':
            return {...state, messages: action.payload};
        // case 'SEND_LAST_SMS':
        //     return {...state, lastSMS: action.payload};
        default:
            return state;
    }
}
export const store = createStore(reducer);

