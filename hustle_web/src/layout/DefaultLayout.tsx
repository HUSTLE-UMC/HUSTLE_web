import React from "react";
import styled from "styled-components";
import {supportScreenSize} from "../constants/styles/GlobalStyle";
import FooterComponent from "../components/Footer/Footer";
import Header from "../components/Header";
import WebContent from "../components/Content";
const DefaultLayout = () => {
    //페이지가 로딩할 때 액션을 넣으면 될듯

    return (
        <Root>
            <Header />
            <WebContent />
            <FooterComponent/>
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: 100vh;
  background-color: orange;

  @media all and (max-width: ${supportScreenSize}px) {
    width: 100vw;
  }
`;

export default DefaultLayout;
