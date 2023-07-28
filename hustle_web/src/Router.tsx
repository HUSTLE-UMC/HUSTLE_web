import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SiginInPage from "./pages/SignIn/SignInPage";



const loadingPage = <div>화면 로딩중...</div>;
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={loadingPage}>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signIn" element={<SiginInPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
export default Router;
