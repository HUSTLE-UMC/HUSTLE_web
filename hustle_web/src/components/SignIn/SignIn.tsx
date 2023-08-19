import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { SignInProps } from '../../constants/interfaces';
import { defaultSignInFormValue } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';
import { GenderButtonProps } from './GenderButton';

const SignIn = () => {
  const navigate = useNavigate();
  const [universityList, setUniversityList] = useState([
    { id: '', name: '', address: '' }
  ]);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가
  const [gender, setGender] = useState('');
  const handleButtonClick = (selectedGender: string) => {
    setGender(selectedGender); // 클릭된 버튼의 상태를 업데이트
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
          passwordcheck: data.passwordcheck,
          name: data.name,
          birth: data.birth,
          university: data.university,
          gender: data.gender
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

  const handleSearchUniversity = async () => {
    try {
      const response = await axios.get(
        `https://api.example.com/universities?search=${searchQuery}`
      );
      setUniversityList(response.data); // 대학교 목록 설정
    } catch (error) {
      console.error('대학교 검색 오류:', error);
    }
  };

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
                isselected={gender === 'male'}
                onClick={() => {
                  handleButtonClick('male');
                  register('gender', contentRequirements);
                }}
              >
                남자
              </S.Genderbutton>
              <S.Genderbutton
                type='button'
                isselected={gender === 'female'}
                onClick={() => {
                  handleButtonClick('female');
                  register('gender', contentRequirements);
                }}
              >
                여자
              </S.Genderbutton>
            </div>
          </S.Box>
        }

        <S.Box>
          <S.InputLabel>소속 대학교</S.InputLabel>
          <S.InputLarge
            type='university' // 원하는 타입으로 변경하세요
            placeholder='재학 중인 대학교를 입력하세요'
            value={searchQuery} // 입력창에 표시될 값은 searchQuery 상태
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
          />
          <S.SubmitButton
            type='button'
            onClick={() => handleSearchUniversity()} // 검색 버튼 클릭 시 대학교 목록 검색
          >
            검색
          </S.SubmitButton>

          {universityList.length > 0 && (
            <S.UniversityList>
              {' '}
              {universityList.map((university, id) => (
                <div key={id}>
                  {university.name} {university.address}
                  <button
                    type='button'
                    onClick={() => {
                      setSearchQuery(university.name);
                      register('university', { value: university.name });
                    }}
                  >
                    선택
                  </button>
                </div>
              ))}
            </S.UniversityList>
          )}
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
