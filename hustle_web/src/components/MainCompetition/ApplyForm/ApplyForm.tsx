import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as C from './Styles';
import NoticeCheck from './NoticeCheck';
import PrivacyCheck from './PrivacyCheck';
import { CompetitionApplyProps } from '../../../constants/interfaces';
import { defaultCompetitionApplyFormValue } from '../../../constants/defaultFormOption';
import FormRequirements from '../../../constants/FormRequirements';

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
    <C.ApplyContainer>
      <form>
        <C.TitleText>대회 신청</C.TitleText>
        <C.ApplySubtitleText>가톨릭대학교 총장배 대회</C.ApplySubtitleText>

        <C.ApplyRowContainer>
          <C.SubtitleLightText>가톨릭대학교 바스타즈</C.SubtitleLightText>
          <C.SubtitleLightText>2023-07-07</C.SubtitleLightText>
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
