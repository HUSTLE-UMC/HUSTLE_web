import React from "react";
import Router from "./Router";

const loadingPage = <div>화면 로딩중...</div>;

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));


const App = () => {
      return (
        <>
            <Router/>
        </>
    );
};

export default App;
