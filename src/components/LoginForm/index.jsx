import React, { useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import isLogin from '../../util/isLogin';

// style
import { Input, Form } from './style';

const LoginForm = () => {
  const navigate = useNavigate();
  const loginFormRef = useRef(null);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const onSubmitLoginForm = useCallback((e) => {
    e.preventDefault();
    try {
      const userId = e.target.children.email.value;
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

  const onChangeEmailValidation = useCallback((e) => {
    const pattern = e.currentTarget.pattern;
    if (e.currentTarget.value.match(pattern)) {
      e.currentTarget.classList.remove('fail');
      setEmailCheck(true);
    } else {
      e.currentTarget.classList.add('fail');
      setEmailCheck(false);
    }
  }, []);

  const onChangePasswordValidation = useCallback((e) => {
    const pattern = e.currentTarget.pattern;
    if (e.currentTarget.value.match(pattern)) {
      e.currentTarget.classList.remove('fail');
      setPasswordCheck(true);
    } else {
      e.currentTarget.classList.add('fail');
      setPasswordCheck(false);
    }
  }, []);

  return (
    <>
      <Form ref={loginFormRef} id="loginForm" onSubmit={onSubmitLoginForm}>
        <p>로그인</p>
        <label htmlFor="email">아이디(email):</label>
        <Input
          type="email"
          name="email"
          placeholder="아이디(email)"
          autoFocus={true}
          onChange={onChangeEmailValidation}
          pattern="^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          size="30"
          alt="이메일"
          required
        />
        {emailCheck ? null : (
          <p id="wrong">ex)example@domain.com (@ 또는 .)을 포함.</p>
        )}
        <label htmlFor="password">비밀번호(Password):</label>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangePasswordValidation}
          pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
          alt="비밀번호"
          required
        />
        {passwordCheck ? null : (
          <p id="wrong">대문자, 숫자, 특수문자 포함 8자리 이상.</p>
        )}
        {emailCheck && passwordCheck ? (
          <button className="active" type="submit">
            로그인
          </button>
        ) : (
          <button type="submit" disabled>
            로그인
          </button>
        )}
      </Form>
    </>
  );
};

export default LoginForm;
