import React from 'react';
import * as M from './Styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostMatchProps } from '../../../constants/interfaces';
import { defaultPostFormValue } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';
import LocationBox from '../LocationBox/LocationBox';

const { contentRequirements } = FormRequirements;
const defaultValue = defaultPostFormValue;

export const MatchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PostMatchProps>({
    defaultValues: {
      ...defaultValue
    }
  });

  const onSubmitHandler: SubmitHandler<PostMatchProps> = (data) => {
    console.log(data);
    alert('교류전 신청이 완료되었습니다.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <M.PostContainer>
        <M.PostBox>
          <M.TitleBox>동아리 명</M.TitleBox>
          <M.InputLarge
            placeholder='동아리 명을 입력하세요'
            {...register('clubName', contentRequirements)}
          />
          {errors.clubName && (
            <M.ErrorText>{errors.clubName.message}</M.ErrorText>
          )}
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>대표자 연락처</M.TitleBox>
          <M.InputBox>
            <M.InputSmall
              placeholder='이름'
              {...register('person', contentRequirements)}
            />

            <M.InputSmall
              placeholder='연락처'
              {...register('contact', contentRequirements)}
            />
          </M.InputBox>
          <M.ErrorBox>
            {errors.person && errors.contact && (
              <M.ErrorText>{errors.person.message}</M.ErrorText>
            )}
            {errors.person && !errors.contact && (
              <M.ErrorText>{errors.person.message}</M.ErrorText>
            )}
            {errors.contact && !errors.person && (
              <M.ErrorText>{errors.contact.message}</M.ErrorText>
            )}
          </M.ErrorBox>
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>교류전 제목</M.TitleBox>
          <M.InputLarge
            placeholder='교류전 제목을 입력하세요'
            {...register('title', contentRequirements)}
          />
          {errors.title && <M.ErrorText>{errors.title.message}</M.ErrorText>}
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>일시</M.TitleBox>
          <M.InputLarge
            type='date'
            {...register('date', contentRequirements)}
          />
          {errors.date && <M.ErrorText>{errors.date.message}</M.ErrorText>}
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>교류전 위치</M.TitleBox>
          <M.InputLarge
            placeholder='교류전 위치를 입력하세요'
            {...register('location', contentRequirements)}
          />
          {errors.location && (
            <M.ErrorText>{errors.location.message}</M.ErrorText>
          )}
        </M.PostBox>
        <LocationBox />
        <M.SubmitButton type='submit'>신청하기</M.SubmitButton>
      </M.PostContainer>
    </form>
  );
};

export default MatchForm;
