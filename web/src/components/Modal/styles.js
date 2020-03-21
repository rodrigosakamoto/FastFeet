import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const ModalList = styled.div`
  z-index: 1;
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 10px);
  background: #fff;
  box-shadow: 0px 0px 2px #00000026;
  border-radius: 4px;
  padding: 10px 15px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    padding: 10px 0;
    font-size: 16px;
    color: #999;

    &:hover {
      color: ${darken(0.1, '#999')};
    }

    & + button {
      border-top: 1px solid #eee;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
