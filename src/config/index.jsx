import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";

function MyRoutes() {
  const HomePage = lazy(() => import("../pages/HomePage"));
  const AboutPage = lazy(() => import("../pages/AboutPage"));
  const ContactPage = lazy(() => import("../pages/ContactPage"));
  const SinglePage = lazy(()=>import("../pages/SinglePage"))
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/:id" element={<SinglePage/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default MyRoutes;
