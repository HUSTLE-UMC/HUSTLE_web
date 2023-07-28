import styled from "styled-components";
import { BirthInputProps } from "./types";

export const Title=styled.div`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    float: left;
    margin-left: 69px;
`

export const SigninContainer = styled.div`
    width: 1040px;
    flex-shrink: 0;
    margin-top: 136px;
`

export const GuideText = styled.div`
    color: rgba(0, 0, 0, 0.50);
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const CheckContainer = styled.div`
    border-top: 65px;
    display: flex;
    cursor: pointer;
`;

export const CheckText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CheckboxLabel = styled.label`
margin-top: 65px;
display: flex;
align-items: center;
cursor: pointer;
`;

export const CheckboxInput = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
`;

export const TermsContainer = styled.div`
    margin-top: 38px;
`

export const TermsText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const BoxContainer = styled.div`
  width: 1040px;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: left;
  //align-items: center;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const NextBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 181px;
`
export const NextBtn = styled.button`
    width: 210px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #3F37C9;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NextBtnText = styled.div`
    color: #FFF;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 50px;
    cursor: pointer;
`

export const ProfileText =styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 15px;
    margin-left: 12px;
`

export const ImportantText = styled.div`
    color: #F00;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InputTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const NameContainer = styled.div`
    display: flex;
`

export const StyledInput = styled.input`
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: #FFF;
    margin-top: 10px;
    width: 523px;
    height: 50px;
    padding-left: 20px;
`

export const NameField = styled.div`
    margin-top: 80px;
    margin-left: 83px;
`

export const FlexField = styled.div`
    margin-top: 50px;
    display: flex;
`

export const BirthInput = styled.input<BirthInputProps>`
    width: 202px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: #FFF;
    margin-right: 10px;
    margin-top: 10px;
    padding-left: 20px;
`

export const BirthContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const BirthInputContainer = styled.div`
    display: flex;
`

export const GenderInput = styled.input`
    width: 202px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: #FFF;
    padding-left: 20px;
    margin-top: 10px;
    &::placeholder {
    color:  rgba(0, 0, 0, 0.25);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const GenderContainer = styled.div`
    margin-left: 83px;
`

export const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const SignInBtn = styled.button`
    width: 240px;
    height: 50px;
    display: inline-flex;
    padding: 10px 74px 10px 73px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #3F37C9;
    margin-left: 90px;
    margin-top: 50px;
    cursor: pointer;
`

export const ColumnField = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: 50px;
`

export const PlaceholderInput = styled.input`
    width: 685px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: #FFF;
    padding-left: 20px;
    margin-top: 10px;
    &::placeholder {
    color:  rgba(0, 0, 0, 0.25);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const PasswordText = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 23px;
`

export const BtnWrapper = styled.div`
    text-align: center;
`

export const WarningMessage = styled.div`
color: red;
font-size: 14px;
margin-top: 4px;
`;
