import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalNavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 5.5vh;
  background: #50bcdf;
  top: 0;
  z-index: 1000;
  position: sticky;

  @media (max-width: 640px) {
    justify-content: space-between;
  }

  p {
    margin: auto 0;
    color: white;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const Searchbox = styled.div`
  display: inline-flex;
  margin: auto 0;
`;

export const SearchInput = styled.input`
  width: 15rem;
  height: 2rem;
  border-radius: 5px;
  border: gray solid 2px;

  @media (max-width: 640px) {
    visibility: hidden;
  }
`;

export const SearchButton = styled.button`
  width: 3rem;
  height: 1.95rem;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  background: dodgerblue;
  border-radius: 6px;
`;

export const LogoutButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin: auto 0;
  border-radius: 6px;
  font-weight: bold;
  color: white;
  background: orangered;
`;

export const LoginButton = styled(Link)`
  width: 6rem;
  height: 2rem;
  color: white;
  font-weight: bold;
  text-decoration-line: none;
  border-radius: 6px;
  background: dodgerblue;
  padding-top: 8px;
`;

export const LoginDiv = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
`;
