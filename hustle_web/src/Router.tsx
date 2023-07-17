import React,{Suspense} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Competition from './pages/competition/Competition';
import Club from './pages/community/Club';
import Question from './pages/community/Question';
import FriendlyMatch from './pages/friendlyMatch/FriendlyMatch';
import Join from './pages/join/Join';
import Login from './pages/login';
import MyPage from './pages/myPage/MyPage';
import Community from './pages/community/Community';
import List1 from "./components/Competition/list1";
import List2 from "./components/FriendlyMatch/list2";

const loadingPage = <div>화면 로딩중...</div>;
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));


const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loadingPage}>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/competitions" element={<List1 />} />
              <Route path="/friendly" element={<List2 />} />
              <Route path='/mypage' element={<MyPage/>} />
              <Route path='/question' element={<Question/>} />
              <Route path='/community' element={<Community/>} />
              <Route path='/club' element={<Club/>} />
              <Route path='/join' element={<Join/>} />
              <Route path="/*" element={<DefaultLayout />} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
