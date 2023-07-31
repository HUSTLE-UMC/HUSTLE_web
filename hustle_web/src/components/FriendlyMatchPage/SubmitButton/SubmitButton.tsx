import React from 'react';
import * as S from './Styles';
import { ButtonProps } from './ButtonProps';
import { Submit } from '../../../stories/Icons/svg/index';

export const SubmitButton = ({ label, small, onClick }: ButtonProps) => {
  return (
    <>
      {small ? (
        <S.SmallButton onClick={onClick}>{label}</S.SmallButton>
      ) : (
        <S.MediumButton onClick={onClick}>
          <div>{label}</div>
        </S.MediumButton>
      )}
    </>
  );
};
export default SubmitButton;
