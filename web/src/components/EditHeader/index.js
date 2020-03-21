import styled from 'styled-components';

const EditHeader = styled.header`
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

export default EditHeader;
