import styled from "styled-components";
import Colors from "../../styles/Color";
import {ErrorProps} from "../../constants/interfaces";



export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100%;

`;

export const Input = styled.input<ErrorProps>`
  width: 394px;
  border-radius: 12px;
  padding: 12px 0px 12px 20px;
  border: 1px solid ${(props) => (props.onError ? "red" : "#00000040")};
`;

export const TextWrap = styled.div`
  width: 394px;
  height: 34px;
  display: flex;
  align-items: center; 
  justify-content: left;
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.Text};
`;

export const ErrorDiv = styled.div`
  display: flex;
  margin-top: 0.5rem;
  color: red;
  margin-left: 3rem;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 153px;
  height: 47px;
  border-radius: 12px;
  border: 2px solid ${Colors.MainColor};
  color: ${Colors.MainColor};
  background-color: white;
  margin: 2rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  color: ${Colors.Text};
  margin-top: 26px;
  margin-bottom: 26px;
`;

