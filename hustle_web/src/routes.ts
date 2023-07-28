import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const SignInPage = React.lazy(() => import("./pages/SignIn/SignInPage"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/signIn", element: SignInPage },


];

export default routes;
