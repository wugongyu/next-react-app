'use client'

import React, { createContext, useState } from 'react';
export interface AuthContextProps {
  authenticated: boolean,
  login: () => void,
  logout: () => void,
}

const defaultAuthContext: AuthContextProps = {
  authenticated: false,
  login: () => undefined,
  logout: () => undefined,
}

const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(defaultAuthContext.authenticated);
  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);
  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;