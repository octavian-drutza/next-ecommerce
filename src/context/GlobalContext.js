import React, { createContext, useContext, useReducer } from 'react';
import { globalReducer } from '../reducers';


export const initialState = {
    products: [
        {
            id: '1',
            name: 'Name1',
            price: '345',
            description: 'trule25lea',
            image: '/1.jpg',
        }, 
        {
            id: '2',
            name: 'Name2',
            price: '34',
            description: 'trulel7ea',
            image: '/2.jpg',
        },
        {
            id: '3',
            name: 'Name3',
            price: '3',
            description: 'trul4elea',
            image: '/3.jpg',
        },
        {
            id: '4',
            name: 'Name4',
            price: '3',
            description: 'trulelea5',
            image: '/4.jpg',
        },
        {
            id: '5',
            name: 'Name5',
            price: '3',
            description: 'trulelea3',
            image: '/5.jpg',
        },
        {
            id: '6',
            name: 'Name6',
            price: '3',
            description: 'trulelea4',
            image: '/6.jpg',
        },
    ],
    cart: [],
    wishlist: [], 
}

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

function useGlobalState() {
    const context = useContext(GlobalStateContext)

    if (context === undefined) {
        throw new Error("useGlobalState must be used inside GlobalProvider")
    }

    return context;
};

function useGlobalDispatch() {
    const context = useContext(GlobalDispatchContext)

    if (context === undefined) {
        throw new Error("useGlobalDispatch must be used inside GlobalProvider")
    }

    return context;
};


export const useGlobal = () => [ useGlobalState(), useGlobalDispatch() ];

export const GlobalProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}