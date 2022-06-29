import React, { useCallback, useContext, memo } from 'react';

import {
  GlobalNavigationBar,
  LogoutButton,
  Searchbox,
  SearchInput,
  LoginButton,
  LoginDiv,
} from './style';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router';

const GlobalNavigation = () => {
  const { loginData, setData } = useContext(LoginContext);
  const navigate = useNavigate();

  const onClickLogout = useCallback(() => {
    setData({ id: undefined, success: false });
    navigate('/login');
  }, []);

  return (
    <GlobalNavigationBar>
      <p>Logo</p>
      <Searchbox>
        <SearchInput placeholder="검색어" />
      </Searchbox>

      {loginData?.success ? (
        <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
      ) : (
        <LoginDiv>
          <LoginButton to="/login">로그인</LoginButton>
        </LoginDiv>
      )}
    </GlobalNavigationBar>
  );
};

export default memo(GlobalNavigation);
