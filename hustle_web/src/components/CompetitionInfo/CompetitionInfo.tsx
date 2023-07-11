import React, { useState } from "react";
import { Layout, InfoText, TitleLayout, IconLayout } from "./styles";
import { ReactComponent as ArrowIcon } from "./arrow.svg";

interface ListProps {
  title: string;
  sports: string;
  place: string;
  date: string;
  due: string;
}

const Index = ({ title, sports, place, date, due }: ListProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };
  return (
    <Layout>
      <TitleLayout>
        {title}
        <IconLayout onClick={() => handleClick()}>
          {isClicked ? <ArrowIcon transform="rotate(180)" /> : <ArrowIcon />}
        </IconLayout>
      </TitleLayout>
      {isClicked && (
        <>
          <InfoText>종목 : {sports}</InfoText>
          <InfoText>장소 : {place}</InfoText>
          <InfoText>일시 : {date}</InfoText>
          <InfoText>신청기간 : {due}</InfoText>
        </>
      )}
    </Layout>
  );
};

export default Index;
