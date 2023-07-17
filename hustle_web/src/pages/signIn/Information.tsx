import React,{useState} from "react";
import styled from "styled-components";
import {Content_1, Content_2, SigninContainer, Title, TitleContainer, ProfileImg, ProfileText, ImportantText, InputTitle, ProfileContainer, NameContainer, StyledInput, NameField, BirthInput, BirthContainer, BirthInputContainer, GenderInput, GenderContainer, Content_3, InputContainer, SignInBtn, NextBtnText, Content_4, PlaceholderInput, PasswordText, Content_5, Content_6, BtnWrapper} from './styles';
import profile from '../../../src/assets/images/profile_img.svg'

const Information = () =>{
    const HorizontalLine = styled.div`
    margin-top: 50px;
    border-bottom: solid 2px  rgba(0, 0, 0, 0.25);
    `;

    const WarningMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 4px;
    `;

    const [password, setPassword] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setShowWarning(!isValidPassword(e.target.value));
    };

    const isValidPassword = (value: string): boolean => {
        return value.length >= 6 && value.length <= 20 && /\d/.test(value) && /[a-zA-Z]/.test(value);
      };

    return(
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
                        id="password" value={password} onChange={handleChange}/>
                         {showWarning && (
                            <WarningMessage>
                            비밀번호는 영문과 숫자를 혼합하여 6자에서 20자 사이로 입력해주세요.
                            </WarningMessage>
                        )}
               
                </div>
                <PasswordText>- 비밀번호는 영문, 숫자를 혼합하여 6~20자로 설정해야 합니다.</PasswordText>
            </Content_4>
            <Content_5>
                <NameContainer>
                    <ImportantText>*</ImportantText>
                    <InputTitle>PASSWORD CHECK</InputTitle>
                </NameContainer>
                <PlaceholderInput type = "password" placeholder="비밀번호 확인을 위하여 다시 한 번 입력하세요"/>
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
                <SignInBtn>
                    <NextBtnText> 회원가입 </NextBtnText>
                </SignInBtn>
            </BtnWrapper>
        </SigninContainer>
    )
}

export default Information;