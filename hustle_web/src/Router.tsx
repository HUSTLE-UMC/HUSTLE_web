import React,{Suspense} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Competition from './pages/Competition/Competition';
import Club from './pages/Community/Club';
import Question from './pages/Community/QuestionPage';
import FriendlyMatch from './pages/FriendlyMatch/FriendlyMatch';
import Join from './pages/Join/Join';
import Login from './pages/login';
import MyPageMain from './pages/MyPage/MyPageMain';
import Community from './pages/Community/CommunityPage';
import QuestionForm from './components/Community/Question/QuestionForm';


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
              <Route path='/mypage' element={<MyPageMain/>} />
              <Route path='/question' element={<Question/>} />
              <Route path='/community' element={<Community/>} />
              <Route path='/club' element={<Club/>} />
              <Route path='/join' element={<Join/>} />
              <Route path='/question/questionForm' element={<QuestionForm/>}/>
              <Route path="/*" element={<DefaultLayout />} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
