import React from "react";
import CompetitionList from "./CompetitionList";

const List1 = () => {
    const competitions = [
        {
            nickname: "최유빈",
            name: "가톨릭대학교 총장배 대회",
            sport: "농구",
            location: "가톨릭대학교체육관",
            date: "2023-07-20",
            period: "2023-06-30 - 2023-07-10",
        },
        // 추가적인 대회 정보를 넣어주세요.
    ];

    return <CompetitionList competitions={competitions} />;
};

export default List1;
