import React from 'react';
import * as S from './Styles';
import { Writing } from '../../../../stories/Icons/svg';
import { useNavigate } from 'react-router-dom';

interface MatchTitleProps {
  label: string;
}

export const MatchTitle = ({ label }: MatchTitleProps) => {
  const navigate = useNavigate();
  return (
    <S.TitleContainer>
      <S.TextBox>{label}</S.TextBox>
      <S.IconBox onClick={() => navigate('/friendly/post')}>
        <Writing />
      </S.IconBox>
    </S.TitleContainer>
  );
};

export default MatchTitle;
