import React, { createContext, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  LoginState,
  TokenState,
  refreshTokenState,
} from '../../recoil/login/loginState';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import type { AuthContextType } from '../../constants/interfaces';

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {
    return;
  },
  accessToken: null,
  setAccessToken: () => {
    return;
  },
  refreshToken: null,
  updateAccessToken: () => {
    return;
  },
  refreshAccessToken: async () => {
    return;
  },
  logoutHandler: () => {
    return;
  },
});

const AuthProvider = ({ children }: any) => {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [accessToken, setAccessToken] = useRecoilState<string | null>(TokenState,);
  const refreshToken = useRecoilValue(refreshTokenState);

  const updateAccessToken = (token: string) => {
    setAccessToken(token);
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post('https://api.sport-hustle.com/api/auth/refresh', { refreshToken });
      const { accessToken } = response.data;
      setAccessToken(accessToken);
    } catch (error) {
      logoutHandler();
    }
  };

  const logoutHandler = () => {
    console.log('로그아웃 클릭실행돼씀');
    localStorage.removeItem('accessToken');
    console.log(logoutHandler);
    setIsLoggedIn(false);
    setAccessToken(null);
    // navigate('/');
  };

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [accessToken, setIsLoggedIn]);

  const authContextValue: AuthContextType = {
    isLoggedIn,
    setIsLoggedIn,
    accessToken,
    setAccessToken,
    refreshToken,
    updateAccessToken,
    refreshAccessToken,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
