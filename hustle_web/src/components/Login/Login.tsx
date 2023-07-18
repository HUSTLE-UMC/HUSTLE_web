import React, { useContext, useState } from "react";
import * as L from './LoginStyle';
import { useNavigate } from "react-router-dom";
import { LoginProps } from "../../constants/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { defaultLoginValue } from "../../constants/defaultFormOption";
import FormRequirements from "../../constants/FormRequirements";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";

const {usernameRequirements, passwordRequirements} = FormRequirements;
let defaultValue = defaultLoginValue;

const LoginMain = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {setIsLoggedIn, setAccessToken, refreshToken} = useContext(AuthContext);

  function joinPage() {
    navigate("/join")
  }

  function forgotIdPage() {
    navigate("/forgotId")
  }

  function forgotPwPage() {
    navigate("/forgotpw")
  }
  
  const {
    register,
    handleSubmit,
    formState : {errors},
  } = useForm<LoginProps>({
    defaultValues: defaultValue,
  });

  const onSubmitHandler: SubmitHandler<LoginProps> = async(data:LoginProps) => {
    console.log(data);
    setIsLoading(true);
    try{
      const response = await axios.post(
        "/auth/login",
        data,
        {
          headers : {
            "Content-Type": "application/json",
          },
        });
      const user = response.data;
      const accessToken = user.accessToken;

      //token 저장
      localStorage.setItem("refreshToken", user.refreshToken);
      //리코일에 jwt토큰에 업뎃
      setAccessToken(accessToken);
      setIsLoggedIn(true);
      navigate("/")
    } finally {
      setIsLoading(false);
      console.log("login fail");
      alert("로그인에 실패하셨습니다. 다시 로그인해주세요");
    }
  }


  return (
    <L.Layout>
      <L.H2>로그인</L.H2>
      <L.Line/>
      <L.Container onSubmit={handleSubmit(onSubmitHandler)}>
        <L.Box>
            <L.text>ID</L.text>
            <div>
            <L.Input
              type="username"
              placeholder="아이디를 입력하세요"
              {...register("username",usernameRequirements)}
            />
            {errors.username && (<div>{errors.username.message}</div>)}
          </div>
          <L.text>PASSWORD</L.text>
            <div>
            <L.Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register("password",passwordRequirements)}
            />
            {errors.password && (<div>{errors.password.message}</div>)}
            {errors.password && errors.password.type === "pattern" && (<div>{errors.password.message}</div>)}
            </div>
            <L.SubmitButton type="submit">
              {isLoading ? "LOGINING..." : "로그인"}
            </L.SubmitButton>
        </L.Box>
      </L.Container>
      <L.ButtonDiv>
        <L.Button onClick={forgotIdPage}>ID 찾기</L.Button>
        <L.Button onClick={forgotPwPage}>비밀번호 찾기</L.Button>
        <L.Button onClick={joinPage}>회원가입</L.Button>
      </L.ButtonDiv>  
    </L.Layout>
  )
}

export default LoginMain;

//참고
//https://velog.io/@tamagoyakii/42byte-Recoil%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0