import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { SignInProps } from '../../constants/interfaces';
import { defaultSignInFormValue } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';
import UniversitySearch from './UniversitySearch';

const SignIn = () => {
  const navigate = useNavigate();
  // const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>('');
  // const [gender, setGender] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const handleButtonClick = (selectedGender: string) => {
    setSelectedGender(selectedGender); // 클릭된 버튼의 상태를 업데이트
  };

  const handleSelectUniversity = (universityId: string) => {
    setSelectedUniversityId(universityId); // UniversitySearch 컴포넌트에서 받아온 id를 상태로 설정
  };

  const onSubmitHandler: SubmitHandler<SignInProps> = async (
    data: SignInProps
  ) => {
    try {
      const response = await axios.post(
        'https://api.sport-hustle.com/api/auth/signup',
        {
          email: data.id,
          password: data.password,
          // passwordcheck: data.passwordcheck,
          name: data.name,
          birthday: data.birth,
          gender: selectedGender,
          universityId: selectedUniversityId
        }
      );

      if (response.status === 400) {
        alert('이미 존재하는 유저입니다.');
        return;
      }
      if (response.status === 200) {
        console.log(data);
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      }

      if (!data.gender) {
        alert('성별을 선택해주세요.');
        return;
      }
      if (data.password !== data.passwordcheck) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
    } catch (e) {
      alert('회원가입에 실패하셨습니다. 다시 회원가입 해주세요');
    }
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
      <form>
        <S.H2>회원가입</S.H2>
        <S.Box>
          <S.InputLabel>아이디</S.InputLabel>
          <S.InputLarge
            type='id'
            placeholder='아이디를 입력하세요'
            {...register('id', idRequirements)}
          />
          {errors.id && errors.id.type === 'pattern' && (
            <S.ErrorDiv>{errors.id.message}</S.ErrorDiv>
          )}
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
                isselected={selectedGender === 'MALE'}
                onClick={() => {
                  handleButtonClick('MALE');
                  setSelectedGender('MALE');
                }}
              >
                남자
              </S.Genderbutton>
              <S.Genderbutton
                type='button'
                isselected={selectedGender === 'FEMALE'}
                onClick={() => {
                  handleButtonClick('FEMALE');
                  setSelectedGender('FEMALE');
                }}
              >
                여자
              </S.Genderbutton>
            </div>
          </S.Box>
        }

        <S.Box>
          <UniversitySearch onSelectUniversity={handleSelectUniversity} />
        </S.Box>

        <S.Box>
          <S.SubmitButton type='submit' onClick={handleSubmit(onSubmitHandler)}>
            회원가입
          </S.SubmitButton>
        </S.Box>
      </form>
    </S.Layout>
  );
};

export default SignIn;
