import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Competition from './pages/Competition/Competition';
import Club from './pages/Community/Club/Club';
import Question from './pages/Community/Question/QuestionPage';
import FriendlyMatch from './pages/FriendlyMatch/FriendlyMatch';
import Join from './pages/Join/Join';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import MyPageMain from './pages/MyPage/MyPageMain';
import Community from './pages/Community/CommunityPage';
import QuestionForm from './components/Community/Question/QuestionForm';
import PostMatch from './components/FriendlyMatchPage/PostMatch/PostMatch';
import ApplyMatch from './components/FriendlyMatchPage/ApplyMatch/ApplyMatch';
import ForgotPage from './pages/Forgot/Forgotpage';
import ResetPage from './pages/Forgot/Reset/Resetpage';
import ApplyForm from './components/FriendlyMatchPage/ApplyMatch/ApplyForm';
import FriendlyLists from './components/FriendlyMatchPage/MainMatch/FriendlyLists/FriendlyLists';
import MainCompetition from './pages/MainCompetition/MainCompetition';
import ApplyCompetition from './pages/MainCompetition/ApplyCompetition';
import RankingPage from './pages/Ranking/RankingPage';
import CompetitionApply from './pages/Competition/CompetitionApply/CompetitionApply';
import CompetitionResultPage from './pages/Competition/CompetitionResult/CompetitionResultPage';
import CompetitionDetailResult from './pages/Competition/CompetitionDetailResult/CompetitionDetailResult';
import CompetitionInput from './pages/Competition/CompetitionInputPage/CompetitionInputPage';
import CommunityList from './components/Community/Main/Lists';
import PostCompetition from './components/MainCompetition/PostCompetition/PostCompetition';
import CompetitionApplyForm from './components/MainCompetition/ApplyForm/CompetitionApplyForm';


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
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/competitions' element={<Competition />} />
            <Route
              path='/competitions/apply/:competitionId'
              element={<CompetitionApply />}
            />

            <Route
              path='/competitions/result'
              element={<CompetitionResultPage />}
            />
            <Route
              path='/competitions/detail'
              element={<CompetitionDetailResult />}
            />
            <Route path='/competitions/input' element={<CompetitionInput />} />
            <Route path='/competitions/post' element={<PostCompetition />} />
            <Route
              path='/competitions/applyform'
              element={<CompetitionApplyForm />}
            />
            <Route path='/mypage' element={<MyPageMain />} />
            <Route path='/community' element={<Community />} />
            <Route path='/community/club' element={<CommunityList />} />
            <Route path='/join' element={<Join />} />
            <Route path='/community/question' element={<CommunityList />} />
            <Route path='/community' element={<Community/>}/>
            <Route
              path='/community/question/write'
              element={<QuestionForm />}
            />
            <Route path='/friendly' element={<FriendlyMatch />} />
            <Route path='/friendly/invite' element={<FriendlyLists />} />
            <Route path='/friendly/match' element={<FriendlyLists />} />
            <Route path='/friendly/post' element={<PostMatch />} />
            <Route path='/friendly/apply' element={<ApplyMatch />} />
            <Route
              path='/friendly/apply/form'
              element={<CompetitionApplyForm />}
            />
            <Route path='/forgot' element={<ForgotPage />} />
            <Route path='/reset' element={<ResetPage />} />
            <Route path='/maincompetition' element={<MainCompetition />} />
            <Route path='/ranking' element={<RankingPage />} />
            <Route
              path='/maincompetition/apply'
              element={<ApplyCompetition />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Router;
