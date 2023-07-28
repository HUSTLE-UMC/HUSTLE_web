import React from "react";
import FriendlyMatchList from "./FriendlyMatchList";

const List2 = () => {
    const matches = [
        {
            name: "최유빈",
            title: "대회 연습 상대 구해요!",
            location: "가톨릭대학교 체육관",
            date: "2023. 07. 07",
        },
        // 추가적인 대회 정보를 넣어주세요.
    ];

    return <FriendlyMatchList matches={matches} />;
};

export default List2;
