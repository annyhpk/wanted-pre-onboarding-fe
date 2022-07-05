import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const defaultValue = {
  id: undefined,
  success: false,
};

const LoginValueContext = createContext();
const LoginActionsContext = createContext();

const initializer = () => {
  const localData = localStorage.getItem('loginData');
  return localData ? JSON.parse(localData) : defaultValue;
};

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(initializer());

  const actions = useMemo(
    () => ({
      setData(newLoginData) {
        setLoginData((prev) => {
          return {
            ...prev,
            ...newLoginData,
          };
        });
      },
    }),
    []
  );

  useEffect(() => {
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }, [loginData]);

  return (
    <LoginActionsContext.Provider value={actions}>
      <LoginValueContext.Provider value={loginData}>
        {children}
      </LoginValueContext.Provider>
    </LoginActionsContext.Provider>
  );
};

export function useLoginValue() {
  const value = useContext(LoginValueContext);
  if (value === undefined) {
    throw new Error('useLoginValue should be used within LoginProvider');
  }
  return value;
}

export function useLoginActions() {
  const value = useContext(LoginActionsContext);
  if (value === undefined) {
    throw new Error('useLoginActions should be used within LoginProvider');
  }
  return value;
}

export default LoginProvider;
