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
        // {
        //     userId: 1,
        //     text: 'Cupiditate et quas unde!',
        //     date: ''
        // },
        // {
        //     userId: 3,
        //     text: 'Lorem ipsum dolor.',
        //     date: ''
        // },
        // {
        //     userId: 5,
        //     text: 'consectetur adipisicing elit.',
        //     date: ''
        // },
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
                {
                    text: '',
                    date: '',
                    userId: 2
                }
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
}
// export const initialState = {
//     users: [
//         {
//             name: 'Dodo',
//             id: 1,
//             photo: Dodo,
//         },
//         {
//             name: 'Tete',
//             id: 2,
//             photo: Tete,
//         },
//         {
//             name: 'Ismaili',
//             id: 3,
//             photo: Ismaili,
//         },
//         {
//             name: 'Marlos',
//             id: 4,
//             photo: Marlos,
//         },
//         {
//             name: 'Solomon',
//             id: 5,
//             photo: Solomon,
//         },
//         {
//             name: 'Taison',
//             id: 6,
//             photo: Taison,
//         }
//     ],
//     sms: [
//         {
//             id: 1,
//             txt: [
//                 {
//                     text: 'Lorem ipsum dolor sit amet.',
//                     date: '',
//                     id:1
//                 },
//                 {
//                     text: 'Cupiditate et quas unde!',
//                     date: '',
//                     id:0
//                 }
//             ]
//         },
//         {
//             id: 2,
//             txt: [
//                 {
//                     text: '',
//                     date: '',
//                     id:2
//                 }
//             ]
//         },
//         {
//             id: 3,
//             txt: [
//                 {
//                     text: 'Lorem ipsum dolor.',
//                     date: '',
//                     id:0
//                 }
//             ]
//         },
//         {
//             id: 4,
//             txt: [
//                 {
//                     text: '',
//                     date: '',
//                     id:4
//                 }
//             ]
//         },
//         {
//             id: 5,
//             txt: [
//                 {
//                     text: 'consectetur adipisicing elit.',
//                     date: '',
//                     id:5
//                 }
//             ]
//         },
//         {
//             id: 6,
//             txt: [
//                 {
//                     text: '',
//                     date: '',
//                     id:6
//                 }
//             ]
//         },
//
//     ],
//     list: {
//         name: 'Dodo',
//         photo: Dodo,
//         id: 1,
//         sms: [
//             {
//                 text: 'Lorem ipsum dolor sit amet.',
//                 date: '',
//                 id: 1
//             },
//             {
//                 text: 'Cupiditate et quas unde!',
//                 date: '',
//                 id: 0
//             },
//
//         ]
//     }
// }

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_USER' :
            return {...state, userIdSelected: action.payload};
        case 'SEARCH_USER':
            return {...state, users: action.payload};
        case 'SEND_SMS':
            return {...state, list: action.payload};
        default:
            return state;
    }
}
export const store = createStore(reducer);