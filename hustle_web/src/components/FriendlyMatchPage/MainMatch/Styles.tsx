import styled from 'styled-components';
import FONT from '../../../styles/Font';
import Colors from '../../../styles/Color';

export const Layout = styled.div`
  width: 100%;
  margin-top: 2rem;
  overflow: hidden;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 50rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  color: ${Colors.Gray80};
`;
