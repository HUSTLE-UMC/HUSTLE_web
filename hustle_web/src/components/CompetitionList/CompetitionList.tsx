import React, { useState } from "react";
import * as S from "./styles";
import { Arrow } from "../../stories/Icons/svg/index";
import { ListProps } from "./ListProps";

const CompetitionList = ({ title, sports, place, date, due }: ListProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };
  return (
    <S.Layout>
      <S.TitleLayout>
        {title}
        <S.IconLayout onClick={() => handleClick()}>
          {isClicked ? <Arrow transform="rotate(180)" /> : <Arrow />}
        </S.IconLayout>
      </S.TitleLayout>
      {isClicked && (
        <>
          <S.InfoText>종목 : {sports}</S.InfoText>
          <S.InfoText>장소 : {place}</S.InfoText>
          <S.InfoText>일시 : {date}</S.InfoText>
          <S.InfoText>신청기간 : {due}</S.InfoText>
        </>
      )}
    </S.Layout>
  );
};

export default CompetitionList;
