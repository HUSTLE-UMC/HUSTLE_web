import React,{Suspense} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Competition from './pages/Competition/Competition';
import Club from './pages/Community/Club';
import Question from './pages/Community/Question';
import FriendlyMatch from './pages/FriendlyMatch/FriendlyMatch';
import Join from './pages/Join/Join';
import Login from './pages/login';
import MyPage from './pages/Mypage/Mypage';
import Community from './pages/Community/Community';


import List1 from "./components/Competition/list1";
import List2 from "./components/FriendlyMatch/list2";

const loadingPage = <div>화면 로딩중...</div>;

// const Home = React.lazy(() => import("./pages/home"));
// const Login = React.lazy(() => import("./pages/login"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loadingPage}>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/competitions" element={<List1 />} />
              <Route path="/friendly" element={<List2 />} />
              <Route path='/mypage' element={<MyPage/>} />
              <Route path='/question' element={<Question/>} />
              <Route path='/community' element={<Community/>} />
              <Route path='/club' element={<Club/>} />
              <Route path='/join' element={<Join/>} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
