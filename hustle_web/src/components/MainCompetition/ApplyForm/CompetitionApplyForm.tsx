import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as C from './Styles';
import NoticeCheck from './NoticeCheck';
import PrivacyCheck from './PrivacyCheck';
import {
  CompetitionApplyProps,
} from '../../../constants/interfaces';
import { defaultCompetitionApplyFormValue } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';
import { dummyCompetition } from './DummyCompetition';
import { MatchState } from '../../../recoil/MatchList';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

const CompetitionApplyForm = () => {

  const navigate = useNavigate();
  const { competitionId } = useParams();
  const matchList = useRecoilValue(MatchState);
  const competitionInfo = matchList.find(
    (contest) => contest.id === Number(competitionId)
  );

  const { contentRequirements } = FormRequirements;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CompetitionApplyProps>({
    defaultValues: { ...defaultCompetitionApplyFormValue }
  });

  const [isNoticeChecked, setIsNoticeChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  // const [competitionInfo, setCompetitionInfo] =
  //   useState<ApplyCompetitionProps | null>(null);

  // useEffect(() => {
  //   setCompetitionData(dummyCompetition[0]); // 연동할 때 주석처리하기
  //   async function fetchCompetitionData() {
  //     try {
  //       const response = await axios.get('URL_TO_GET_COMPETITION_DATA');
  //       setCompetitionData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching competition data:', error);
  //     }
  //   }

  //   fetchCompetitionData();
  // }, []);

  useEffect(() => {
    console.log('competitionId:', competitionId);
    console.log('competitionInfo:', competitionInfo);
  }, [competitionId, competitionInfo]);

  const onSubmitHandler: SubmitHandler<CompetitionApplyProps> = async (
    data: CompetitionApplyProps
  ) => {
    const requestBody = {
      name: data.name,
      phoneNumber: data.phone,
      clubId: 1
    };
    console.log(requestBody);

    try {
      const response = await axios.post(`https://api.sport-hustle.com/api/competition/${competitionId}/entry_team?userId=7`, requestBody,
         {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
        }
      },  
      );
    
      if (response.status == 200){
        console.log(response.data);
         alert('대회 신청이 완료되었습니다.');
         navigate(`/competitions/apply/${competitionId}`);
      }

    } catch (e) {
      console.log(e)
      alert('신청이 완료되지 않았습니다')
    }
    // if (!isNoticeChecked) {
    //   alert('주의사항에 동의해주세요.');
    //   return;
    // }
    // if (!isPrivacyChecked) {
    //   alert('개인정보 수집에 동의해주세요.');
    //   return;
    // }
  };

  return (
    <C.ApplyContainer>
      <form>
        <C.TitleText>대회 신청</C.TitleText>
        <C.ApplySubtitleText>
          {competitionInfo ? competitionInfo.title : '대회 정보 없음'}
        </C.ApplySubtitleText>

        <C.ApplyRowContainer>
          <C.SubtitleLightText>
            {competitionInfo ? competitionInfo.host : '대회 정보 없음'}
          </C.SubtitleLightText>
          <C.SubtitleLightText>
            {competitionInfo ? competitionInfo.startDate.substring(0, 10) : '대회 정보 없음'} ~{' '}
            {competitionInfo ? competitionInfo.endDate.substring(0, 10) : '대회 정보 없음'}
          </C.SubtitleLightText>
        </C.ApplyRowContainer>

        <C.LeftWrapper>
          <C.ApplySubtitleText>동아리명</C.ApplySubtitleText>
        </C.LeftWrapper>
        <C.InputLarge
          placeholder='참여를 희망하는 동아리 명을 입력하세요'
          {...register('teamname', contentRequirements)}
        />
        <C.LeftWrapper>
          {errors.teamname && <C.Error>{errors.teamname.message}</C.Error>}
        </C.LeftWrapper>

        <C.LeftWrapper>
          <C.ApplySubtitleText>대표자 연락처</C.ApplySubtitleText>
        </C.LeftWrapper>
        <C.LeftWrapper>
          <C.ApplyRowContainer>
            <C.InputSmall
              placeholder='이름'
              {...register('name', contentRequirements)}
            />
            <C.InputSmall
              placeholder='연락처'
              {...register('phone', contentRequirements)}
            />
          </C.ApplyRowContainer>
        </C.LeftWrapper>

        <C.LeftWrapper>
          {errors.name && errors.phone && (
            <C.Error>{errors.name.message}</C.Error>
          )}
          {errors.name && !errors.phone && (
            <C.Error>{errors.name.message}</C.Error>
          )}
          {!errors.name && errors.phone && (
            <C.Error>{errors.phone.message}</C.Error>
          )}
        </C.LeftWrapper>

        <NoticeCheck onCheck={(isChecked) => setIsNoticeChecked(isChecked)} />
        <PrivacyCheck onCheck={(isChecked) => setIsPrivacyChecked(isChecked)} />

        <C.SubmitButton type='submit' onClick={handleSubmit(onSubmitHandler)}>
          대회 신청하기
        </C.SubmitButton>
      </form>
    </C.ApplyContainer>
  );
};

export default CompetitionApplyForm;
