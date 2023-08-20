import styled from 'styled-components';
import FONT from '../../styles/Font';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.div`
  display: flex;
  padding: 10px;
  width: 862px;
`;

export const sub = styled.span`
  width: 5.5%;
  margin: 5.5px 0;
  font-size: 15px;
  color: #000;
  margin-left: 1.5rem;
`;

export const sub1 = styled.span`
  width: auto;
  margin: 2.5px 0;
  font-size: 15px;
  color: #000;
  flex: 9;
  text-align: left;
`;

export const sub2 = styled.span`
  width: 5.5%;
  margin: 5.5px 0;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: #000;
  margin-left: 1.5rem;
`;
