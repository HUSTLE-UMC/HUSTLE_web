import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const MyPage = React.lazy(() => import("./pages/myPage/MyPage"));
const Question = React.lazy(() => import("./pages/community/Question"));
const Community = React.lazy(() => import("./pages/community/Community"));
const Club = React.lazy(() => import("./pages/community/Club"));
const Join = React.lazy(() => import("./pages/join/Join"));
const Match = React.lazy(() => import("./pages/friendlyMatch/FriendlyMatch"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/mypage", element: MyPage },
  { path: "/question", element: Question },
  { path: "/community", element: Community },
  { path: "/club", element: Club },
  { path: "/join", element: Join },
  { path: "/match", element: Match },
];

export default routes;
