import React from 'react';
import {HomeContainer} from "./styles";
import Header from '../../components/Header';
import Footer from '../../components/Footer/footer';
import Questionmain from '../../components/Community/question/questionMain'

const Home = () => {
    return (
        <>
        <HomeContainer>
          <h3>홈화면 임시입니다.</h3>
        </HomeContainer>
            <Header/>
        <Questionmain />
        <Footer/>
        </>
    );
};

export default Home;
