import React, { useEffect, useState } from "react";
import * as S from "./Styles";
import MatchLists from "./MatchLists/MatchLists";
import InvitationLists from "./MatchLists/InvitationLists";
import SubmitButton from "../SubmitButton/SubmitButton";
import { Link } from "react-router-dom";
import SportsMenu from "../../SportsMenu/SportsMenu";

export const MainMatch = () => {
  const [isMatch, setIsMatch] = useState(false);
  const [isInvitation, setIsInvitation] = useState(false);
  useEffect(() => {
    setIsInvitation(false);
    setIsMatch(false);
  }, []);
  if (isMatch)
    return (
      <>
        <SportsMenu />
        <MatchLists />
      </>
    );
  if (isInvitation)
    return (
      <>
        <SportsMenu />
        <InvitationLists />
      </>
    );
  else
    return (
      <>
        <SportsMenu />
        <S.Layout>
          <S.Container>
            <MatchLists />
          </S.Container>
          <S.ButtonBox>
            <SubmitButton
              label="더 보기"
              small
              onClick={() => {
                setIsMatch(true);
              }}
            />
          </S.ButtonBox>
          <S.Container>
            <InvitationLists />
          </S.Container>
          <S.ButtonBox>
            <SubmitButton
              label="더 보기"
              small
              onClick={() => {
                setIsInvitation(true);
              }}
            />
          </S.ButtonBox>
        </S.Layout>
      </>
    );
};

export default MainMatch;
