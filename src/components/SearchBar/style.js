import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;

  input {
    border: 1px solid #30363d;
    color: #fff;
    font-size: 15px;
    width: 310px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #0d1117;

    &::placeholder {
      color: #8b949e;
      font-size: 15px;
    }
  }
`;
