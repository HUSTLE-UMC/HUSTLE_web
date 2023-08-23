import React from 'react';
import * as S from './Styles';
import { PostMatchButtonProps } from './PostMatchButtonProps';

const MatchButton: React.FC<PostMatchButtonProps> = ({
  type = 'big',
  label,
  onClick
}) => {
  const ButtonComponent = type === 'small' ? S.ButtonSmall : S.ButtonBig;

  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};

export default MatchButton;
