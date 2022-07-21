import React, { useRef, useCallback, useState, memo } from 'react';
import { useNavigate } from 'react-router';
import { useLoginActions } from '../../context/LoginContext';

// style
import { Input, Form } from './style';
import useValidation from '../../hooks/useValidation';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setData } = useLoginActions();
  const loginFormRef = useRef(null);

  // validation
  const [emailCheck, onChangeEmailValidation] = useValidation('email');
  const [passwordCheck, onChangePasswordValidation] = useValidation('password');

  const onSubmitLoginForm = useCallback((e) => {
    e.preventDefault();
    try {
      const formData = new FormData(loginFormRef.current);
      const loginData = {
        id: formData.get('email'),
        success: true,
      };
      setData(loginData);
      navigate('/');
    } catch (err) {
      console.log(err);
      alert('죄송합니다. 에러가 발생하였습니다.');
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

export default memo(LoginForm);
