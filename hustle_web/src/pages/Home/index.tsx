import React from 'react';
import {HomeContainer} from "./Styles";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <HomeContainer>
            <li><Link to="/community">커뮤니티로 이동</Link></li>
            <li><Link to="/community/question/write">질문하기 폼</Link></li>
            <li><Link to="/friendly">교류전게시판으로 이동</Link></li>
            <li><Link to="/competitions">대회 게시판으로 이동</Link></li>
            <li><Link to="/mypage">마이페이지로 이동</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/forgot">아이디찾기</Link></li>
      </HomeContainer>
        </>
    );
};

export default HomePage;
