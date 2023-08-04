import styled from 'styled-components';
import { buttonProps } from '../../constants/interfaces';
import Colors from '../../styles/Color';

export const Div = styled.div`
  width: 1280px;
  height: 765px;
  text-align: center;
  margin: 10rem;
`;

export const Container = styled.div`
  display: block;
`;
export const Button = styled.button<buttonProps>`
  display: inline-block;
  width: 25%;
  border: 1px solid #e7e7e7;
  background-color: ${(props) => (props.active ? Colors.MainColor : '#FFFFFF')};
  color: ${(props) => (props.active ? '#FFFFFF' : Colors.Text)};
  font-weight: 600;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1rem;
`;

export const Text = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${Colors.Text};
  margin-bottom: 2rem;
`;
