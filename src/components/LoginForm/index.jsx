import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router';
import isLogin from '../../util/isLogin';

// style
import { Input, Form } from './style';

const LoginForm = () => {
  const navigate = useNavigate();
  const loginFormRef = useRef(null);

  const onSubmitLoginForm = useCallback((e) => {
    e.preventDefault();
    try {
      const userId = e.target.children.id.value;
      const loginData = JSON.stringify({
        id: userId,
        success: true,
      });
      localStorage.setItem('loginData', loginData);

      if (isLogin()) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      alert('죄송합니다. 에러가 발생하였습니다.');
    }
  }, []);

  return (
    <>
      <Form ref={loginFormRef} id="loginForm" onSubmit={onSubmitLoginForm}>
        <p>로그인</p>
        <label htmlFor="id">아이디(ID):</label>
        <Input
          type="text"
          name="id"
          placeholder="아이디"
          autoFocus={true}
          required
        />
        <label htmlFor="password">비밀번호(Password):</label>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          required
        />
        <button type="submit">로그인</button>
      </Form>
    </>
  );
};

export default LoginForm;
