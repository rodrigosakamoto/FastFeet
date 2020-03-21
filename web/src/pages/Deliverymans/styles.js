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
