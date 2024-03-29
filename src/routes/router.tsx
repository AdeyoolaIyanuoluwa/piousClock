import Login from "@/admin/pages/Auth/Login";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RecoverPassword from "@/admin/pages/Auth/RecoverPassword";
import OTP from "@/admin/pages/Auth/OTP";
import ResetPassword from "@/admin/pages/Auth/ResetPassword";
import UserManagementRoutes from "./modules/UserManagementRoutes";
import PrivateRoute from "./private";
import DashboardRoutes from "./modules/DashboardRoutes";
import ClockInHistoryRoutes from "./modules/ClockInHistoryRoutes";
import ProfileSettingRoutes from "./modules/ProfileSettingRoutes";
import Members from "@/members/container";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot" element={<RecoverPassword />} />
      <Route path="/auth/otp" element={<OTP />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />

      <Route
        path="/dashboard"
        element={<PrivateRoute component={DashboardRoutes} />}
      />
      <Route
        path="/user-management"
        element={<PrivateRoute component={UserManagementRoutes} />}
      />
      <Route
        path="/history"
        element={<PrivateRoute component={ClockInHistoryRoutes} />}
      />
      <Route
        path="/profile"
        element={<PrivateRoute component={ProfileSettingRoutes} />}
      />
      <Route path="/members" element={<Members />} />
    </Routes>
  );
};

export default AppRouter;
