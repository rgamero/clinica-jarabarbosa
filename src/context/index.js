import React, { createContext, useReducer } from 'react';
import { actionTypes } from './actions';

const initialState = {
  toggleMenuState: null,
  visibleHeader: undefined
};

export const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  let newState;
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionTypes.toggleMenuState:
        newState = {
          ...state,
          toggleMenuState: action.value
        };

        return newState;

      case actionTypes.visibleHeader:
        newState = {
          ...state,
          visibleHeader: action.value
        };

        return newState;

      default:
        return state;
    }
  }, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
