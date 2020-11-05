import {createStore} from "redux";
import Dodo from '../photo/dodo.png';
import Tete from '../photo/tete.png';
import Ismaili from '../photo/ismaili.png';
import Solomon from '../photo/solomon.png';
import Marlos from '../photo/marlos.png';
import Taison from '../photo/taison.png';

// const initialState = {
//     users: [
//         {
//             name: 'Dodo',
//             id: 1,
//             photo: Dodo,
//             sms: [
//                 {
//                     text: 'Lorem ipsum dolor sit amet.',
//                     date: ''
//                 },
//                 {
//                     text: 'Cupiditate et quas unde!',
//                     date: ''
//                 }
//             ]
//         },
//         {
//             name: 'Tete',
//             id: 2,
//             photo: Tete,
//             sms: []
//         },
//         {
//             name: 'Ismaili',
//             id: 3,
//             photo: Ismaili,
//             sms: [
//                 {
//                     text: 'Lorem ipsum dolor.',
//                     date: ''
//                 }
//             ]
//         },
//         {
//             name: 'Marlos',
//             id: 4,
//             photo: Marlos,
//             sms: []
//         },
//         {
//             name: 'Solomon',
//             id: 5,
//             photo: Solomon,
//             sms: [
//                 {
//                     text: 'consectetur adipisicing elit.',
//                     date: ''
//                 }
//             ]
//         },
//         {
//             name: 'Taison',
//             id: 6,
//             photo: Taison,
//             sms: []
//         }
//     ];
export const initialState = {
    users: [
        {
            name: 'Dodo',
            id: 1,
            photo: Dodo,
        },
        {
            name: 'Tete',
            id: 2,
            photo: Tete,
        },
        {
            name: 'Ismaili',
            id: 3,
            photo: Ismaili,
        },
        {
            name: 'Marlos',
            id: 4,
            photo: Marlos,
        },
        {
            name: 'Solomon',
            id: 5,
            photo: Solomon,
        },
        {
            name: 'Taison',
            id: 6,
            photo: Taison,
        }
    ],
    sms: [
        {
            id: 1,
            txt: [
                {
                    text: 'Lorem ipsum dolor sit amet.',
                    date: '',
                    id:1
                },
                {
                    text: 'Cupiditate et quas unde!',
                    date: '',
                    id:0
                }
            ]
        },
        {
            id: 2,
            txt: [
                {
                    text: '',
                    date: '',
                    id:2
                }
            ]
        },
        {
            id: 3,
            txt: [
                {
                    text: 'Lorem ipsum dolor.',
                    date: '',
                    id:0
                }
            ]
        },
        {
            id: 4,
            txt: [
                {
                    text: '',
                    date: '',
                    id:4
                }
            ]
        },
        {
            id: 5,
            txt: [
                {
                    text: 'consectetur adipisicing elit.',
                    date: '',
                    id:5
                }
            ]
        },
        {
            id: 6,
            txt: [
                {
                    text: '',
                    date: '',
                    id:6
                }
            ]
        },

    ],
    list: {
        name: 'Dodo',
        photo: Dodo,
        id: 1,
        sms: [
            {
                text: 'Lorem ipsum dolor sit amet.',
                date: '',
                id: 1
            },
            {
                text: 'Cupiditate et quas unde!',
                date: '',
                id: 0
            },

        ]
    }
}
// smsTete: [
//     {
//         text: '',
//         date: ''
//     }
// ],
// smsIsmaili: [
//     {
//         text: 'Lorem ipsum dolor.',
//         date: ''
//     }
// ],
// smsMarlos: [
//     {
//         text: '',
//         date: ''
//     }
// ],
// smsSolomon: [
//     {
//         text: 'consectetur adipisicing elit.',
//         date: ''
//     }
// ],
// smsTaison: [
//     {
//         text: '',
//         date: ''
//     }
// ],


// 'Tete', 'Ismaili', 'Marlos', 'Solomon', 'Taison',
//     {
//     // photo: `${Dodo}`,
//     name: 'Dodo',
//     sms: []
// },
// {
//     // photo: `${Dodo}`,
//     name: 'Ismaili',
//     sms: []
// },
// {
//     // photo: `${Dodo}`,
//     name: 'Tete',
//     sms: []
// }
// }
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_USER' :
            return {...state, list: action.payload};
        case 'SEARCH_USER':
            return {...state, users: action.payload};
        case 'SEND_SMS':
            return {...state, list: action.payload};
        default:
            return state;
    }
}
export const store = createStore(reducer);