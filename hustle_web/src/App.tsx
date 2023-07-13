import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List1 from "./components/Competition/list1";
import List2 from "./components/FriendlyMatch/list2";

const loadingPage = <div>화면 로딩중...</div>;

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));


const App = () => {
      return (
        <BrowserRouter>
            <Suspense fallback={loadingPage}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/competitions" element={<List1 />} />
                    <Route path="/friendly" element={<List2 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
