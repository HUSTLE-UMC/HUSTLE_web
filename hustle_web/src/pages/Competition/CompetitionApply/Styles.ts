import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const ApplyContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplyWrap = styled.div`
  width: auto;
  height: 14.8rem;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const ContentWrap = styled.div`
  width: 110rem;
  height: auto;
  display: flex;
  flex-direction: row;
  //background-color: white;
`;

export const DetailBox = styled.div`
  width: 60.6rem;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const TeaminfoLabel = styled.div`
  width: 60.6rem;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: white;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
  font-family: Pretendard;
`;

export const TeamInfoBox = styled.div`
  width: 60.6rem;
  height: 17.7rem;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

export const ImgWrap = styled.img`
  width: 42.6rem;
  height: 63rem;
  display: flex;
  margin-right: 8.7rem;
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
