import styled from 'styled-components';
import { darken } from 'polished';

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  form {
    background: #fff;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 4px;
    width: 237px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    input {
      border: 0;
      font-size: 14px;
      line-height: 16px;
      margin-left: 10px;

      &::placeholder {
        color: #999;
      }
    }
  }

  button {
    background: #7d40e7;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    width: 142px;
    height: 36px;
    justify-content: center;

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export default ListHeader;
