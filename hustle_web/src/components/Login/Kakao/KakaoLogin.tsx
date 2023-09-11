import axios from 'axios';
import { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';


const KakaoLoginRedirect = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    axios.get(`https://api.sport-hustle.com/api/oauth/kakao/token?code=${code}`, {
      headers : {'Content-Type' : 'application/json;charset=utf-8'},
    })
    .then((res) => {
      console.log('코드 전송 성공', res);
      // localStorage.setItem('token : ',res.headers.authorization)
      localStorage.setItem('카카오 토큰', res.data.accessToken);
      setIsLoggedIn(true);
      navigate('/');
    }).catch((error) => {
      console.log('코드 전송 실패', error);
    })
  },[setIsLoggedIn, navigate]);


  return (
    <div>
      로그인 중입니다. 잠시만 기다려주세요
    </div>
  );
};

export default KakaoLoginRedirect;