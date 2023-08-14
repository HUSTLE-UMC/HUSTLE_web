import React from 'react';
import * as C from './Styles';
import { ContentProps } from './ContentProps';

const Content: React.FC<ContentProps> = ({
  recruitmentPeriod,
  location,
  preliminariesFinals,
  entryFee,
  organizer,
  sponsor,
  contact
}) => {
  return (
    <C.ContentContainer>
      <C.ContentItem>
        <C.LabelWrap>모집 기간</C.LabelWrap>
        <C.ContentWrap>{recruitmentPeriod}</C.ContentWrap>
      </C.ContentItem>
      <C.ContentItem>
        <C.LabelWrap>장소</C.LabelWrap>
        <C.ContentWrap>{location}</C.ContentWrap>
      </C.ContentItem>
      <C.ContentItem>
        <C.LabelWrap>예선/본선</C.LabelWrap>
        <C.ContentWrap>{preliminariesFinals}</C.ContentWrap>
      </C.ContentItem>
      <C.ContentItem>
        <C.LabelWrap>참가비</C.LabelWrap>
        <C.ContentWrap>{entryFee}</C.ContentWrap>
      </C.ContentItem>
      <C.ContentItem>
        <C.LabelWrap>주관</C.LabelWrap>
        <C.ContentWrap>{organizer}</C.ContentWrap>
      </C.ContentItem>
      <C.ContentItem>
        <C.LabelWrap>후원</C.LabelWrap>
        <C.ContentWrap>{sponsor}</C.ContentWrap>
      </C.ContentItem>
      <C.ContentItem>
        <C.LabelWrap>문의</C.LabelWrap>
        <C.ContentWrap>{contact}</C.ContentWrap>
      </C.ContentItem>
    </C.ContentContainer>
  );
};

export default Content;
