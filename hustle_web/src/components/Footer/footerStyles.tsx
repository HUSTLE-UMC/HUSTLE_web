import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(217, 217, 217, 1);
  align-items: normal;
  //margin 및 padding은 있다면 rem으로??
  margin-top:auto;
`;

export const Table = styled.table`
  text-align: left;
  margin: 100px;
  margin-top : 50px;
`

export const tHead = styled.thead`
  font-size: 20px;
  font-weight : bold;
`

export const tBody = styled.tbody`
  font-size : 16px;
`

export const td = styled.td`
 margin-top : 10px;
`