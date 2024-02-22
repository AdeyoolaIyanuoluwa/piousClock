import DashboardLayout from "@/components/Layouts/DashboardLayout";
import ProfileSettingPage from "@/admin/pages/ProfileSetting";
import React from "react";
import { Route, Routes } from "react-router-dom";

const ProfileSettingRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout profile>
              <ProfileSettingPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default ProfileSettingRoutes;
