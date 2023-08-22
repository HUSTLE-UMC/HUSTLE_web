import React from 'react';
import * as S from './Styles';
import { MatchStatusProps } from './MatchStatusProps';

const MatchStatus = ({ status }: MatchStatusProps) => {
  let label = '';

  if (status === 'BEFORE') {
    label = '모집예정';
  } else if (status === 'RECRUITING') {
    label = '모집중';
  } else if (status === 'ACTIVE') {
    label = '진행중';
  } else if (status === 'COMPLETE') {
    label = '종료';
  }
  return (
    <S.StatusContainer status={status}>
      <S.LabelContainer>{label}</S.LabelContainer>
    </S.StatusContainer>
  );
};
export default MatchStatus;
