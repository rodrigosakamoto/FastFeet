import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 120px;

  header {
    font-size: 24px;
    font-weight: bold;
    color: #444;
    margin: 30px 0;
  }
`;

export const List = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  thead tr {
    font-size: 16px;
    font-weight: bold;
    color: #444;
  }

  tbody {
    border-radius: 4px;
  }

  tbody tr {
    background: #fff;
    border: 0;
    height: 57px;
  }

  td {
    padding: 6px;
    text-align: center;
    border-radius: 4px;
    color: #666;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }

    button {
      border: 0;
      background: none;
    }
  }
`;

export const ModalView = styled.div`
  visibility: ${props => (props.visible ? 'block' : 'hidden')};
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  z-index: 9999;
  margin: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 4px;
  width: 500px;
  max-width: 500px;
  background: #fff;
  button {
    border: 0;
    background: #7d40e7;
    border-radius: 50%;
    padding: 5px;
    align-self: flex-end;
    margin-top: -40px;
    font-size: 16px;
    width: 35px;
    border: 3px solid #fff;
    font-weight: bold;
    height: 35px;
    color: #fff;
  }
  p {
    font-size: 16px;
    color: #666;
    line-height: 26px;
  }
  h2 {
    font-size: 14px;
    color: #444;
    font-weight: bold;
  }
  hr {
    border: 0;
    border-bottom: 1px solid #eee;
    margin: 10px 0;
  }
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 15px;

  span {
    margin: 0 15px;
  }

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    background: #7d40e7;
    color: #fff;

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
