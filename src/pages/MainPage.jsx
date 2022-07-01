import React, { lazy, useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router';
import { FeedsWrapper } from '../components/Feed/style';

const Feed = lazy(() => import('../components/Feed'));

const MainPage = () => {
  const navigate = useNavigate();
  const { loginData } = useContext(LoginContext);
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    if (!loginData?.success) navigate('/login');
  }, [loginData]);

  useEffect(() => {
    fetch('./data/feedData.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedData(data?.feeds);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <FeedsWrapper>
      {feedData?.map((feed) => (
        <Feed key={feed?.id} feedData={{ ...feed }} />
      ))}
    </FeedsWrapper>
  );
};

export default MainPage;
