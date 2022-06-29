import React, { createContext, useReducer } from 'react';

const defaultValue = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.loginData };
    default:
      throw new Error();
  }
};

export const LoginContext = createContext();

const initializer = () => {
  const localData = localStorage.getItem('loginData');
  return localData ? JSON.parse(localData) : { id: undefined, success: false };
};

const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue, initializer);

  const setData = (loginData) => {
    dispatch({ type: 'SET_DATA', loginData });
  };

  return (
    <LoginContext.Provider
      value={{
        loginData: state,
        setData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
