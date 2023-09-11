import axios from 'axios';
import { useEffect } from 'react';

const KakaoLoginRedirect = () => {
  console.log('카카오 라우터 페이지');
  useEffect(() => {
    console.log('카카오 라우터 페이지');
    const code = new URL(window.location.href).searchParams.get('code');
    const REST_API_KEY = '170a8a097251697cc023f05857280065';
    const REDIRECT_URL = 'http://localhost:3000/kakaoLogin';
    const grantType = 'authorization_code';
    axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}`,
      {},
      { headers: { 'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8' },
    }
  )
  .then((res) => {
      console.log(res);
      const {data} = res;
      const { access_token, refresh_token } = data;
      // res에 포함된 토큰 받아 원하는 로직 ㄱ ㄱ
      if(access_token) {
        console.log( `Bearer ${access_token}`);
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        
        axios
          .post(
              'https://kapi.kakao.com/v2/user/me',
              {},
              {
                  headers: {
                      Authorization: `Bearer ${access_token}`,
                      'Content-type' : 'application/x-www-form-urlencoded',
                  },
              }
          )
          .then((res) => {
            const userData = {
              email: res.data.kakao_account.email,
              name: res.data.kakao_account.profile.nickname,
              birthday: res.data.kakao_account.birthday,
              gender : res.data.kakao_account.gender,
              universityId : 0,
              snsId: '',
              snsType: '',
              isMailing : res.data.kakao_account.has_email,
              // 필요한 다른 사용자 정보 추가
            };
            axios
            .post('https://api.sport-hustle.com/api/auth/signup/oauth', userData)
            .then((res)=> {
              console.log('회원가입 성공', res);
            })
            .catch((error) => {
              console.log('회원가입 오류 : ', error);
            })
              console.log('데이터 성공 : ', res);
          });
  } else {
    console.log('accessToken 없음');
  }
})
  .catch((Error) => {
      console.log(Error)
  })
  },[])

  return (
    <div>
      로그인 중입니다. 잠시만 기다려주세요
    </div>
  );
};

export default KakaoLoginRedirect;