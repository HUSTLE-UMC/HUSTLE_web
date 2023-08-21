import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { SignInProps } from '../../constants/interfaces';
import { defaultSignInFormValue } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';
import UniversitySearch from './UniversitySearch';

const SignIn = () => {
  const navigate = useNavigate();
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [gender, setGender] = useState('');

  const handleButtonClick = (selectedGender: string) => {
    const genderClick = `${selectedGender}`;
    setGender(genderClick); // 클릭된 버튼의 상태를 업데이트
    console.log(genderClick);
  };

  const handleUniversitySelection = (universityId: number) => {
    const university = `${universityId}`;
    setSelectedUniversity(university);
    console.log(selectedUniversity);
  };

  const onSubmitHandler: SubmitHandler<SignInProps> = async(data) => {
    try {
    console.log(data);
    const formData = {
          email: data.id,
          password: data.password,
          name: data.name,
          birth: data.birth,
          university: selectedUniversity,
          gender: gender,
        }

     const res = await axios.post('https://api.sport-hustle.com/api/auth/signin', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      if (res.status === 200) {
        console.log(res.data);
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      } else if (res.status === 400) {
        alert('이미 존재하는 유저입니다.');
      }

      if (!data.gender) {
        alert('성별을 선택해주세요.');
        return;
      }
      if (data.password !== data.passwordcheck) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
    } catch(error) {
      console.log(error);
      alert('회원가입에 실패하셨습니다. 다시 회원가입 해주세요');
    };
  };

  const {
    contentRequirements,
    passwordCheckRequirements,
    passwordRequirements,
    idRequirements
  } = FormRequirements;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInProps>({
    defaultValues: { ...defaultSignInFormValue }
  });

  return (
    <S.Layout>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.H2>회원가입</S.H2>
        <S.Box>
          <S.InputLabel>아이디</S.InputLabel>
          <S.InputLarge
            type='id'
            placeholder='아이디를 입력하세요'
            {...register('id', idRequirements)}
          />
          {/* {errors.id && errors.id.type === 'pattern' && (
            <S.ErrorDiv>{errors.id.message}</S.ErrorDiv>
          )} */}
          {errors.id && errors.id.type !== 'pattern' && (
            <S.ErrorDiv>{errors.id.message}</S.ErrorDiv>
          )}
        </S.Box>

        <S.Box>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.InputLarge
            type='password'
            placeholder='비밀번호를 입력하세요'
            {...register('password', {
              required: passwordRequirements.required,
              pattern: passwordRequirements.pattern
            })}
          />
          {errors.password && errors.password.type === 'pattern' && (
            <S.ErrorDiv>{errors.password.message}</S.ErrorDiv>
          )}
          {errors.password && errors.password.type !== 'pattern' && (
            <S.ErrorDiv>{errors.password.message}</S.ErrorDiv>
          )}
        </S.Box>

        <S.Box>
          <S.InputLabel>비밀번호 확인</S.InputLabel>
          <S.InputLarge
            type='password'
            placeholder='비밀번호를 다시 입력하세요'
            {...register('passwordcheck', {
              required: passwordCheckRequirements.required,
              pattern: passwordCheckRequirements.pattern
            })}
          />
          {errors.passwordcheck && errors.passwordcheck.type === 'pattern' && (
            <S.ErrorDiv>{errors.passwordcheck.message}</S.ErrorDiv>
          )}
          {errors.passwordcheck && errors.passwordcheck.type !== 'pattern' && (
            <S.ErrorDiv>{errors.passwordcheck.message}</S.ErrorDiv>
          )}
        </S.Box>
        <S.Box>
          <S.InputLabel>이름</S.InputLabel>
          <S.InputLarge
            type='name' // 원하는 타입으로 변경하세요
            placeholder='이름을 입력하세요'
            {...register('name', contentRequirements)}
          />
          {errors.name && <S.ErrorDiv>{errors.name.message}</S.ErrorDiv>}
        </S.Box>

        <S.Box>
          <S.InputLabel>생일</S.InputLabel>
          <S.InputLarge
            type='date'
            placeholder='이름을 입력하세요'
            {...register('birth', contentRequirements)}
          />
          {errors.birth && <S.ErrorDiv>{errors.birth.message}</S.ErrorDiv>}
        </S.Box>

        {
          <S.Box>
            <S.InputLabel>성별</S.InputLabel>
            <div>
              <S.Genderbutton
                type='button'
                isselected={gender === 'MALE'}
                onClick={() => {
                  handleButtonClick(gender);
                }}
              >
                남자
              </S.Genderbutton>
              <S.Genderbutton
                type='button'
                isselected={gender === 'FEMALE'}
                onClick={() => {
                  handleButtonClick(gender);
                }}
              >
                여자
              </S.Genderbutton>
            </div>
          </S.Box>
        }

        <S.Box>
          <UniversitySearch onSelecteUniversity={handleUniversitySelection} />
        </S.Box>

        <S.Box>
          <S.SubmitButton type='submit'>
            회원가입
          </S.SubmitButton>
        </S.Box>
      </form>
    </S.Layout>
  );
};

export default SignIn;
