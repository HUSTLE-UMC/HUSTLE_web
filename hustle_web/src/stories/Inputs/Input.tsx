import React from 'react';
import './input.css';
import { Icon } from '../Icons/Icon';

interface InputProps {
  size?: 'medium'|'small';
  type?: 'text'|'number'|'default';
  value?: string;
  onChange?: (value: string) => void;
  onEnter?: () => void;
  placeholder?: string;
}

export const Input = ({
  size = 'medium',
  type = 'text',
  value = '',
  onChange ,
  onEnter,
  placeholder = '',
  }:InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (onChange) {
        onChange(newValue);
      }
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter(); // 엔터키 이벤트 발생 시 onEnter 함수 호출
      }
    };

  return(
    <div className='container'>
        <div className='search-bar'>
            <div className='icon-div'>
            <Icon icon='glasses' className='customIcon'  />
            </div>
            <input
          type={type}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={['inputBox', `input--${size}`].join(' ')}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
