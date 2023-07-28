import React from "react";
import * as I from './InformationStyles';
import {isValidPassword} from '../../utils/utility'
import { useRecoilState } from "recoil";
import FormRequirements from '../../constants/FormRequirements';
import { confirmPasswordState, passwordState, showConfirmPasswordWarningState, showPasswordWarningState } from '../../recoil/signin'
import {forgotProps} from "../../constants/interfaces";

const {usernameRequirements,birthRequirements} = FormRequirements;

const Information = () =>{

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
        <I.Container>
        <form onSubmit={handleSubmit}>
                <I.Div>
                <I.TitleWrap>회원가입</I.TitleWrap>
                </I.Div>
            <I.Div>
                <I.TextWrap>아이디</I.TextWrap>
                <I.Input type="username" placeholder="이름을 입력하세요"
                         {...register("name", usernameRequirements)}
                        />
            </I.Div>
        </form>
        </I.Container>
    )
}

export default Information;
