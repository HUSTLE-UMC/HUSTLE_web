import React from "react";
import * as P from "../friendlyMatch/styles";
import MainMatch from "../../components/FriendlyMatchPage/MainMatch/MainMatch";

const FriendlyMatch = () => {
  return (
    <>
      <P.PageLayout>
        <MainMatch />
      </P.PageLayout>
    </>
  );
};

export default FriendlyMatch;
