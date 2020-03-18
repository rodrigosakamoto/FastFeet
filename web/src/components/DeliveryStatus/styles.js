import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span.status-retirada {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    background: #bad2ff;
    padding: 10px;
    border-radius: 12px;
    color: #4d85ee;
    font-size: 14px;
    font-weight: bold;
  }

  span.status-entregue {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    background: #dff0df;
    padding: 10px;
    border-radius: 12px;
    color: #2ca42b;
    font-size: 14px;
    font-weight: bold;
  }

  span.status-pendente {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0df;
    height: 25px;
    padding: 10px;
    border-radius: 12px;
    color: #c1bc35;
    font-size: 14px;
    font-weight: bold;
  }

  span.status-cancelada {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    background: #fab0b0;
    padding: 10px;
    border-radius: 12px;
    color: #de3b3b;
    font-size: 14px;
    font-weight: bold;
  }

  svg {
    margin-right: 5px;
  }
`;
