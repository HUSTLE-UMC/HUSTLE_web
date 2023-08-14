import styled from 'styled-components';
import Colors from '../../../styles/Color';
// import FONT from '../../styles/Font';

export const ApplyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplyWrap = styled.div`
  width: 118rem;
  height: 129rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.1rem solid ${Colors.MainBlack};
  background-color: white;
`;

export const ContentWrap = styled.div`
  width: 110rem;
  height: 60.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin-bottom: 6.6rem;
`;

export const BtnWrap = styled.div`
  width: 110rem;
  height: auto;
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 7.8rem;
`;

export const InfoWrap = styled.img`
  width: 110rem;
  height: 25rem;
  display: flex;
`;
