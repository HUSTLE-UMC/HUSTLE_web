import React from 'react';
import * as T from './Styles copy';

interface Props {
  size: string;
  holder: string;
  type: string;
}

export const TextInput = ({ size, holder, type }: Props) => {
  switch (size) {
    case 'small':
      return <>{<T.InputSmall placeholder={holder} type={type} />}</>;
    case 'medium':
      return <>{<T.InputMedium placeholder={holder} type={type} />}</>;
    case 'large':
      return <>{<T.InputLarge placeholder={holder} type={type} />}</>;
    case 'small-right':
      return <>{<T.InputSmallRight placeholder={holder} type={type} />}</>;
    default:
      return <>{}</>;
  }
};

export default TextInput;
