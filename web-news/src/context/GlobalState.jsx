import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    characters: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

const getCharacters = async () => {
    const response = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=xvqB3F5iOefnjGAU4L9ScF3OE7sni3TA");
    dispatch({
        type: "GET_CHARACTERS",
        payload: response.data.results,
    });
    }
    return (
    <GlobalContext.Provider
        value={{
            characters: state.characters,
            getCharacters,
        }}
    >
       {children}
    </GlobalContext.Provider>
    );
}