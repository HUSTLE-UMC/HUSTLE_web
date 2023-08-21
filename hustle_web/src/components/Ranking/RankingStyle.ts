import styled from 'styled-components';
import FONT from '../../styles/Font';

export const Box = styled.div`
  width: 862px;
  top: 427px;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const Hr = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 1280px;
`;

export const Layout = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  height: 4rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Table = styled.div`
  width: 862px;

  margin: 1rem;
`;

export const Thead = styled.div`
  background-color: #f7f7f9;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 1rem;
  font-size: ${FONT.SIZE.CAPTION};
  font-color: #9aa4af;
  font-weight: ${FONT.WEIGHT.BOLD};
`;

export const Tbody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 862px;
`;

export const H3 = styled.div`
  font-weight: ${FONT.WEIGHT.BOLD};
  font-size: ${FONT.SIZE.TITLE3};
  margin-bottom: 1rem;
`;

export const sub = styled.span`
  width: auto;
  margin: 2.5px 0;
  font-size: 15px;
  color: #9aa4af;
  flex: 1;
`;

export const sub1 = styled.span`
  width: auto;
  margin: 2.5px 0;
  font-size: 15px;
  color: #000;
  flex: 9;
  text-align: left;
  margin-left: 1rem;
  color: #9aa4af;
`;
