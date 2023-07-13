import React from "react";
import * as L from "./styles";
import FriendlyMatch from "./FriendlyMatch";
import Test from "../../assets/svg/Test.svg";

interface FriendlyMatchListProps {
    matches: FriendlyMatch[];
}

const FriendlyMatchList: React.FC<FriendlyMatchListProps> = ({ matches }) => {
    return (
        <L.Wrapper>
            {matches.map((match, index) => (
                <div key={index}>
                    <L.TitleWrap>
                        <L.ImgWrap>
                            <img src={Test} alt='' />
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
    );
};

export default FriendlyMatchList;
