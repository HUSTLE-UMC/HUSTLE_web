import styled from "styled-components";
import { Input } from "../../../stories/Inputs/Input";
import { Link } from "react-router-dom";
import Colors from "../../../styles/Color";

export const Container = styled.div`
  width: 1440px;
`;

export const FirstDiv = styled.div`
  display: flex;
`;

export const Search = styled(Input)`
  align-items: center;
`;

export const WriteButton = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  text-decoration: none;
  background-color: ${Colors.WriteButton};
  color: white;
  cursor: pointer;
  border: none;
  text-align: center;
  width: 236px;
  height: 50px;
  margin: 63px 142px 15px 292p;
  padding: 12px 48.5px 13px 47px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Border = styled.span`
  display: flex;
  justify-content: space-between;
  width: auto;
  font-size: 40px;
`;

export const ButtonWrap = styled.div``;
