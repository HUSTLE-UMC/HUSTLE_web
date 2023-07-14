import React from "react";
import styled from "styled-components";
import {supportScreenSize} from "../constants/styles/GlobalStyle";

const DefaultLayout = () => {
    //페이지가 로딩할 때 액션을 넣으면 될듯

    return (
        <Root>
            {/*<Header />*/}
            {/*<Content />*/}
            {/*<Footer />*/}
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: 100vh;
  background-color: mediumvioletred;

  @media all and (max-width: ${supportScreenSize}px) {
    width: 100vw;
  }
`;

export default DefaultLayout;
