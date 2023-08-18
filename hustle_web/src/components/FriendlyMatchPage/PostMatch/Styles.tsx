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

export const PostBox = styled.div`
  width: 100%;
`;

export const TitleBox = styled.div`
  width: 39.4rem;
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

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 39.4rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  border-radius: 1.2rem;
  background: ${Colors.TrueWhite};
  &&::placeholder {
    color: ${Colors.Gray30};
  }
`;

export const InputSmall = styled(InputLarge)`
  width: 19rem;
`;

export const ImageBox = styled.div`
  width: 100%;
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

export const SubmitButton = styled.button`
  all: unset;
  width: 40rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.WriteButton};
  color: ${Colors.TrueWhite};
  border-radius: 1.2rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin: 2rem 0;
  cursor: pointer;
`;

export const ErrorBox = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
`;

export const ErrorText = styled.div`
  padding: 0.5rem;
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: red;
`;
