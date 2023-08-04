import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { findPwProps, isMatchProps } from '../../../constants/interfaces';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as F from '../FindID/FindIDStyle';

import FormRequirements from '../../../constants/FormRequirements';
import { userAtom } from '../../../recoil/login/login';
import { useRecoilValueLoadable } from 'recoil';

const { usernameRequirements, birthRequirements, idRequirements } =
  FormRequirements;

const FindPw = () => {
  const [idError, setIdError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [foundUser, setFoundUser] = useState<isMatchProps | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<findPwProps>();

  const onSubmitHandler: SubmitHandler<findPwProps> = (data) => {
    axios
      .get('auth/findPassword', {
        params: {
          name: data.name,
          birth: data.birth,
          id: data.id
        }
      })
      .then((res) => {
        const foundUser = res.data;
        setFoundUser(foundUser);
      })
      .catch((error) => {
        console.log('failed find password', error);
      });
  };

  const handleResetPassword = () => {
    navigate('/reset');
  };

  return (
    <F.Container>
      {!foundUser ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <F.Div>
            <F.Text>이름</F.Text>
            <F.Input
              type='username'
              placeholder='이름을 입력하세요'
              {...register('name', usernameRequirements)}
              onError={nameError}
            />
            {errors.name && <F.ErrorDiv>{errors.name.message}</F.ErrorDiv>}
          </F.Div>
          <F.Div>
            <F.Text>생년월일</F.Text>
            <F.Input
              type='birth'
              placeholder='생년월일을 입력하세요'
              {...register('birth', birthRequirements)}
              onError={birthError}
            />
            {errors.birth && <F.ErrorDiv>{errors.birth.message}</F.ErrorDiv>}
          </F.Div>
          <F.Div>
            <F.Text>아이디</F.Text>
            <F.Input
              type='id'
              placeholder='아이디를 입력하세요'
              {...register('id', idRequirements)}
              onError={idError}
            />
            {errors.id && <F.ErrorDiv>{errors.id.message}</F.ErrorDiv>}
          </F.Div>
          <F.Div>
            <F.Button type='submit'>비밀번호 재설정</F.Button>
          </F.Div>
        </form>
      ) : (
        <div>
          {foundUser.isMatch ? (
            <>
              <F.P>비밀번호 재설정 페이지로 이동중...</F.P>
              <F.Button onClick={handleResetPassword}>비밀번호 재성정</F.Button>
            </>
          ) : (
            <F.P>입력한 정보와 일치하는 사용자를 찾을 수 없습니다.</F.P>
          )}
        </div>
      )}
    </F.Container>
  );
};

export default FindPw;
