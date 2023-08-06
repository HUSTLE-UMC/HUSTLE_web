import React from 'react';
import * as T from './Styles';

interface Props {
  size: string;
  holder: string;
}

export const TextInput = ({ size, holder }: Props) => {
  switch (size) {
<<<<<<< Updated upstream:hustle_web/src/components/TextInput/TextInput.tsx
    case 'small':
      return <>{<T.InputSmall placeholder={holder} />}</>;
    case 'medium':
      return <>{<T.InputMedium placeholder={holder} />}</>;
    case 'large':
=======
    case 's':
      return <>{<T.InputSmall placeholder={holder} />}</>;
    case 'l':
>>>>>>> Stashed changes:hustle_web/src/components/FriendlyMatchPage/TextInput/TextInput.tsx
      return <>{<T.InputLarge placeholder={holder} />}</>;
    default:
      return <>{}</>;
  }
};

export default TextInput;
