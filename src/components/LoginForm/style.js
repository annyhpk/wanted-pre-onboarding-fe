import styled from 'styled-components';

export const Input = styled.input`
  border: gray solid 2px;
  height: 25px;
  &:focus {
    border: #3dbd3e solid 2px;
  }
  &.fail {
    border: orangered solid 2px;
  }
  & + p {
    color: orangered;
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 350px;
  gap: 12px;
  flex-direction: column;
  border: black solid 2px;
  padding: 25px;
  margin: 12em auto;

  button {
    border-radius: 5px;
    width: 10rem;
    height: 1.5rem;
    font-weight: bold;
    margin: 0 auto;
  }

  button.active {
    color: white;
    background: dodgerblue;
  }

  & + p {
    font-weight: bold;
    font-size: 24px;
  }
`;
