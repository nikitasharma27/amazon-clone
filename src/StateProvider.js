// For tracking the data layer
import React, { createContext, useContext } from "react";
import { useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);