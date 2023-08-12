import React from 'react';
import * as S from './Styles';
import { MainInputProps } from './MainInputProps';

export const MainInput = ({
  value = '',
  placeholder = '',
  onChange,
  onEnter,
  small
}: MainInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnter) {
      onEnter();
    }
  };
  return (
    <>
      {small ? (
        <S.ContainerSmall>
          <S.InputSmall
            type={type === 'default' ? 'text' : type}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        </S.ContainerSmall>
      ) : (
        <S.ContainerMedium>
          <S.InputMedium
            type={type === 'default' ? 'text' : type}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        </S.ContainerMedium>
      )}
    </>
  );
};

export default MainInput;
