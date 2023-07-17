import React from 'react';
import {HomeContainer} from "./styles";
import Header from '../../components/Header';
import Footer from '../../components/Footer/footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        {/* <HomeContainer>
          <h3>홈화면 임시입니다.</h3>
        </HomeContainer> */}
        <Header/>
        <ul>
            <li><Link to="/question">질문게시판으로 이동</Link></li>
            <li><Link to="/club">동아리게시판으로 이동</Link></li>
            <li><Link to="/friendly">교류전게시판으로 이동</Link></li>
            <li><Link to="/competitions">대회 게시판으로 이동</Link></li>
            <li><Link to="/mypage">마이페이지로 이동</Link></li>
      </ul>
        <Footer/>
        </>
    );
};

export default HomePage;
