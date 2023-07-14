import { LoginContainer, LoginText } from "./styles";

export const LoginBtn = () =>{
//로그인 안 했을 경우 버튼 <ProfileBtn> 대체
    return(
        <LoginContainer>
            <LoginText>
                로그인/회원가입
            </LoginText>
        </LoginContainer>
    )
}