import React from "react";
import * as L from "./Styles";
import Competition from "./Competition";
import Test from "../../assets/svg/Test.svg";

interface CompetitionListProps {
    competitions: Competition[];
}


const CompetitionList: React.FC<CompetitionListProps> = ({ competitions }) => {
    return (
        <L.Wrapper>
            {competitions.map((competition, index) => (
                <div key={index}>
                    <L.TitleWrap>
                        <L.ImgWrap>
                            <img src={Test} alt='' />
                        </L.ImgWrap>
                        <L.ContentWrap>
                            <L.Title>{competition.nickname}</L.Title>
                            <L.Title>{competition.name}</L.Title>
                        </L.ContentWrap>
                    </L.TitleWrap>
                    <L.ContentWrap>
                        <L.Sub>종목 : {competition.sport}</L.Sub>
                        <L.Sub>장소 : {competition.location}</L.Sub>
                        <L.Sub>일시 : {competition.date}</L.Sub>
                        <L.Sub>신청 기간 : {competition.period}</L.Sub>
                    </L.ContentWrap>
                </div>
            ))}
        </L.Wrapper>
    );
};

export default CompetitionList;
