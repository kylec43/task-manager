import React, { useReducer } from 'react';


const createDataContext = (reducer, actions, initialState) => {

    const Context = React.createContext();


    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState);


        const boundActions = {};
        for (const action in actions) {
            boundActions[action] = actions[action](dispatch);
        }

        return (
            <Context.Provider value={{...boundActions, ...state}}>
                { children }
            </Context.Provider>
        );
    };

    return { Context, Provider };
};


export default createDataContext;