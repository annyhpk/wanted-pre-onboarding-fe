import { useState, useCallback } from 'react';

const validation = {
  email: new RegExp(
    '^[da-zA-Z]([-_.]?[da-zA-Z])*@[da-zA-Z]([-_.]?[da-zA-Z])*.[a-zA-Z]{2,3}$'
  ),
  password: new RegExp(
    '^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,}$'
  ),
};

function useValidation(type) {
  const [check, setCheck] = useState(false);

  const onChangeValidation = useCallback(
    (e) => {
      const reg = validation[type];
      const data = e.currentTarget?.value;
      if (data.match(reg)) {
        e.currentTarget.classList.remove('fail');
        setCheck(true);
        return;
      }
      e.currentTarget.classList.add('fail');
      setCheck(false);
    },
    [setCheck]
  );

  return [check, onChangeValidation];
}

export default useValidation;
