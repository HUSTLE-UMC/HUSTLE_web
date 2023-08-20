import React from 'react';
import * as S from './Styles';
import { GroupSelectorProps } from './GroupSelectorProps';

const GroupSelector = ({
  type,
  label,
  selected,
  onClick
}: GroupSelectorProps) => {
  const ButtonComponent = type === 'Preliminary' ? S.ButtonPre : S.ButtonFinal;

  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};

export default GroupSelector;
