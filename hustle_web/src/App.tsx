import React from 'react';
import Router from './Router';

// const loadingPage = <div>화면 로딩중...</div>;
// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
// const Home = React.lazy(() => import("./pages/Home"));
// const Login = React.lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
