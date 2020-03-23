import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 270px;
`;

export const Content = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #444;
    margin-top: 18px;
  }

  input {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 44px;
    padding: 0 25px;
    margin-top: 7px;
    color: #666;
    font-size: 16px;
  }
`;
