import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: 2.4rem;
`;

export const LogoWrap = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  border-radius: 10rem;
`;

export const NameWrap = styled.div`
  //width: auto;
  //height: auto;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.MainBlack};
  font-family: Pretendard;
  margin-left: 1.4rem;
`;

export const ReverseNameWrap = styled.div`
  //width: auto;
  //height: auto;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.MainBlack};
  font-family: Pretendard;
  margin-right: 1.4rem;
`;
