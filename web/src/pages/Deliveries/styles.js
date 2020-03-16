import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 120px;

  header {
    font-size: 24px;
    font-weight: bold;
    color: #444;
    margin: 30px 0;
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  div {
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

    svg {
      margin-right: 5px;
    }
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
  }
`;
