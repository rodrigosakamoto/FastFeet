import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const Container = styled.div`
  padding: 0 270px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }
  div {
    display: flex;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: #7d40e7;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      margin-left: 15px;
      height: 36px;
      width: 112px;
      text-align: center;

      &.back {
        background: #ccc;
      }
    }

    svg {
      margin-right: 3px;
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  div.container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;

    > div {
      p {
        font-size: 14px;
        font-weight: bold;
        color: #444;
        margin-bottom: 10px;
      }
    }
  }
  > p {
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    color: #444;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #999;
    font-size: 16px;
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    font-weight: bold;
    margin: 15px 0 0 0;
  }
`;

export const Select = styled(AsyncSelect)`
  font-size: 16px;
  color: #999;
`;
