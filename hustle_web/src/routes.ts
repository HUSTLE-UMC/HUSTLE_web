import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPageMain"));
const Question = React.lazy(() => import("./pages/Community/QuestionPage"));
const Community = React.lazy(() => import("./pages/Community/CommunityPage"));
const Club = React.lazy(() => import("./pages/Community/Club"));
const Join = React.lazy(() => import("./pages/Join/Join"));
const Match = React.lazy(() => import("./pages/FriendlyMatch/FriendlyMatch"));
const List1 = React.lazy(() => import("./components/Competition/list1"));
const PostMatch = React.lazy(() => import("./components/FriendlyMatchPage/PostMatch/PostMatch"));
const ApplyMatch = React.lazy(() => import("./components/FriendlyMatchPage/ApplyMatch/ApplyMatch"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/mypage", element: MyPage },
  { path: "/question", element: Question },
  { path: "/community", element: Community },
  { path: "/club", element: Club },
  { path: "/join", element: Join },
  { path: "/match", element: Match },
  { path: "/competitions", element: List1 },
  { path: "/post", element: PostMatch },
  { path: "/apply", element: ApplyMatch },
];

export default routes;
