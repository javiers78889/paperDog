import React from 'react'

export const AuthReducer = (state = [], action) => {
    switch (action.type) {


        case 'login':

            return action.payload;

        case 'logout':

            return [...state.filter((i) => i.email !== action.payload)]

     

        default:
            return state;

    }
}
