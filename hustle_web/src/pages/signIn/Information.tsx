import React from "react";
import styled from "styled-components";
import {WarningMessage, Content_1, Content_2, SigninContainer, Title, TitleContainer, ProfileImg, ProfileText, ImportantText, InputTitle, ProfileContainer, NameContainer, StyledInput, NameField, BirthInput, BirthContainer, BirthInputContainer, GenderInput, GenderContainer, Content_3, InputContainer, SignInBtn, NextBtnText, Content_4, PlaceholderInput, PasswordText, Content_5, Content_6, BtnWrapper} from './styles';
import profile from '../../../src/assets/images/profile_img.svg'
import { BirthInputType } from "./types";
import {isValidPassword} from '../../../src/utils/utility'
import { useRecoilState } from "recoil";
import { confirmPasswordState, passwordState, showConfirmPasswordWarningState, showPasswordWarningState } from '../../../src/recoil/signin'

const Information = () =>{
    const HorizontalLine = styled.div`
    margin-top: 50px;
    border-bottom: solid 2px  rgba(0, 0, 0, 0.25);
    `;
    
    const [password, setPassword] = useRecoilState(passwordState);
    const [showPasswordWarning, setShowPasswordWarning] = useRecoilState(showPasswordWarningState);
    const [confirmPassword, setConfirmPassword] = useRecoilState(confirmPasswordState);
    const  [showConfirmPasswordWarning, setShowConfirmPasswordWarning] = useRecoilState(showConfirmPasswordWarningState);

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setShowPasswordWarning(!isValidPassword(e.target.value));
    };

    const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setShowConfirmPasswordWarning(!isPasswordMatch(password, e.target.value));
    };

    const isPasswordMatch = (password: string, confirmPassword: string): boolean => {
        return password === confirmPassword;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 기본 폼 제출 동작을 막음
    
        if (!isValidPassword(password)) {
          setShowPasswordWarning(true);
          return;
        }
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <SigninContainer>
                <TitleContainer>
                    <Title>회원가입</Title>
                </TitleContainer>
                <HorizontalLine/>
                <Content_1>
                    <ProfileContainer>
                        <ProfileImg src={profile} alt="프로필" />
                        <ProfileText>프로필 사진 등록</ProfileText>
                    </ProfileContainer>
                    <NameField>
                        <NameContainer>
                            <ImportantText>*</ImportantText>
                            <InputTitle>NAME</InputTitle>
                        </NameContainer>
                        <StyledInput type="text"/>
                    </NameField>
                </Content_1>
                <Content_2>
                    <BirthContainer>
                        <NameContainer>
                            <ImportantText>*</ImportantText>
                            <InputTitle>생년월일</InputTitle>
                        </NameContainer>
                        <BirthInputContainer>
                            <BirthInput type = "text"/>
                            <BirthInput type = "text"/>
                            <BirthInput type = "text"/>
                        </BirthInputContainer>
                    </BirthContainer>
                    <GenderContainer>
                        <NameContainer>
                            <ImportantText>*</ImportantText>
                            <InputTitle>성별</InputTitle>
                        </NameContainer>
                        <GenderInput type = "text" placeholder="남/여"/>
                    </GenderContainer>  
                </Content_2>
                <Content_3>
                    <InputContainer>
                        <NameContainer>
                            <ImportantText>*</ImportantText>
                            <InputTitle>ID</InputTitle>
                        </NameContainer>
                        <PlaceholderInput type="text" placeholder="아이디를 입력하세요"/>
                    </InputContainer>
                    <SignInBtn>
                        <NextBtnText> 중복확인 </NextBtnText>
                    </SignInBtn>
                </Content_3>
                <Content_4>
                    <NameContainer>
                        <ImportantText>*</ImportantText>
                        <InputTitle>PASSWORD</InputTitle>
                    </NameContainer>
                    <div>
    
                        <PlaceholderInput type = "password" placeholder="비밀번호를 입력하세요"
                            id="password" value={password} onChange={handleChangePassword}/>
                            {showPasswordWarning && (
                                <WarningMessage>
                                비밀번호는 영문과 숫자를 혼합하여 6자에서 20자 사이로 입력해주세요.
                                </WarningMessage>
                            )}
                
                    </div>
                    
                </Content_4>
                <Content_5>
                    <NameContainer>
                        <ImportantText>*</ImportantText>
                        <InputTitle>PASSWORD CHECK</InputTitle>
                    </NameContainer>
                    <PlaceholderInput type = "password" placeholder="비밀번호 확인을 위하여 다시 한 번 입력하세요"
                    value={confirmPassword} onChange={handleChangeConfirmPassword}/>
                    {showConfirmPasswordWarning && (
                        <WarningMessage>비밀번호가 일치하지 않습니다.</WarningMessage>
                    )}
                </Content_5>
                <Content_6>
                    <InputContainer>
                        <NameContainer>
                            <ImportantText>*</ImportantText>
                            <InputTitle>소속 대학교</InputTitle>
                        </NameContainer>
                        <PlaceholderInput type = "text" placeholder="재학 중인 대학교를 입력하세요"/>
                    </InputContainer>
                        <SignInBtn>
                            <NextBtnText> 검색하기 </NextBtnText>
                        </SignInBtn>
                    
                </Content_6>
                <BtnWrapper>
                    <SignInBtn type = "submit">
                        <NextBtnText> 회원가입 </NextBtnText>
                    </SignInBtn>
                </BtnWrapper>
            </SigninContainer>
        </form>
    )
}

export default Information;