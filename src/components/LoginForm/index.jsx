import React, {
  useRef,
  useCallback,
  useState,
  useContext,
  memo,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router';
import { LoginContext } from '../../context/LoginContext';

// style
import { Input, Form } from './style';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setData } = useContext(LoginContext);
  const loginFormRef = useRef(null);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const onSubmitLoginForm = useCallback((e) => {
    e.preventDefault();
    try {
      const userId = e.target.children.email.value;
      const loginData = {
        id: userId,
        success: true,
      };
      setData(loginData);
      navigate('/');
    } catch (err) {
      console.log(err);
      alert('죄송합니다. 에러가 발생하였습니다.');
    }
  }, []);

  const onChangeEmailValidation = useCallback((e) => {
    const reg = new RegExp(
      '^[da-zA-Z]([-_.]?[da-zA-Z])*@[da-zA-Z]([-_.]?[da-zA-Z])*.[a-zA-Z]{2,3}$'
    );
    if (e.currentTarget.value.match(reg)) {
      e.currentTarget.classList.remove('fail');
      setEmailCheck(true);
    } else {
      e.currentTarget.classList.add('fail');
      setEmailCheck(false);
    }
  }, []);

  const onChangePasswordValidation = useCallback((e) => {
    const reg = new RegExp(
      '^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,}$'
    );
    if (e.currentTarget.value.match(reg)) {
      e.currentTarget.classList.remove('fail');
      setPasswordCheck(true);
    } else {
      e.currentTarget.classList.add('fail');
      setPasswordCheck(false);
    }
  }, []);

  // useEffect(() => {
  //   if (loginData?.success === true) navigate('/');
  // }, []);

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
