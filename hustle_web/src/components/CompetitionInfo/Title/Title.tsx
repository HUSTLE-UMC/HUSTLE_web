import React from 'react';
import * as T from './Styles';
import { TitleProps } from './TitleProps';
import { SubLabel } from './Styles';

const Title: React.FC<TitleProps> = ({ title, period, location }) => {
  return (
    <T.TitleContainer>
      <T.TitleWrap>
        <T.MainBox>{title}</T.MainBox>
        <T.SubBox>
          <T.SubLabel>{period}</T.SubLabel>
          <T.SubLabel>{location}</T.SubLabel>
        </T.SubBox>
      </T.TitleWrap>
    </T.TitleContainer>
  );
};

export default Title;
