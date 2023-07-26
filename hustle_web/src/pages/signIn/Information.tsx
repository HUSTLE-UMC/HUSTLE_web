import React from "react";
import styled from "styled-components";
import * as S from './signinStyles';
import * as I from './styles';
import profile from '../../../src/assets/images/profile_img.svg'
import {isValidPassword} from '../../utils/utility'
import { useRecoilState } from "recoil";
import { confirmPasswordState, passwordState, showConfirmPasswordWarningState, showPasswordWarningState } from '../../recoil/signin'

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
            <S.SigninContainer>
                <I.TitleContainer>
                    <I.Title>회원가입</I.Title>
                </I.TitleContainer>
                <HorizontalLine/>
                <I.FlexField>
                    <I.ProfileContainer>
                        <I.ProfileImg src={profile} alt="프로필" />
                        <I.ProfileText>프로필 사진 등록</I.ProfileText>
                    </I.ProfileContainer>
                    <I.NameField>
                        <I.NameContainer>
                            <I.ImportantText>*</I.ImportantText>
                            <I.InputTitle>NAME</I.InputTitle>
                        </I.NameContainer>
                        <I.StyledInput type="text"/>
                    </I.NameField>
                </I.FlexField>
                <I.FlexField>
                    <I.BirthContainer>
                        <I.NameContainer>
                            <I.ImportantText>*</I.ImportantText>
                            <I.InputTitle>생년월일</I.InputTitle>
                        </I.NameContainer>
                        <I.BirthInputContainer>
                            <I.BirthInput type = "text"/>
                            <I.BirthInput type = "text"/>
                            <I.BirthInput type = "text"/>
                        </I.BirthInputContainer>
                    </I.BirthContainer>
                    <I.GenderContainer>
                        <I.NameContainer>
                            <I.ImportantText>*</I.ImportantText>
                            <I.InputTitle>성별</I.InputTitle>
                        </I.NameContainer>
                        <I.GenderInput type = "text" placeholder="남/여"/>
                    </I.GenderContainer>  
                </I.FlexField>
                <I.FlexField>
                    <I.InputContainer>
                        <I.NameContainer>
                            <I.ImportantText>*</I.ImportantText>
                            <I.InputTitle>ID</I.InputTitle>
                        </I.NameContainer>
                        <I.PlaceholderInput type="text" placeholder="아이디를 입력하세요"/>
                    </I.InputContainer>
                    <I.SignInBtn>
                        <I.NextBtnText> 중복확인 </I.NextBtnText>
                    </I.SignInBtn>
                </I.FlexField>
                <I.ColumnField>
                    <I.NameContainer>
                        <I.ImportantText>*</I.ImportantText>
                        <I.InputTitle>PASSWORD</I.InputTitle>
                    </I.NameContainer>
                    <div>
    
                        <I.PlaceholderInput type = "password" placeholder="비밀번호를 입력하세요"
                            id="password" value={password} onChange={handleChangePassword}/>
                            {showPasswordWarning && (
                                <I.WarningMessage>
                                비밀번호는 영문과 숫자를 혼합하여 6자에서 20자 사이로 입력해주세요.
                                </I.WarningMessage>
                            )}
                
                    </div>
                    
                </I.ColumnField>
                <I.ColumnField>
                    <I.NameContainer>
                        <I.ImportantText>*</I.ImportantText>
                        <I.InputTitle>PASSWORD CHECK</I.InputTitle>
                    </I.NameContainer>
                    <I.PlaceholderInput type = "password" placeholder="비밀번호 확인을 위하여 다시 한 번 입력하세요"
                    value={confirmPassword} onChange={handleChangeConfirmPassword}/>
                    {showConfirmPasswordWarning && (
                        <I.WarningMessage>비밀번호가 일치하지 않습니다.</I.WarningMessage>
                    )}
                </I.ColumnField>
                <I.FlexField>
                    <I.InputContainer>
                        <I.NameContainer>
                            <I.ImportantText>*</I.ImportantText>
                            <I.InputTitle>소속 대학교</I.InputTitle>
                        </I.NameContainer>
                        <I.PlaceholderInput type = "text" placeholder="재학 중인 대학교를 입력하세요"/>
                    </I.InputContainer>
                        <I.SignInBtn>
                            <I.NextBtnText> 검색하기 </I.NextBtnText>
                        </I.SignInBtn>
                    
                </I.FlexField>
                <I.BtnWrapper>
                    <I.SignInBtn type = "submit">
                        <I.NextBtnText> 회원가입 </I.NextBtnText>
                    </I.SignInBtn>
                </I.BtnWrapper>
            </S.SigninContainer>
        </form>
    )
}

export default Information;