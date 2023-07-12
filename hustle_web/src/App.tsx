import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FriendlyMatch from "./components/FriendlyMatch/FriendlyMatch";


const loadingPage = <div>화면 로딩중...</div>;

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const CompetitionList = React.lazy(() => import("./components/Competition/CompetitionList"));
const FMatch = React.lazy(() => import("./components/FriendlyMatch/FriendlyMatchList"));

const App = () => {
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
    const matches = [
        {
            name: "최유빈",
            title: "대회 연습 상대 구해요!",
            location: "가톨릭대학교 체육관",
            date: "2023. 07. 07",
        },
        // 추가적인 대회 정보를 넣어주세요.
    ];


    return (
        <BrowserRouter>
            <Suspense fallback={loadingPage}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/competitions" element={<CompetitionList competitions={competitions} />} />
                    <Route path="/friendly" element={<FMatch matches={matches} />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
