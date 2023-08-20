import styled from 'styled-components';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';
import { GenderButtonProps } from './GenderButton';
// import { GenderButtonProps } from './GenderButton';

export const Layout = styled.div`
  width: 1280px;
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #656565;
`;

export const InputLabel = styled.div`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.Gray80};
  text-align: left;
`;

export const Line = styled.hr`
  margin-top: 1rem;
  width: 394px;
  height: 1px;
  background-color: rgba(148, 148, 148, 0.5);
  border: none;
`;

export const Container = styled.form`
  width: 394px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const text = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
`;

export const Input = styled.input`
  width: 394px;
  border-radius: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  height: 4rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: ${Colors.MainColor};
  border: none;
  border-radius: 1.2rem;
  height: 4.7rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background: none;
  text-align: center;
  cursor: pointer;
`;

export const Div = styled.div`
  display: flex;
`;

export const ErrorDiv = styled.div`
  padding: 0.5rem;
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: red;
`;

export const ButtonLine = styled.div`
  border-left: 1px solid black;
  height: 1rem;
  margin: 1rem;
`;

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 40rem;
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

export const UniversityList = styled.div`
  background-color: ${Colors.Gray10};
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 5px;
  max-height: 200px;
  overflow-y: auto;

  div {
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${Colors.BGgray};
    }
  }
`;

export const Genderbutton = styled.button<GenderButtonProps>`
  padding: 10px 20px;
  font-size: ${FONT.SIZE.BODY3};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${({ isselected }) =>
    isselected
      ? `
        background-color: ${Colors.MainColor};
        color: ${Colors.TrueWhite};
      `
      : `
        background-color: ${Colors.TrueWhite};
        color: ${Colors.MainBlack};
      `}
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  text-align: right;
`;

export const NameText = styled.text`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

export const AddressText = styled.text`
  font-size: ${FONT.SIZE.CAPTION};
`;
