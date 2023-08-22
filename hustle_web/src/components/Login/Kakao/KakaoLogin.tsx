import axios from 'axios';
import { useEffect } from 'react';

const kakaoLogin = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const grantType = 'authorization_code';
    const REST_API_KEY = process.env.REACT_API_KEY;
    const REDIRECT_URI = process.env.REDIRECT_URI;
    
    axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {},
      { headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }}
    )
    .then((res) => {
      console.log(res);
      const accessToken = res.data.accessToken;
      axios.post('https://api.sport-hustle.com/api/auth/signin/oauth',
      {},
      {
        headers : {
          Authorization : `Bearer ${accessToken}`,
          'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8',
        }
      })
      .then((res: any) => {
        console.log('seconde : ', res.data.accessToken);
      })
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <div>
      로그인 중입니다. 잠시만 기다려주세요
    </div>
  );
};

export default kakaoLogin;