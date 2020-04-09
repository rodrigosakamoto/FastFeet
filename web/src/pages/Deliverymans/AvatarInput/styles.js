import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;
      background: #eee;
    }

    div {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong {
        font-size: 16px;
        font-weight: bold;
        color: #ddd;
      }
    }

    input {
      display: none;
    }
  }
`;
