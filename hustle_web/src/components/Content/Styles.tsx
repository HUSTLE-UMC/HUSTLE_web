import styled from "styled-components";
import Colors from "../../styles/Color";

export const Content = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Gray10};
  align-items: center;
  margin: 0 auto;
  //margin 및 padding은 있다면 rem으로??
`;
