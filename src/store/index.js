import {createStore} from "redux";
import Dodo from '../photo/dodo.png';
import Tete from '../photo/tete.png';
import Ismaili from '../photo/ismaili.png';
import Solomon from '../photo/solomon.png';
import Marlos from '../photo/marlos.png';
import Taison from '../photo/taison.png';

export const initialState = {
    users: [
        {
            // chatId:1,
            userId: 1,
            name: 'Dodo',
            photo: Dodo,
        },
        {
            userId: 2,
            name: 'Tete',
            photo: Tete,
        },
        {
            userId: 3,
            name: 'Ismaili',
            photo: Ismaili,
        },
        {
            userId: 4,
            name: 'Marlos',
            photo: Marlos,
        },
        {
            userId: 5,
            name: 'Solomon',
            photo: Solomon,
        },
        {
            userId: 6,
            name: 'Taison',
            photo: Taison,
        }
    ],
    lastSMS: [
        {
            userId: 1,
            text: 'Cupiditate et quas unde!',
            date: ''
        },
        {
            userId: 3,
            text: 'Lorem ipsum dolor.',
            date: ''
        },
        {
            userId: 5,
            text: 'consectetur adipisicing elit.',
            date: ''
        },
        {
            userId: 4,
            text: '',
            date: ''
        },
        {
            userId: 2,
            text: '',
            date: ''
        },
        {
            userId: 6,
            text: '',
            date: ''
        },
    ],
    messages: [
        {
            userId: 1,
            txt: [
                {
                    text: 'Lorem ipsum dolor sit amet.',
                    date: '',
                    userId: 1
                },
                {
                    text: 'Cupiditate et quas unde!',
                    date: '',
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
                    date: '',
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
                    date: '',
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
    userIdSelected: 1,
    list:[]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_USER' :
            return {...state, userIdSelected: action.payload};
        case 'SEARCH_USER':
            return {...state, list: action.payload};
        case 'SEND_SMS':
            return {...state, messages: action.payload};
            case 'SEND_LAST_SMS':
            return {...state, lastSMS: action.payload};
        default:
            return state;
    }
}
export const store = createStore(reducer);