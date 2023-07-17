import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 400px;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 100%;
`;

export const TitleLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 30px;
  font-weight: 800;
  color: #3f37c9;
`;

export const LeftLayout = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 4rem;
`;

export const RightLayout = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
`;

export const SvgLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
`;

export const ButtonContainer = styled.div`
  margin-left: 3rem;
`;

export const LocationBox = styled.div`
  width: 50rem;
  height: 50rem;
  background: rgba(217, 217, 217, 1);
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
