import styled from 'styled-components';
import Colors from '../../../styles/Color';
import FONT from '../../../styles/Font';

export const Layout = styled.div`
  width: 23rem;
  height: 17.5rem;
`;

export const ImgLayout = styled.div`
  width: 100%;
  height: 10.5rem;
  background-size: cover;
`;
export const ContentLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  background: #fcfcfc;
  padding: 1rem 2rem;
`;

export const SportBox = styled.div`
  height: 1.4rem;
  color: ${Colors.MainSemi};
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.LIGHT};
`;

export const TitleBox = styled(SportBox)`
  overflow: hidden;
  text-overflow: ellipsis;
  whitespace: nowrap;
  color: ${Colors.Gray75};
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  font-size: ${FONT.SIZE.CAPTION};
  font-style: normal;
  font-weight: ${FONT.WEIGHT.LIGHT};
  color: ${Colors.Gray50};
`;

export const SubmitBtn = styled(ContentBox)`
  color: ${Colors.Gray80};
  text-decoration-line: underline;
  cursor: pointer;
`;
