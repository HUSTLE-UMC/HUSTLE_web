import React from 'react';
import {HomeContainer} from "./Styles";
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Questionmain from '../../components/Community/Question/QuestionMain'
import SignIn from '../SignIn'
import Information from '../SignIn/Information'

const Home = () => {
    return (
        /*<>
        <HomeContainer>
          <h3>홈화면 임시입니다.</h3>
        </HomeContainer>
        <Header/>
        <Questionmain />
        <Footer/>
        </>*/
        <>
            <Information/>
        </>

    );
};

export default Home;
