import React from "react";
import { MarkProps } from "./MarkProps";
import { Character } from "../../stories/Icons/svg/index";
import * as S from "./Styles";

export const CompletionMark = ({ label }: MarkProps) => {
  const labels = label.split(" ");
  return (
    <S.MarkWrap>
      <Character />
      <S.LabelWrap>
        {labels.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </S.LabelWrap>
    </S.MarkWrap>
  );
};

export default CompletionMark;
