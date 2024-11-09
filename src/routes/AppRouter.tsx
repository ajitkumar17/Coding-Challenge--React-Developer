
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileFormPage from "../pages/ProfileFormPage";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/profile-form" element={<ProfileFormPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
