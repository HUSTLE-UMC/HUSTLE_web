import styled from "styled-components";
import Colors from "../../styles/Color";

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
  background: ${Colors.WriteButton};
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
  padding: 5px;
  flex-shrink: 0;
  font-size: 2rem;
  font-weight: 400;
  color: red;
`;

export const ButtonLine = styled.div`
  border-left: 1px solid black;
  height: 1rem;
  margin: 1rem;
`;

export const KakaoButton = styled.button`
  width: 394px;
  background: ${Colors.WriteButton};
  border: none;
  border-radius: 1.2rem;
  height: 4.7rem;
  color: white;
  font-size: 1.6rem;
  margin: 1rem;
  cursor: pointer;
`;
