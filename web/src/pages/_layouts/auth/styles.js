import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 60px 30px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #444;
      text-align: left;
    }
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 12px 15px;
      margin-bottom: 15px;
      font-size: 16px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      font-weight: bold;
      margin: 0 0 15px;
    }

    button {
      background: #7d40e7;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      padding: 12px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
