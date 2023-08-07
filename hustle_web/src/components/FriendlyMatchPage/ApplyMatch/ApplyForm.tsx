import * as S from './Styles';
import DropDown from '../../DropDown/DropDown';
import SportsMenu from '../../SportsMenu/SportsMenu';
import FormRequirements from '../../../constants/FormRequirements';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApplyMatchProps } from '../../../constants/interfaces';
import { defaultApplyFormValue } from '../../../constants/defaultFormOption';

const { contentRequirements } = FormRequirements;
const defaultValue = defaultApplyFormValue;

export const ApplyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ApplyMatchProps>({ defaultValues: defaultValue });

  const onSubmitHandler: SubmitHandler<ApplyMatchProps> = (data) => {
    console.log(data);
    alert('교류전 신청이 완료되었습니다.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <SportsMenu />
      <S.ContentLayout>
        <S.SideContainer>
          <DropDown index={1} />
        </S.SideContainer>
        <S.FormLayout>
          <S.TitleBox>동아리 명</S.TitleBox>
          <S.InputLarge
            placeholder='동아리 명을 입력하세요'
            {...register('clubName', contentRequirements)}
          />
          {errors.clubName && (
            <S.ErrorText>{errors.clubName.message}</S.ErrorText>
          )}
          <S.TitleBox>대표자 연락처</S.TitleBox>
          <S.InputBox>
            <S.InputSmall
              placeholder='이름'
              {...register('person', contentRequirements)}
            />
            <S.InputSmall
              placeholder='연락처'
              {...register('contact', contentRequirements)}
            />
          </S.InputBox>
          <S.ErrorBox>
            {errors.person && errors.contact && (
              <S.ErrorText>{errors.person.message}</S.ErrorText>
            )}
            {errors.person && !errors.contact && (
              <S.ErrorText>{errors.person.message}</S.ErrorText>
            )}
            {errors.contact && !errors.person && (
              <S.ErrorText>{errors.contact.message}</S.ErrorText>
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
