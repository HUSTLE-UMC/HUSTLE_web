import React from 'react';
import './input.css';
import { Icon } from '../Icons/Icon';

interface InputProps {
  size?: 'medium'|'small';
  type?: 'text'|'number'|'default';
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = ({ 
  size = 'medium', 
  type = 'text', 
  value = '', 
  onChange ,
  }:InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (onChange) {
        onChange(newValue);
      }
    };

  return(
    <div className='container'>
        <div className="search-bar">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className={['inputBox', `input--${size}`].join(' ')}
        />
        <div className='icon-div'>
          <Icon icon="glasses" className="customIcon" size="0.7rem" />
          </div>
      </div>
    </div>
  )
}