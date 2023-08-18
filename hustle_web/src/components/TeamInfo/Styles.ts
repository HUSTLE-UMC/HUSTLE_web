import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.1rem;
  height: 16.3rem;
`;

export const LogoWrap = styled.img`
  display: flex;
  align-items: center;
  width: 12.1rem;
  height: 12.1rem;
  object-fit: cover;
  margin-bottom: 2.5rem;
  border-radius: 10rem;
`;

export const NameWrap = styled.div`
  //width: auto;
  //height: auto;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
  font-family: Pretendard;
`;
