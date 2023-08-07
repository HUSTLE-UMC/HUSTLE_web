import React from 'react';
import * as M from './Styles';
import { Photo } from '../../../stories/Icons/svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostMatchProps } from '../../../constants/interfaces';
import { defaultPostFormValue } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';

const { contentRequirements } = FormRequirements;
const defaultValue = defaultPostFormValue;

export const PostForm = () => {
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
        <div>
          <M.TitleBox>동아리 명</M.TitleBox>
          <M.InputLarge
            placeholder='동아리 명을 입력하세요'
            {...register('clubName', contentRequirements)}
          />
          {errors.clubName && (
            <M.ErrorText>{errors.clubName.message}</M.ErrorText>
          )}
        </div>
        <div>
          <M.TitleBox>대표자 연락처</M.TitleBox>
          <M.InputBox>
            <M.InputSmall {...register('person', contentRequirements)} />

            <M.InputSmall {...register('contact', contentRequirements)} />
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
        </div>
        <div>
          <M.TitleBox>교류전 제목</M.TitleBox>
          <M.InputLarge
            placeholder='교류전 제목을 입력하세요'
            {...register('title', contentRequirements)}
          />
          {errors.title && <M.ErrorText>{errors.title.message}</M.ErrorText>}
        </div>
        <div>
          <M.TitleBox>일시</M.TitleBox>
          <M.InputLarge
            type='date'
            {...register('date', contentRequirements)}
          />
          {errors.date && <M.ErrorText>{errors.date.message}</M.ErrorText>}
        </div>
        <div>
          <M.TitleBox>교류전 위치</M.TitleBox>
          <M.InputLarge
            placeholder='교류전 위치를 입력하세요'
            {...register('location', contentRequirements)}
          />
          {errors.location && (
            <M.ErrorText>{errors.location.message}</M.ErrorText>
          )}
        </div>
        <M.ImageBox>
          <Photo />
        </M.ImageBox>
        <M.ImageCaption>교류전 위치 사진을 업로드 해주세요</M.ImageCaption>
        <M.SubmitButton type='submit'>신청하기</M.SubmitButton>
      </M.PostContainer>
    </form>
  );
};

export default PostForm;
