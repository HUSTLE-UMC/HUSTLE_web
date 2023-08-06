import { styled } from 'styled-components';
import Colors from '../../styles/Color';

export const CategoryLayout = styled.div`
  box-sizing: border-box;
  width: 1280px;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid ${Colors.Gray20};
  border-bottom: 1px solid ${Colors.Gray20};
`;
