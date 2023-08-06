import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Competition from './pages/Competition/Competition';
import Club from './pages/Community/Club/Club';
import Question from './pages/Community/Question/QuestionPage';
import FriendlyMatch from './pages/FriendlyMatch/FriendlyMatch';
import Join from './pages/Join/Join';
import Login from './pages/Login';
import MyPageMain from './pages/MyPage/MyPageMain';
import Community from './pages/Community/CommunityPage';
import QuestionForm from './components/Community/Question/QuestionForm';
import List1 from './components/Competition/list1';
import PostMatch from './components/FriendlyMatchPage/PostMatch/PostMatch';
import ApplyMatch from './components/FriendlyMatchPage/ApplyMatch/ApplyMatch';
import ForgotPage from './pages/Forgot/Forgotpage';
import ResetPage from './pages/Forgot/Reset/Resetpage';
import ApplyForm from './components/FriendlyMatchPage/ApplyMatch/ApplyForm';
import FriendlyLists from './components/FriendlyMatchPage/MainMatch/FriendlyLists/FriendlyLists';

const loadingPage = <div>화면 로딩중...</div>;
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loadingPage}>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/competitions' element={<List1 />} />
            <Route path='/mypage' element={<MyPageMain />} />
            <Route path='/community' element={<Community />} />
            <Route path='/community/club' element={<Club />} />
            <Route path='/join' element={<Join />} />
            <Route path='/community/question' element={<Question />} />
            <Route
              path='/community/question/write'
              element={<QuestionForm />}
            />
            <Route path='/friendly' element={<FriendlyMatch />} />
            <Route path='/friendly/invite' element={<FriendlyLists />} />
            <Route path='/friendly/match' element={<FriendlyLists />} />
            <Route path='/friendly/post' element={<PostMatch />} />
            <Route path='/friendly/apply' element={<ApplyMatch />} />
            <Route path='/friendly/apply/form' element={<ApplyForm />} />
            <Route path='/forgot' element={<ForgotPage />} />
            <Route path='/reset' element={<ResetPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Router;
