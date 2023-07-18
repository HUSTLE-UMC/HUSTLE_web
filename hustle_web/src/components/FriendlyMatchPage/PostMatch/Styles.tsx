import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 100%;
  height: 100rem;
`;

export const DropDownLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 2rem 0;
`;

export const LeftLayout = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
`;

export const RightLayout = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
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

export const LocationContainer = styled.div`
  font-size: 15px;
  margin-bottom: 4rem;
`;
export const LocationBox = styled.div`
  width: 43rem;
  height: 27rem;
  background: rgba(217, 217, 217, 1);
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;
