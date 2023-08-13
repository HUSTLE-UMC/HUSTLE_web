import React from 'react';
import * as S from './Styles';
import { MatchStatusProps } from './MatchStatusProps';

const MatchStatus: React.FC<MatchStatusProps> = ({ status, label }) => {
  return <S.StatusContainer status={status}>{label}</S.StatusContainer>;
};

export default MatchStatus;
