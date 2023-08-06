import styled from 'styled-components';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';
import { Container } from '../MainInput/Styles';

export const container = styled.div`
  width: 21rem;
  height: 36rem;
  background-color: ${Colors.TrueWhite};
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 28rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${Colors.BGgray};
`;

export const Box = styled.div`
  margin-left: 1rem;
`;

export const SortBox = styled(Box)`
  color: ${Colors.Gray50};
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.LIGHT};
  margin-top: 0.8rem;
`;

export const TitleBox = styled(Box)`
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin-top: 0.4rem;
`;

export const DateBox = styled(Box)`
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.LIGHT};
  margin-top: 1.6rem;
`;
