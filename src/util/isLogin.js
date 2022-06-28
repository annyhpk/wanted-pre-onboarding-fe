const isLogin = () => {
  const strData = localStorage.getItem('loginData');
  const loginData = JSON.parse(strData);

  if (loginData?.success) {
    return true;
  }
  return false;
};

export default isLogin;
