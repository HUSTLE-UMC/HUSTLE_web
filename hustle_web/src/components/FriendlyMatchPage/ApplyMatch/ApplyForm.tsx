import * as S from './Styles';
import SportsMenu from '../../SportsMenu/SportsMenu';
import FormRequirements from '../../../constants/FormRequirements';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApplyMatchProps } from '../../../constants/interfaces';
import { defaultApplyFormValue } from '../../../constants/defaultFormOption';
import { matchSelector } from '../../../recoil/friendlyMatchPage/selectors';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { contentRequirements } = FormRequirements;
const defaultValue = defaultApplyFormValue;

export const ApplyForm = () => {
  const match = useRecoilValue(matchSelector);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<ApplyMatchProps>({ defaultValues: defaultValue });

  const onSubmitHandler: SubmitHandler<ApplyMatchProps> = async (data) => {
    const requestData = {
      type: 'WAIT',
      name: data.name,
      phoneNumber: data.phoneNumber,
      locationAddress: '서울시 강남구'
    };

    try {
      const response = await axios.post(
        'https://api.sport-hustle.com/api/friendMatchingPosts/1?userId=4',
        requestData,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
          }
        }
      );

      if (response.status == 200) {
        console.log(response.data);
        alert('대회 개설이 완료되었습니다.');
        navigate(-1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <SportsMenu disable />
      <S.ContentLayout>
        <S.SideContainer></S.SideContainer>
        <S.FormLayout>
          <S.TitleBox>동아리 명</S.TitleBox>
          <S.InputLarge placeholder='동아리 명을 입력하세요' />
          {/* {errors.name && <S.ErrorText>{errors.name.message}</S.ErrorText>} */}
          <S.TitleBox>대표자 연락처</S.TitleBox>
          <S.InputBox>
            <S.InputSmall
              placeholder='이름'
              {...register('name', contentRequirements)}
            />
            <S.InputSmall
              placeholder='연락처'
              {...register('phoneNumber', contentRequirements)}
            />
          </S.InputBox>
          <S.ErrorBox>
            {errors.name && errors.phoneNumber && (
              <S.ErrorText>{errors.name.message}</S.ErrorText>
            )}
            {errors.name && !errors.phoneNumber && (
              <S.ErrorText>{errors.name.message}</S.ErrorText>
            )}
            {errors.phoneNumber && !errors.name && (
              <S.ErrorText>{errors.phoneNumber.message}</S.ErrorText>
            )}
          </S.ErrorBox>
          <S.SubmitButton type='submit'>신청하기</S.SubmitButton>
        </S.FormLayout>
        <S.SideContainer />
      </S.ContentLayout>
    </form>
  );
};

export default ApplyForm;
