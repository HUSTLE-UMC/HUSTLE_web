import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  height: 40rem;
  overflow: hidden;
`;

export const ListBox = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1.5rem 0;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
