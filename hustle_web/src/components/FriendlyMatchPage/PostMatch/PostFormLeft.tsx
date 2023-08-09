import React from 'react';
import * as L from './Styles';
import TextInput from '../../TextInput/TextInput';
import MyClubList from '../MyClubList/MyClubList';

export const PostFormLeft = () => {
  return (
    <L.LeftLayout>
      <L.TitleContainer>동아리 명</L.TitleContainer>
      <MyClubList clubs={['가톨릭대학교 바스타즈', '가톨릭대학교 바스타즈2']} />
      <L.TitleContainer>대표자 연락처</L.TitleContainer>
      <L.InputContainer>
        <TextInput size='small' holder='이름' />
        <TextInput size='medium' holder='010-XXXX-XXXX' />
      </L.InputContainer>
      <L.TitleContainer>글 제목</L.TitleContainer>
      <TextInput size='large' holder='교류전 제목을 작성하세요' />
      <L.TitleContainer>일시</L.TitleContainer>
      <L.InputContainer>
        <TextInput size='small' holder='연도' />
        <TextInput size='small' holder='월' />
        <TextInput size='small' holder='일' />
      </L.InputContainer>
    </L.LeftLayout>
  );
};

export default PostFormLeft;
