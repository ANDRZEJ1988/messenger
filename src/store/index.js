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
        },
        {
            userId: 2,
            name: 'Tete',
            photo: Tete,
            text: 'Lorem ipsum dolor.',
            date: date3.toLocaleString("en", number),
        },
        {
            userId: 3,
            name: 'Ismaili',
            photo: Ismaili,
            text: 'consectetur adipisicing elit.',
            date: date4.toLocaleString("en", string),
        },
        {
            userId: 4,
            name: 'Marlos',
            photo: Marlos,
            text: '',
            date: '',
        },
        {
            userId: 5,
            name: 'Solomon',
            photo: Solomon,
            text: '',
            date: '',
        },
        {
            userId: 6,
            name: 'Taison',
            photo: Taison,
            text: '',
            date: '',
        }
    ],
    people: [
        {
            userId: 1,
            name: 'Dodo',
            photo: Dodo,
            text: 'Cupiditate et quas unde!',
            date: date1.toLocaleString("en", string),
        },
        {
            userId: 2,
            name: 'Tete',
            photo: Tete,
            text: 'Lorem ipsum dolor.',
            date: date3.toLocaleString("en", number),
        },
        {
            userId: 3,
            name: 'Ismaili',
            photo: Ismaili,
            text: 'consectetur adipisicing elit.',
            date: date4.toLocaleString("en", string),
        },
        {
            userId: 4,
            name: 'Marlos',
            photo: Marlos,
            text: '',
            date: '',
        },
        {
            userId: 5,
            name: 'Solomon',
            photo: Solomon,
            text: '',
            date: '',
        },
        {
            userId: 6,
            name: 'Taison',
            photo: Taison,
            text: '',
            date: '',
        }
    ],

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
                {
                    text: 'Lorem ipsum dolor.',
                    date: date3.toLocaleString("en", number),
                    userId: 0
                }
            ]
        },
        {
            userId: 3,
            txt: [
                {
                    text: 'consectetur adipisicing elit.',
                    date: date4.toLocaleString("en", number),
                    userId: 5
                }
            ]
        },
        {
            userId: 4,
            txt: []
        },
        {
            userId: 5,
            txt: []
        },
        {
            userId: 6,
            txt: []
        },
    ],
    userIdSelected: 1,

};
// localStorage.removeItem('stateMessage');
const getStore = () => {
    if (localStorage.getItem('stateMessage') !== null) {
        return JSON.parse(localStorage.getItem('stateMessage'))
    } else {
        const stateJson = JSON.stringify(initialState);
        localStorage.setItem('stateMessage', stateJson);
        return JSON.parse(localStorage.getItem('stateMessage'))
    }
};

export const reducer = (state = getStore(), action) => {
    switch (action.type) {
        case 'LOCAL_STATE' :
            return state;
        case 'SELECT_USER' :
            return {...state, userIdSelected: action.payload};
        case 'SEARCH_USER':
            return {...state, users: action.payload};
        case 'PEOPLE':
            return {...state, people: action.payload};
        case 'SEND_SMS':
            return {...state, messages: action.payload};
        default:
            return state;
    }
}
export const store = createStore(reducer);

