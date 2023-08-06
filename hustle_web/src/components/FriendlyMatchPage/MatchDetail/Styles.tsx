import { styled } from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 39.4rem;
  height: 40rem;
`;

export const ContentLayout = styled(Layout)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 30rem;
`;

export const TitleContainer = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  margin: 3rem 0;
`;

export const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.Gray10};
  border-radius: 2rem;
`;

export const InfoContainer = styled.div`
  height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoTitle = styled.div`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  color: ${Colors.Gray80};
  padding: 0.1rem;
`;

export const Info = styled(InfoTitle)`
  font-weight: ${FONT.WEIGHT.REGULAR};
`;
