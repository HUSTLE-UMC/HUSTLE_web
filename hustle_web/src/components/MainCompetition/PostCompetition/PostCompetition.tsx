import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as C from '../Styles';
import * as M from '../../FriendlyMatchPage/PostMatch/Styles';
import LogoImg from '../../../assets/images/competition_logoimg.png';
import { MainCompetitionProps } from '../../../constants/interfaces';
import { defaultMainCompetition } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';
import UploadImage from './UploadImage';
import DropDown from '../../DropDown/DropDown';

const PostCompetition = () => {
  const { contentRequirements } = FormRequirements;
  const defaultMainValue = defaultMainCompetition;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MainCompetitionProps>({
    defaultValues: { ...defaultMainValue }
  });

  const onSubmitHandler: SubmitHandler<MainCompetitionProps> = (data) => {
    console.log(data);
    alert('대회 등록이 완료되었습니다.');
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
          {...register('competitionname', contentRequirements)}
        />
        {errors.competitionname && (
          <C.Error>{errors.competitionname.message}</C.Error>
        )}
        <C.SubtitleText>주최</C.SubtitleText>
        <C.InputLarge
          placeholder='동아리/단체명을 입력하세요'
          {...register('teamname', contentRequirements)}
        />
        {errors.teamname && <C.Error>{errors.teamname.message}</C.Error>}

        <C.SubtitleText>대회 포스터</C.SubtitleText>
        <C.CenterWrapper>
          <UploadImage />
        </C.CenterWrapper>
        <C.RowContainer>
          <div>
            <C.SubtitleText>대회 시작일</C.SubtitleText>
            <M.InputSmall
              type='date'
              {...register('competitiondate', contentRequirements)}
            />
            {errors.competitiondate && (
              <C.Error>{errors.competitiondate.message}</C.Error>
            )}

            <C.SubtitleText>모집 시작일</C.SubtitleText>
            <M.InputSmall
              type='date'
              {...register('recruitdate', contentRequirements)}
            />
            {errors.recruitdate && (
              <C.Error>{errors.recruitdate.message}</C.Error>
            )}

            <C.SubtitleText>참가비</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall {...register('fee', contentRequirements)} />
              <C.CurrencyText>원</C.CurrencyText>
              {errors.fee && <C.Error>{errors.fee.message}</C.Error>}
            </C.InputContainer>

            <C.SubtitleText>예선 조</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall {...register('team', contentRequirements)} />
              <C.CurrencyText>조</C.CurrencyText>
              {errors.team && <C.Error>{errors.team.message}</C.Error>}
            </C.InputContainer>

            <C.TitleText>대표자 연락처</C.TitleText>
            <C.SubtitleText>회장</C.SubtitleText>
            <C.InputSmall
              placeholder='이름'
              {...register('presidentname', contentRequirements)}
            />
            {errors.presidentname && (
              <C.Error>{errors.presidentname.message}</C.Error>
            )}

            <C.SubtitleText>부회장</C.SubtitleText>
            <C.InputSmall
              placeholder='이름'
              {...register('president2name', contentRequirements)}
            />
            {errors.president2name && (
              <C.Error>{errors.president2name.message}</C.Error>
            )}
          </div>
          <div>
            <C.SubtitleText>대회 종료일</C.SubtitleText>
            <M.InputSmall
              type='date'
              {...register('competitiondue', contentRequirements)}
            />
            {errors.competitiondue && (
              <C.Error>{errors.competitiondue.message}</C.Error>
            )}

            <C.SubtitleText>모집 마감일</C.SubtitleText>
            <M.InputSmall
              type='date'
              {...register('recruitdue', contentRequirements)}
            />
            {errors.recruitdue && (
              <C.Error>{errors.recruitdue.message}</C.Error>
            )}

            <C.SubtitleText>모집팀 수</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall {...register('recruitteam', contentRequirements)} />
              <C.CurrencyText>팀</C.CurrencyText>
              {errors.recruitteam && (
                <C.Error>{errors.recruitteam.message}</C.Error>
              )}
            </C.InputContainer>

            <C.SubtitleText>본선 진출</C.SubtitleText>
            <C.InputContainer>
              <C.InputSmall {...register('finalteam', contentRequirements)} />
              <C.CurrencyText>강</C.CurrencyText>
              {errors.finalteam && (
                <C.Error>{errors.finalteam.message}</C.Error>
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
              {...register('presidentphone', contentRequirements)}
            />
            {errors.presidentphone && (
              <C.Error>{errors.presidentphone.message}</C.Error>
            )}

            <C.SubtitleText>
              <span>&nbsp;</span>
            </C.SubtitleText>

            <C.InputSmall
              placeholder='연락처'
              {...register('president2phone', contentRequirements)}
            />
            {errors.president2phone && (
              <C.Error>{errors.president2phone.message}</C.Error>
            )}
          </div>
        </C.RowContainer>
        <C.SubtitleText>후원</C.SubtitleText>
        <C.InputLarge
          placeholder='후원 단체명을 입력하세요'
          {...register('support', contentRequirements)}
        />
        {errors.support && <C.Error>{errors.support.message}</C.Error>}

        <C.CenterWrapper>
          <M.SubmitButton type='submit'>대회 등록하기</M.SubmitButton>
        </C.CenterWrapper>
      </C.CompetitonContainer>
    </form>
  );
};

export default PostCompetition;
