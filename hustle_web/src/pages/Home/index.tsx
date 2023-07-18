import React from 'react';
import {HomeContainer} from "./Styles";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <HomeContainer>
            <li><Link to="/question">질문게시판으로 이동</Link></li>
            <li><Link to="/club">동아리게시판으로 이동</Link></li>
            <li><Link to="/friendly">교류전게시판으로 이동</Link></li>
            <li><Link to="/competitions">대회 게시판으로 이동</Link></li>
            <li><Link to="/mypage">마이페이지로 이동</Link></li>
            <li><Link to ="/question/questionForm">질문 게시판 폼 이동</Link></li>
            <li><Link to="/login">로그인</Link></li>
      </HomeContainer>
        </>
    );
};

export default HomePage;
