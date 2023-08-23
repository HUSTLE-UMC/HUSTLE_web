import React from 'react';
import * as M from './Styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostMatchProps } from '../../../constants/interfaces';
import { defaultPostFormValue } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';
import LocationBox from '../LocationBox/LocationBox';
import { Search } from '../../../stories/Icons/svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  LocationState,
  inputValue
} from '../../../recoil/friendlyMatchPage/states';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { contentRequirements } = FormRequirements;
const defaultValue = defaultPostFormValue;

export const InvitationForm = () => {
  const setValue = useSetRecoilState(inputValue);
  const navigate = useNavigate();
  const coords = useRecoilValue(LocationState);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<PostMatchProps>({
    defaultValues: {
      ...defaultValue
    }
  });

  const onSubmitHandler: SubmitHandler<PostMatchProps> = async (data) => {
    const requestData = {
      title: data.title,
      category: 'REQUEST',
      name: data.name,
      phoneNumber: data.phoneNumber,
      startDate: new Date(data.startDate).toISOString(),
      locationAddress: data.locationAddress,
      location: { type: 'Point', coordinates: coords },
      sportEventId: 2,
      clubId: 2
    };
    console.log(requestData);
    try {
      const response = await axios.post(
        'https://api.sport-hustle.com/api/friendMatchingPosts?userId=4',
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
        navigate('/friendly');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSearchHandler = () => {
    const v = getValues('locationAddress');
    if (v.length === 0) alert('주소를 입력하세요.');
    setValue(v);
    console.log(v);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <M.PostContainer>
        {/* <M.PostBox>
          <M.TitleBox>동아리 명</M.TitleBox>
          <M.InputLarge
            placeholder='동아리 명을 입력하세요'
            {...register('clubName', contentRequirements)}
          />
          {errors.clubName && (
            <M.ErrorText>{errors.clubName.message}</M.ErrorText>
          )}
        </M.PostBox> */}
        <M.PostBox>
          <M.TitleBox>대표자 연락처</M.TitleBox>
          <M.InputBox>
            <M.InputSmall
              placeholder='이름'
              {...register('name', contentRequirements)}
            />

            <M.InputSmall
              placeholder='연락처'
              {...register('phoneNumber', contentRequirements)}
            />
          </M.InputBox>
          <M.ErrorBox>
            {errors.name && errors.phoneNumber && (
              <M.ErrorText>{errors.name.message}</M.ErrorText>
            )}
            {errors.name && !errors.phoneNumber && (
              <M.ErrorText>{errors.name.message}</M.ErrorText>
            )}
            {errors.phoneNumber && !errors.name && (
              <M.ErrorText>{errors.phoneNumber.message}</M.ErrorText>
            )}
          </M.ErrorBox>
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>글 제목</M.TitleBox>
          <M.InputLarge
            placeholder='글 제목을 입력하세요'
            {...register('title', contentRequirements)}
          />
          {errors.title && <M.ErrorText>{errors.title.message}</M.ErrorText>}
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>일시</M.TitleBox>
          <M.InputLarge {...register('startDate', contentRequirements)} />
          {errors.startDate && (
            <M.ErrorText>{errors.startDate.message}</M.ErrorText>
          )}
        </M.PostBox>
        <M.PostBox>
          <M.TitleBox>주요 활동 지역</M.TitleBox>
          <M.InputBox>
            <M.InputLarge
              placeholder='주요 활동 지역을 입력하세요'
              {...register('locationAddress', contentRequirements)}
            />
            <M.IconBox onClick={() => onSearchHandler()}>
              <Search />
            </M.IconBox>
          </M.InputBox>
          {errors.locationAddress && (
            <M.ErrorText>{errors.locationAddress.message}</M.ErrorText>
          )}
        </M.PostBox>
        <LocationBox />
        <M.SubmitButton type='submit'>신청하기</M.SubmitButton>
      </M.PostContainer>
    </form>
  );
};

export default InvitationForm;
