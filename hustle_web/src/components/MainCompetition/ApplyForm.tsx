import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as C from '../../pages/MainCompetition/Styles';
import * as A from './Styles';
import NoticeCheck from './NoticeCheck';
import PrivacyCheck from './PrivacyCheck';
import * as M from '../../components/FriendlyMatchPage/PostMatch/Styles';
import { CompetitionApplyProps } from '../../constants/interfaces';
import { defaultCompetitionApplyFormValue } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';

const ApplyForm = () => {
  const { contentRequirements } = FormRequirements;
  const defaultMainValue = defaultCompetitionApplyFormValue;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CompetitionApplyProps>({
    defaultValues: { ...defaultMainValue }
  });

  const [isNoticeChecked, setIsNoticeChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const onSubmitHandler: SubmitHandler<CompetitionApplyProps> = (data) => {
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
    <A.ApplyContainer>
      <form>
        <C.TitleText>대회 신청</C.TitleText>
        <A.SubtitleText>가톨릭대학교 총장배 대회</A.SubtitleText>

        <A.RowContainer>
          <A.SubtitleLightText>가톨릭대학교 바스타즈</A.SubtitleLightText>
          <A.SubtitleLightText>2023-07-07</A.SubtitleLightText>
        </A.RowContainer>

        <A.LeftWrapper>
          <A.SubtitleText>동아리명</A.SubtitleText>
        </A.LeftWrapper>
        <C.InputLarge
          placeholder='참여를 희망하는 동아리 명을 입력하세요'
          {...register('teamname', contentRequirements)}
        />
        <A.LeftWrapper>
          {errors.teamname && <C.Error>{errors.teamname.message}</C.Error>}
        </A.LeftWrapper>

        <A.LeftWrapper>
          <A.SubtitleText>대표자 연락처</A.SubtitleText>
        </A.LeftWrapper>
        <A.RowContainer>
          <C.InputSmall
            placeholder='이름'
            {...register('name', contentRequirements)}
          />
          <C.InputSmall
            placeholder='연락처'
            {...register('phone', contentRequirements)}
          />
        </A.RowContainer>

        <A.LeftWrapper>
          {errors.name && errors.phone && (
            <C.Error>{errors.name.message}</C.Error>
          )}
          {errors.name && !errors.phone && (
            <C.Error>{errors.name.message}</C.Error>
          )}
          {!errors.name && errors.phone && (
            <C.Error>{errors.phone.message}</C.Error>
          )}
        </A.LeftWrapper>

        <NoticeCheck onCheck={(isChecked) => setIsNoticeChecked(isChecked)} />
        <PrivacyCheck onCheck={(isChecked) => setIsPrivacyChecked(isChecked)} />

        <M.SubmitButton type='submit' onClick={handleSubmit(onSubmitHandler)}>
          대회 신청하기
        </M.SubmitButton>
      </form>
    </A.ApplyContainer>
  );
};

export default ApplyForm;
