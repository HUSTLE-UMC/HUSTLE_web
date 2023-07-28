import styled from "styled-components";
import { ErrorProps } from "../../../constants/interfaces";
import Colors from "../../../styles/Color";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100%;
  margin: 1rem;
`;

export const Input = styled.input<ErrorProps>`
  width: 394px;
  border-radius: 12px;
  padding: 12px 0px 12px 20px;
  border: 1px solid ${(props) => (props.onError ? "red" : "#00000040")};
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

export const P = styled.p`
  margin: 0.5rem;
`;

export const Text = styled.div`
  display: flex;
  justify-content: left;
  font-weight: 700;
  font-size: 1.6rem;
  margin: 2rem;
  color: ${Colors.Text};
`;
