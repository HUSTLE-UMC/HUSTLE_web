import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as C from './Styles';
import NoticeCheck from './NoticeCheck';
import PrivacyCheck from './PrivacyCheck';
import {
  CompetitionApplyProps,
  ApplyCompetitionProps
} from '../../../constants/interfaces';
import { defaultCompetitionApplyFormValue } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';
import { dummyCompetition } from './DummyCompetition';

const ApplyForm = () => {
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
  const [competitionData, setCompetitionData] =
    useState<ApplyCompetitionProps | null>(null);

  useEffect(() => {
    setCompetitionData(dummyCompetition[0]); // 연동할 때 주석처리하기
    async function fetchCompetitionData() {
      try {
        const response = await axios.get('URL_TO_GET_COMPETITION_DATA');
        setCompetitionData(response.data);
      } catch (error) {
        console.error('Error fetching competition data:', error);
      }
    }

    fetchCompetitionData();
  }, []);

  const onSubmitHandler: SubmitHandler<CompetitionApplyProps> = async (
    data: CompetitionApplyProps
  ) => {
    try {
      const response = await axios.post('', {});
    } catch (e) {
      alert('대회 신청에 실패하였습니다. 다시 진행해주세요.');
    }
    if (!isNoticeChecked) {
      alert('주의사항에 동의해주세요.');
      return;
    }
    if (!isPrivacyChecked) {
      alert('개인정보 수집에 동의해주세요.');
      return;
    }
    console.log(data);
    alert('대회 신청이 완료되었습니다.');
  };

  return (
    <C.ApplyContainer>
      <form>
        <C.TitleText>대회 신청</C.TitleText>
        <C.ApplySubtitleText>
          {competitionData ? competitionData.title : '대회 정보 없음'}
        </C.ApplySubtitleText>

        <C.ApplyRowContainer>
          <C.SubtitleLightText>
            {competitionData ? competitionData.host : '대회 정보 없음'}
          </C.SubtitleLightText>
          <C.SubtitleLightText>
            {competitionData ? competitionData.startDate : '대회 정보 없음'} ~{' '}
            {competitionData ? competitionData.dueDate : '대회 정보 없음'}
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

export default ApplyForm;
