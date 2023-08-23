import { styled } from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8rem 15rem;
`;

export const TitleLayout = styled.div`
  width: 100%;
  height: 11rem;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Gray50};
`;

export const ContentLayout = styled(Layout)`
  display: flex;
  height: 60rem;
  box-sizing: border-box;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
`;

export const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  font-size: 3.2rem;
  font-weight: ${FONT.WEIGHT.BOLD};
`;

export const ClubBox = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

export const ImgBox = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: black;
`;

export const InfoTitle = styled.div`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${Colors.Gray75};
  margin-bottom: 2rem;
`;

export const Info = styled(InfoTitle)`
  color: #222222;
`;

export const LocationBox = styled.div`
  width: 76.6rem;
  height: 37rem;
`;

export const SubmitButton = styled.button`
  all: unset;
  width: 20rem;
  height: 5rem;
  border: 1px solid ${Colors.Gray50};
  font-size: ${FONT.SIZE.BODY3};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;
