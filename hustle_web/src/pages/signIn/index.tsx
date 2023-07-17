import React, {useState} from "react"
import {BoxContainer, Text, CheckContainer, CheckboxInput, CheckText, GuideText, SigninContainer, Title, TitleContainer, CheckboxLabel, TermsContainer, TermsText, NextBtn, NextBtnWrapper, NextBtnText} from './styles'
import styled from "styled-components";

const SignIn = () =>{
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const HorizontalLine = styled.div`
    margin-top: 50px;
    border-bottom: solid 2px  rgba(0, 0, 0, 0.25);
    `;

    return (
        <SigninContainer>
            <TitleContainer>
                <Title>회원가입</Title>
                <GuideText>HUSTLE 서비스를 이용하기 위해,<br/>아래 약관에 동의 후 절차에 따라 회원가입을 진행해주세요!</GuideText>
            </TitleContainer>
            <CheckContainer>
                <CheckboxLabel>
                    <CheckboxInput
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <CheckText>회원 약관, 개인정보 수집 및 이용, 마케팅 정보 수신의 세 가지 항목 모두 동의 합니다. </CheckText>
                </CheckboxLabel>
            </CheckContainer>
            <HorizontalLine />
            <TermsContainer>
                <TermsText>(필수) 회원 약관 동의</TermsText>
                <BoxContainer>
                    <Text>내용입니다.</Text>
                </BoxContainer>
                <TermsText>(필수) 개인정보 수집 및 이용 동의</TermsText>
                <BoxContainer>
                    <Text>내용입니다.</Text>
                </BoxContainer>
                <TermsText>(필수) 마케팅 정보 수신 동의</TermsText>
                <BoxContainer>
                    <Text>내용입니다.</Text>
                </BoxContainer>
            </TermsContainer>
            <NextBtnWrapper>
                <NextBtn>
                    <NextBtnText> 다음 </NextBtnText>
                </NextBtn>
            </NextBtnWrapper>
        </SigninContainer>
    )
}

export default SignIn;