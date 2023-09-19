import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import UniversitySearch from '../../SignIn/UniversitySearch';

const KakaoLoginRedirect = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setAccessToken, refreshAccessToken } = useContext(AuthContext);
  const code = new URL(window.location.href).searchParams.get('code');
  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleUniversitySelection = (universityId: number) => {
    const university = `${universityId}`;
    setSelectedUniversity(university);
    console.log(selectedUniversity);
  };

  const handleSubmit = () => {
    axios.get(`https://api.sport-hustle.com/api/oauth/kakao/token?code=${code}`)
    .then((res) => {
      console.log('카카오 정보 : ',res.data);
      console.log('카카오 accessToken : ',res.data.accessToken);
      const token = res.data.accessToken;
      const postData = {
        kakaoInfo : res.data,
        university : selectedUniversity, // 선택된 대학교 아이디 값
      };
      axios.post('카카오 회원가입 정보 api', postData,{
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log('회원가입 성공 : ', res);
        setIsLoggedIn(true);
        const accessToken = res.data.accessToken;
        localStorage.setItem('카카오 허슬 토큰', accessToken);
        localStorage.setItem('카카오 허슬 리프레시 토큰', res.data.refreshToken);
        setAccessToken(accessToken);
        navigate('/');
      })
    }).catch((error) => {
      console.log('카카오 정보 가져오기 실패',error);
      if(error.res && error.res.status === 400){
        refreshAccessToken();
      } else {
        navigate('/login');
      }
    })
  }


  return (
    <div>
      <div>카카오 추가 정보</div>
      <UniversitySearch onSelecteUniversity={handleUniversitySelection} />
      <button type='submit' onClick={handleSubmit}>회원가입</button>
    </div>
  );
};

export default KakaoLoginRedirect;