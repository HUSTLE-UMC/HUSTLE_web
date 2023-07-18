import React from "react";
import * as L from "./styles";
import MatchListProps from "./MatchListProps";
import Test from "../../../assets/svg/Test.svg";
import { Link } from "react-router-dom";

interface FriendlyMatchListProps {
  matches: MatchListProps[];
  index: number;
}

export const FriendlyMatchList = ({
  matches,
  index,
}: FriendlyMatchListProps) => {
  return (
    <Link
      to="/apply"
      style={{ textDecoration: "none" }}
      state={{ index: { index } }}
    >
      <L.Wrapper>
        {matches.map((match, index) => (
          <div key={index}>
            <L.TitleWrap>
              <L.ImgWrap>
                <img src={Test} alt="" />
              </L.ImgWrap>
              <L.Title>{match.name}</L.Title>
            </L.TitleWrap>
            <L.ContentWrap>
              <L.Content>{match.title}</L.Content>
              <L.Content>{match.location}</L.Content>
              <L.Content>{match.date}</L.Content>
            </L.ContentWrap>
          </div>
        ))}
      </L.Wrapper>
    </Link>
  );
};

export default FriendlyMatchList;
