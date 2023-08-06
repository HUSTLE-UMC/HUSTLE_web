import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as C from './Styles';
import TextInput from './TextInput copy';
import { defaultRightCompetition } from '../../constants/defaultFormOption';
import FormRequirements from '../../constants/FormRequirements';
import { RightCompetitionProps } from '../../constants/interfaces';

const { contentRequirements } = FormRequirements;
const defaultRightValue = defaultRightCompetition;

const RightCompetition = ({ onDataChange }: any) => {
  const [defaultValues, setDefaultValues] = useState(defaultRightValue);
  const {
    register,
    formState: { errors }
  } = useForm<RightCompetitionProps>({
    defaultValues: defaultRightValue
  });

  useEffect(() => {
    onDataChange(defaultValues);
  }, [defaultValues, onDataChange]);

  return (
    <div>
      <C.SubtitleText>대회 종료일</C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='종료일 8자리'
          type='competitiondue'
          {...register('competitiondue', contentRequirements)}
        />
        {errors.competitiondue && (
          <C.Error>{errors.competitiondue.message}</C.Error>
        )}
      </div>
      <C.SubtitleText>모집 마감일</C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='마감일 8자리'
          type='recruitdue'
          {...register('recruitdue', contentRequirements)}
        />
        {errors.recruitdue && <C.Error>{errors.recruitdue.message}</C.Error>}
      </div>
      <C.SubtitleText>모집팀 수</C.SubtitleText>
      <div>
        <TextInput
          size='small-right'
          holder='팀'
          type='recruitteam'
          {...register('recruitteam', contentRequirements)}
        />
        {errors.recruitteam && <C.Error>{errors.recruitteam.message}</C.Error>}
      </div>
      <C.SubtitleText>본선 진출</C.SubtitleText>
      <div>
        <TextInput
          size='small-right'
          holder='강'
          type='finalteam'
          {...register('finalteam', contentRequirements)}
        />
        {errors.finalteam && <C.Error>{errors.finalteam.message}</C.Error>}
      </div>
      <C.TitleText>
        <span>&nbsp;</span>
      </C.TitleText>
      <C.SubtitleText>
        <span>&nbsp;</span>
      </C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='연락처'
          type='presidentphone'
          {...register('presidentphone', contentRequirements)}
        />
        {errors.presidentphone && (
          <C.Error>{errors.presidentphone.message}</C.Error>
        )}
      </div>
      <C.SubtitleText>
        <span>&nbsp;</span>
      </C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='연락처'
          type='president2phone'
          {...register('president2phone', contentRequirements)}
        />
        {errors.president2phone && (
          <C.Error>{errors.president2phone.message}</C.Error>
        )}
      </div>
    </div>
  );
};

export default RightCompetition;
