import React,{useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form';
import * as F from './FindIDStyle'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { forgotProps } from '../../../constants/interfaces';
import FormRequirements from '../../../constants/FormRequirements';
import { userAtom } from '../../../recoil/login/login';
import { useRecoilValueLoadable } from 'recoil';

const {usernameRequirements,birthRequirements} = FormRequirements;

const FindId = () => {
  const [checkId, setCheckId] = useState(false); // 아이디 표시 상태 여부
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const {register, handleSubmit, formState : {errors}} = useForm<forgotProps>();
  const userLoadable = useRecoilValueLoadable(userAtom); 
  const [nameError, setNameError] = useState(false);
  const [birthError, setBirthError] = useState(false);

  const onSubmitHandler: SubmitHandler<forgotProps> = (data) => {
    axios.get(`/auth/findId/${data.name}`,{
      headers : {'Content-Type' : 'text/plain;charset=UTF-8'}
    })
    .then(res => {
      const userName = res.data.name;
      setUserId(userName);
      setCheckId(true);
      console.log(userName);
    }).catch((error) => {
      console.log('아이디 찾기 실패', error);
      setCheckId(false);
    })
  } 

  function handleLogin() {
    navigate('/login');
  }

  return (
    <F.Container>
      {!checkId ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <F.Div>
            <F.Text>이름</F.Text>
            <F.Input type='username' placeholder='이름을 입력하세요'
            {...register('name', usernameRequirements)} 
            onError = {nameError}
            />
            {errors.name && (<F.ErrorDiv>{errors.name.message}</F.ErrorDiv>)}
          </F.Div>
          <F.Div>
            <F.Text>생년월일</F.Text>
            <F.Input type='birth' placeholder='생년월일을 입력하세요'
            {...register('birth', birthRequirements)}
            onError = {birthError}
            />
            {errors.birth && (<F.ErrorDiv>{errors.birth.message}</F.ErrorDiv>)}
          </F.Div>
          <F.Div>
          <F.Button type='submit'>확인</F.Button>
          </F.Div>
        </form>
      ): (
        <F.Div>
          <F.Div>
          {userLoadable.state === 'loading' || userLoadable.state === 'hasValue' ? (
              <F.P>아이디 찾기 중...</F.P>
            ) : userLoadable.contents.username ? (
              <F.P>{userLoadable.contents.username}님이 사용하신 ID는 <br/>{userId}입니다.</F.P>
            ) : (
              <F.ErrorDiv>* 아이디가 존재하지 않습니다.</F.ErrorDiv>
            )}
          </F.Div>
          <F.Button onClick={handleLogin}>로그인 하러가기</F.Button>
        </F.Div>
      )}
    </F.Container>
  )
}

export default FindId;