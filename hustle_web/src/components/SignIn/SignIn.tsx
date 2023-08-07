import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import React from 'react';
import MainInput from '../MainInput/MainInput';
import SubmitButton from '../FriendlyMatchPage/SubmitButton/SubmitButton';

const SignIn = () => {
  const navigate = useNavigate();

  const handleInputEnter = () => {
    navigate('/next-page');
  };

  return (
    <S.Layout>
      <S.H2>회원가입</S.H2>
      <S.Box>
        <S.InputLabel>아이디</S.InputLabel>
        <MainInput
          type='text' // 원하는 타입으로 변경하세요
          placeholder='아이디를 입력하세요'
          onEnter={handleInputEnter}
          small={false}
        />
      </S.Box>
      <S.Box>
        <S.InputLabel>비밀번호</S.InputLabel>
        <MainInput
          type='text' // 원하는 타입으로 변경하세요
          placeholder='비밀번호를 입력하세요'
          onEnter={handleInputEnter}
          small={false}
        />
      </S.Box>
      <S.Box>
        <S.InputLabel>비밀번호확인</S.InputLabel>
        <MainInput
          type='text' // 원하는 타입으로 변경하세요
          placeholder='비밀번호를 다시 입력하세요'
          onEnter={handleInputEnter}
          small={false}
        />
      </S.Box>
      <S.Box>
        <S.InputLabel>이름</S.InputLabel>
        <MainInput
          type='text' // 원하는 타입으로 변경하세요
          placeholder='이름을 입력하세요'
          onEnter={handleInputEnter}
          small={false}
        />
      </S.Box>
      <S.Box>
        <S.InputLabel>소속 대학교</S.InputLabel>
        <MainInput
          type='text' // 원하는 타입으로 변경하세요
          placeholder='재학 중인 대학교를 입력하세요'
          onEnter={handleInputEnter}
          small={false}
        />
      </S.Box>
      <S.Box>
        <SubmitButton
          label='회원가입'
          small={false}
          onClick={handleInputEnter}
        />
      </S.Box>
    </S.Layout>
  );
};

export default SignIn;
