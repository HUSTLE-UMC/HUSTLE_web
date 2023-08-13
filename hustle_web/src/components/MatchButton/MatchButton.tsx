import React from 'react';
import * as S from './Styles';
import { MatchButtonProps } from './MatchButtonProps';

const MatchButton: React.FC<MatchButtonProps> = ({
  type = 'big',
  label,
  onClick
}) => {
  const ButtonComponent = type === 'small' ? S.ButtonSmall : S.ButtonBig;

  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};

export default MatchButton;
