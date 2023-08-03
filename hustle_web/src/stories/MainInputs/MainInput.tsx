import React, { InputHTMLAttributes } from 'react';
import './MainInput.css'; // 스타일 파일

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // 추가적인 프롭스 정의
}

const MainInput: React.FC<InputProps> = ({ ...rest }) => {
  return <input className='input' {...rest} />;
};

export default MainInput;
