import React, { useContext, useState } from 'react';
import * as L from './LoginStyle';
import { useNavigate } from 'react-router-dom';
import { LoginProps } from '../../constants/interfaces';
import { useForm, SubmitHandler } from 'react-hook-form';
import { defaultLoginValue } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthProvider';

const { idRequirements, passwordRequirements } = FormRequirements;
const defaultValue = defaultLoginValue;

const LoginMain = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn, setAccessToken } =
    useContext(AuthContext);
  // const [user, setUser] = useRecoilState(userAtom);

  function signInPage() {
    navigate('/signIn');
  }

  function forgotPage() {
    navigate('/forgot');
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginProps>({
    defaultValues: defaultValue
  });

  const onSubmitHandler: SubmitHandler<LoginProps> = async (data) => {
    console.log(data);
    const formData = {
      email : data.email,
      password : data.password,
    };
    console.log(formData);
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.sport-hustle.com/api/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
      const user = response.data;
      const accessToken = user.tokenInfo.accessToken;

      // token 저장
      localStorage.setItem('refreshToken', user.tokenInfo.refreshToken);
      // 리코일에 jwt토큰에 업뎃
      setAccessToken(accessToken);
      // 리코일에 유저정보 저장
      // setUser(user);
      setIsLoggedIn(true);
      navigate('/');
    } else {
      console.log('로그인 실패');
      alert('로그인에 실패하셨습니다. 다시 로그인해주세요');
    } 
    } catch (error) {
      console.error('로그인 오류', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  
    const REST_API_KEY = '170a8a097251697cc023f05857280065';
    const REDIRECT_URL = 'http://localhost:3000/kakaoLogin';
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

    const kakaoLoginHandler = () => {
      window.location.href = kakaoUrl;
    }


  return (
    <L.Layout>
      <L.H2>로그인</L.H2>
      <L.Container onSubmit={handleSubmit(onSubmitHandler)}>
        <L.Box>
          <div>
            <L.Input
              type='email'
              placeholder='아이디를 입력하세요'
              {...register('email', {...idRequirements})}
            />
            {errors.email && (
              <L.ErrorDiv>{errors.email.message}</L.ErrorDiv>
            )}
          </div>
          <div>
            <L.Input
              type='password'
              placeholder='비밀번호를 입력하세요'
              {...register('password', {...passwordRequirements})}
            />
            {errors.password && errors.password.type === 'pattern' && (
              <L.ErrorDiv>{errors.password.message}</L.ErrorDiv>
            )}
          </div>
          <L.SubmitButton type='submit'>
            {isLoading ? 'LOGINING...' : '로그인'}
          </L.SubmitButton>
        </L.Box>
      </L.Container>
      <L.Line></L.Line>
      <L.ButtonDiv>
        <L.KakaoButton
          onClick={kakaoLoginHandler}
        >카카오 로그인</L.KakaoButton>
      </L.ButtonDiv>
      <L.ButtonDiv>
        <L.Button onClick={forgotPage}>아이디 찾기 · 비밀번호 찾기</L.Button>
        <L.ButtonLine></L.ButtonLine>
        <L.Button onClick={signInPage}>회원가입</L.Button>
      </L.ButtonDiv>
    </L.Layout>
  );
};

export default LoginMain;

// 참고
// https://velog.io/@tamagoyakii/42byte-Recoil%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
