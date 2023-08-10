import React from 'react';
import * as C from './Styles';
import { Props } from './CompetitionScreenProps';

export const CompetitionScreen = ({
  id,
  img,
  sort,
  title,
  location,
  date
}: Props) => {
  return (
    <C.container key={id}>
      <C.ImgWrap>
        <C.Img src={img} alt={''} />
      </C.ImgWrap>
      <C.ContentWrap>
        <C.SortBox>{sort}</C.SortBox>
        <C.TitleBox>{title}</C.TitleBox>
        <C.DateBox>{date}</C.DateBox>
      </C.ContentWrap>
    </C.container>
  );
};

export default CompetitionScreen;
