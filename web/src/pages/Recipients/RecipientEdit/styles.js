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
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 44px;
    padding: 0 25px;
    margin-top: 7px;
    color: #666;
    font-size: 16px;
  }

  div.line3 {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  div.line2 {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 3fr 1fr 1fr;
  }

  div.item {
    display: flex;
    flex-direction: column;
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    font-weight: bold;
    margin: 15px 0 0;
  }
`;
