import React from "react";
import * as R from "./Styles";
import { Attach } from "../../../stories/Icons/svg";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import TextInput from "../../TextInput/TextInput";
import { Link } from "react-router-dom";

interface Props {
  id: number;
}

export const PostFormRight = ({ id }: Props) => {
  switch (id) {
    case 1:
      return (
        <>
          {
            <R.RightLayout>
              <R.TitleContainer>주요 활동 지역</R.TitleContainer>
              <TextInput size="medium" holder="주요 활동 지역을 입력하세요" />
              <Link to="/match" style={{ textDecoration: "none" }}>
                <SubmitButton label="게시하기" Icon small />
              </Link>
            </R.RightLayout>
          }
        </>
      );
    default:
      return (
        <>
          {
            <R.RightLayout>
              <R.TitleContainer>교류전 위치</R.TitleContainer>
              <R.LocationContainer>
                <R.LocationBox>
                  <Attach />
                </R.LocationBox>
                가톨릭대학교 체육관
              </R.LocationContainer>
              <Link to="/match" style={{ textDecoration: "none" }}>
                <SubmitButton label="게시하기" Icon />
              </Link>
            </R.RightLayout>
          }
        </>
      );
  }
};

export default PostFormRight;
