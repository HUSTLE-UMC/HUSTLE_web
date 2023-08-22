import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as C from './Styles';
import LogoImg from '../../../assets/images/competition_logoimg.png';
import { MainCompetitionProps } from '../../../constants/interfaces';
import { defaultMainCompetition } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';
import UploadImage from './UploadImage';

const PostCompetition = () => {
  const navigate = useNavigate();
  const { contentRequirements } = FormRequirements;
  const defaultMainValue = defaultMainCompetition;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MainCompetitionProps>({
    defaultValues: { ...defaultMainValue }
  });

  

  const onSubmitHandler: SubmitHandler<MainCompetitionProps> = async (
    data: MainCompetitionProps
  ) => {
    const requestData ={
      title: data.title,
          host: data.host,
          place: data.place,
          startDate: new Date(data.startDate).toISOString(),
          endDate: new Date(data.endDate).toISOString(),
          recruitmentStartDate: new Date(data.recruitmentStartDate).toISOString(),
          recruitmentEndDate: new Date(data.recruitmentEndDate).toISOString(),
          entryFee: parseInt(data.entryFee),
          maxEntryCount: parseInt(data.maxEntryCount),
          sponsor: data.sponsor,
          posterUrl: 'https://dummyimage.com/1240x1754/000000/ffffff.png&text=Temporary+Competition+Poster',
          preRoundGroupCount: parseInt(data.preRoundGroupCount),
          finalRoundTeamCount: parseInt(data.finalRoundTeamCount),
          contacts: [
            {
              name: data.contacts[0]?.name,
              phoneNumber: data.contacts[0]?.phoneNumber
            },
            {
              name: data.contacts[1]?.name,
              phoneNumber: data.contacts[1]?.phoneNumber
            }
          ],
          sportEventId: 1
        };
        console.log(requestData);

    try {
      const response = await axios.post('https://api.sport-hustle.com/api/competition?userId=7', requestData,
         {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
        }
      },  
      );

      if (response.status == 200){
        console.log(response.data);
         alert('대회 개설이 완료되었습니다.');
         navigate('/competitions');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('대회 개설에 실패하였습니다. 다시 진행해주세요');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <C.CompetitonContainer>
        <C.RowContainer>
          <img src={LogoImg} alt='로고' width='20%' />
          <C.TitleText>대회 개설</C.TitleText>
        </C.RowContainer>
        <C.SubtitleText>대회 이름</C.SubtitleText>
        <C.InputLarge
          placeholder='개설하고자 하는 대회 이름을 입력하세요'
          {...register('title', contentRequirements)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
        <C.SubtitleText>주최</C.SubtitleText>
        <C.InputLarge
          placeholder='동아리/단체명을 입력하세요'
          {...register('host', contentRequirements)}
        />
        {errors.host && <C.Error>{errors.host.message}</C.Error>}

        <C.SubtitleText>장소</C.SubtitleText>
        <C.InputLarge
          placeholder='장소를 입력하세요'
          {...register('place', contentRequirements)}
        />
        {errors.place && <C.Error>{errors.place.message}</C.Error>}

        <C.SubtitleText>대회 포스터</C.SubtitleText>
        <C.CenterWrapper>
          <UploadImage />
        </C.CenterWrapper>
        <C.RowContainer>
          <div>
            <C.SubtitleText>대회 시작일</C.SubtitleText>
            <C.InputSmall
              type='date'
              {...register('startDate', contentRequirements)}
            />
            {errors.startDate && <C.Error>{errors.startDate.message}</C.Error>}

            <C.SubtitleText>모집 시작일</C.SubtitleText>
            <C.InputSmall
              type='date'
              {...register('recruitmentStartDate', contentRequirements)}
            />
            {errors.recruitmentStartDate && (
              <C.Error>{errors.recruitmentStartDate.message}</C.Error>
            )}

            <C.SubtitleText>참가비</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall {...register('entryFee', contentRequirements)} />
              <C.CurrencyText>원</C.CurrencyText>
              {errors.entryFee && <C.Error>{errors.entryFee.message}</C.Error>}
            </C.InputContainer>

            <C.SubtitleText>예선 조</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall
                {...register('preRoundGroupCount', contentRequirements)}
              />
              <C.CurrencyText>조</C.CurrencyText>
              {errors.preRoundGroupCount && (
                <C.Error>{errors.preRoundGroupCount.message}</C.Error>
              )}
            </C.InputContainer>

            <C.TitleText>대표자 연락처</C.TitleText>
            <C.SubtitleText>회장</C.SubtitleText>
            <C.InputSmall
              placeholder='이름'
              {...register('contacts.0.name', contentRequirements)}
            />

            <C.SubtitleText>부회장</C.SubtitleText>
            <C.InputSmall
              placeholder='이름'
              {...register('contacts.1.name', contentRequirements)}
            />
          </div>

          <div>
            <C.SubtitleText>대회 종료일</C.SubtitleText>
            <C.InputSmall
              type='date'
              {...register('endDate', contentRequirements)}
            />
            {errors.endDate && <C.Error>{errors.endDate.message}</C.Error>}

            <C.SubtitleText>모집 마감일</C.SubtitleText>
            <C.InputSmall
              type='date'
              {...register('recruitmentEndDate', contentRequirements)}
            />
            {errors.recruitmentEndDate && (
              <C.Error>{errors.recruitmentEndDate.message}</C.Error>
            )}

            <C.SubtitleText>모집팀 수</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall
                {...register('maxEntryCount', contentRequirements)}
              />
              <C.CurrencyText>팀</C.CurrencyText>
              {errors.maxEntryCount && (
                <C.Error>{errors.maxEntryCount.message}</C.Error>
              )}
            </C.InputContainer>

            <C.SubtitleText>본선 진출</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall
                {...register('finalRoundTeamCount', contentRequirements)}
              />
              <C.CurrencyText>강</C.CurrencyText>
              {errors.finalRoundTeamCount && (
                <C.Error>{errors.finalRoundTeamCount.message}</C.Error>
              )}
            </C.InputContainer>

            <C.TitleText>
              <span>&nbsp;</span>
            </C.TitleText>
            <C.SubtitleText>
              <span>&nbsp;</span>
            </C.SubtitleText>
            <C.InputSmall
              placeholder='연락처'
              {...register('contacts.0.phoneNumber', contentRequirements)}
            />

            <C.SubtitleText>
              <span>&nbsp;</span>
            </C.SubtitleText>

            <C.InputSmall
              placeholder='연락처'
              {...register('contacts.1.phoneNumber', contentRequirements)}
            />
          </div>
        </C.RowContainer>
        <C.SubtitleText>후원</C.SubtitleText>
        <C.InputLarge
          placeholder='후원 단체명을 입력하세요'
          {...register('sponsor', contentRequirements)}
        />
        {errors.sponsor && <C.Error>{errors.sponsor.message}</C.Error>}

        <C.CenterWrapper>
          <C.SubmitButton type='submit'>대회 등록하기</C.SubmitButton>
        </C.CenterWrapper>
      </C.CompetitonContainer>
    </form>
  );
};

export default PostCompetition;
