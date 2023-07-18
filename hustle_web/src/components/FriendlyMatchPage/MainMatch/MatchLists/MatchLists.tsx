import React from "react";
import * as S from "../Styles";
import MatchTitle from "../MatchTitle/MatchTitle";
import List2 from "../../FriendlyMatchList/list2";

export const MatchLists = () => {
  return (
    <>
      <MatchTitle label="교류전 구해요!" match />
      <S.ListBox>
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
        <List2 id={0} />
      </S.ListBox>
    </>
  );
};

export default MatchLists;
