import React from 'react';
import { MarkProps } from './MarkProps';
import { Character } from '../../stories/Icons/svg';
import * as S from './Styles';

export const CompletionMark = ({ label }: MarkProps) => {
  const labels = label.split(' ');
  return (
    <S.MarkContainer>
      <Character />
      <S.LabelContainer>
        {labels.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </S.LabelContainer>
    </S.MarkContainer>
  );
};

export default CompletionMark;
