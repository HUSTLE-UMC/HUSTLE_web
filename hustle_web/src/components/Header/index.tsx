import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { HeaderIcon } from "../../assets/logos/HeaderLogo";
import * as H from "./Styles";
import Colors from "../../styles/Color";
import FONT from "../../styles/Font";

const Header = () => {
    const navigate = useNavigate();


    return (
        <H.Header>
            <H.LogoWrap>
                <HeaderIcon onClick={() => navigate("/")} />
            </H.LogoWrap>
            <H.BtnWrap>
                <H.HeaderBtn>홈</H.HeaderBtn>
                <H.HeaderBtn>대회</H.HeaderBtn>
                <H.HeaderBtn>교류전</H.HeaderBtn>
                <H.HeaderBtn>커뮤니티</H.HeaderBtn>
                <H.HeaderBtn>순위</H.HeaderBtn>
            </H.BtnWrap>



        </H.Header>
    );
};

export default Header;
