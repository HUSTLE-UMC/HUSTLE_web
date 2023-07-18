import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Competition from "./pages/Competition/Competition";
import Club from "./pages/Community/Club";
import Question from "./pages/Community/Question";
import FriendlyMatch from "./pages/FriendlyMatch/FriendlyMatch";
import Join from "./pages/Join/Join";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage/MyPage";
import Community from "./pages/Community/Community";
import List1 from "./components/Competition/list1";
import PostMatch from "./components/FriendlyMatchPage/PostMatch/PostMatch";
import ApplyMatch from "./components/FriendlyMatchPage/ApplyMatch/ApplyMatch";

const loadingPage = <div>화면 로딩중...</div>;
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loadingPage}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/competitions" element={<List1 />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/question" element={<Question />} />
          <Route path="/community" element={<Community />} />
          <Route path="/club" element={<Club />} />
          <Route path="/join" element={<Join />} />
          <Route path="/*" element={<DefaultLayout />} />
          <Route path="/match" element={<FriendlyMatch />} />
          <Route path="/post" element={<PostMatch />} />
          <Route path="/apply" element={<ApplyMatch />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Router;
