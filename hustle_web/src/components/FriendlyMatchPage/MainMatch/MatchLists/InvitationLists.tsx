import React from "react";
import * as S from "../Styles";
import MatchTitle from "../MatchTitle/MatchTitle";
import List2 from "../../FriendlyMatchList/list2";

export const InvitationLists = () => {
  return (
    <>
      <MatchTitle label="초청해주세요!" />
      <S.ListBox>
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
        <List2 id={1} />
      </S.ListBox>
    </>
  );
};

export default InvitationLists;
