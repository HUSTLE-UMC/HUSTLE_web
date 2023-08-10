import styled from 'styled-components';
import { buttonProps } from '../../constants/interfaces';

export const Box = styled.div`
  width: 395px;
  display: flex;
  height: 989px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<buttonProps>`
  background-color: transparent;
  margin: 2rem;
  border: none;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  font-size: ${(props) => (props.active ? '20px' : '19px')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;
