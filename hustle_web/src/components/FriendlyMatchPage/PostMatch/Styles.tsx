import styled from 'styled-components';
import FONT from '../../../styles/Font';
import Colors from '../../../styles/Color';

export const PostLayout = styled.div`
  width: 100%;
  display: flex;
  background: #fcfcfc;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 18.5rem 39.4rem 18.5rem;
  justify-content: center;
  grid-gap: 5.3rem;
`;

export const SideContainer = styled.div`
  width: 18rem;
`;

export const PostContainer = styled.div`
  width: 39.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBox = styled.div`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.Gray70};
  margin: 1rem 0;
`;

export const InputBox = styled.div`
  width: 39.4rem;
  display: flex;
  justify-content: space-between;
`;

export const ImageBox = styled.div`
  width: 18rem;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.Gray10};
  border-radius: 2rem;
  margin-top: 2rem;
`;

export const ImageCaption = styled.div`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  color: ${Colors.Gray30};
`;
