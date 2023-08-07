import React, { forwardRef } from 'react';
import * as T from './Styles';

interface Props {
  size: string;
  holder: string;
  type?: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ size, holder, type }, ref) => {
    switch (size) {
      case 's':
        return (
          <>{<T.InputSmall placeholder={holder} type={type} ref={ref} />}</>
        );
      case 'l':
        return (
          <>{<T.InputLarge placeholder={holder} type={type} ref={ref} />}</>
        );
      default:
        return <>{}</>;
    }
    TextInput.displayName = 'TextInput';
  }
);

export default TextInput;
