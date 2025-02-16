import React, { useState, createContext, useContext } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const InitialState = Cookies.get('jwt')||localStorage.getItem("UserInfo");
  
  const [authuser, setAuthuser] = useState(() => {
    try {
      return InitialState ? JSON.parse(InitialState) : undefined;
    } catch (err) {
      console.error('Invalid JWT in Cookies', err);
      return undefined;
    }
  });

  return (
    <AuthContext.Provider value={[authuser, setAuthuser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
