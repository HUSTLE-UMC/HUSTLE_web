import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as C from './Styles';
import { defaultLeftCompetition } from '../../constants/defaultFormOption';
import TextInput from './TextInput copy';
import FormRequirements from '../../constants/FormRequirements';
import { LeftCompetitionProps } from '../../constants/interfaces';

const { contentRequirements } = FormRequirements;
const defaultLeftValue = defaultLeftCompetition;

const LeftCompetition = ({ onDataChange }: any) => {
  const [defaultValues, setDefaultValues] = useState(defaultLeftValue);
  const {
    register,
    formState: { errors }
  } = useForm<LeftCompetitionProps>({
    defaultValues: defaultLeftValue
  });

  useEffect(() => {
    onDataChange(defaultValues);
  }, [defaultValues, onDataChange]);

  return (
    <div>
      <C.SubtitleText>대회 시작일</C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='시작일 8자리'
          type='competitiondate'
          {...register('competitiondate', contentRequirements)}
        />
        {errors.competitiondate && (
          <C.Error>{errors.competitiondate.message}</C.Error>
        )}
      </div>
      <C.SubtitleText>모집 시작일</C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='시작일 8자리'
          type='recruitdate'
          {...register('recruitdate', contentRequirements)}
        />
        {errors.recruitdate && <C.Error>{errors.recruitdate.message}</C.Error>}
      </div>
      <C.SubtitleText>참가비</C.SubtitleText>
      <div>
        <TextInput
          size='small-right'
          holder='원'
          type='fee'
          {...register('fee', contentRequirements)}
        />
        {errors.fee && <C.Error>{errors.fee.message}</C.Error>}
      </div>
      <C.SubtitleText>예선 조</C.SubtitleText>
      <div>
        <TextInput
          size='small-right'
          holder='개'
          type='team'
          {...register('team', contentRequirements)}
        />
        {errors.team && <C.Error>{errors.team.message}</C.Error>}
      </div>
      <C.TitleText>대표자 연락처</C.TitleText>
      <C.SubtitleText>회장</C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='이름'
          type='presidentname'
          {...register('presidentname', contentRequirements)}
        />
        {errors.presidentname && (
          <C.Error>{errors.presidentname.message}</C.Error>
        )}
      </div>
      <C.SubtitleText>부회장</C.SubtitleText>
      <div>
        <TextInput
          size='small'
          holder='이름'
          type='president2phone'
          {...register('president2name', contentRequirements)}
        />
        {errors.president2name && (
          <C.Error>{errors.president2name.message}</C.Error>
        )}
      </div>
    </div>
  );
};

export default LeftCompetition;
