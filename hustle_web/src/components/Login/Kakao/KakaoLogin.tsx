
const kakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API;
  const REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`

  window.location.href = kakaoUrl;
  return (
    <div>kakao login 이동중 ...
    </div>
  );
};

export default kakaoLogin;