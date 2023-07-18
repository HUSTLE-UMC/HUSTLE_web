import styled from "styled-components";
import Colors from "../../styles/Color";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-left: 3rem;
`;

export const Line = styled.hr`
  margin-bottom: 3rem;
  margin-top: 0;
  width: 100%;
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.25);
`;

export const Container = styled.form`
  width: 95%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 2.5rem;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const text = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  height: 5rem;
  padding: 0 0 0 1rem;
  margin-bottom: 3rem;
`;

export const SubmitButton = styled.button`
  width: 101%;
  background: ${Colors.WriteButton};
  border: none;
  border-radius: 1rem;
  height: 5rem;
  color: white;
  font-size: 3rem;
  /* line-height: 3.6rem; */
  font-weight: 700;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
  margin-right: 2rem;
  border: none;
  background: none;
  text-align: center;
`;
