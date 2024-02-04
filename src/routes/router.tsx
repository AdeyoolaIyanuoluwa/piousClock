import Login from "@/pages/Auth/Login";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RecoverPassword from "@/pages/Auth/RecoverPassword";
import OTP from "@/pages/Auth/OTP";
import ResetPassword from "@/pages/Auth/ResetPassword";
import Dashboard from "@/container/Dashboard/Dashboard";
import ClockInHistory from "@/container/ClockInHistory/ClockInHistory";
import UserManagementRoutes from "./modules/UserManagementRoutes";
import ProfileSetting from "@/container/ProfileSetting/ProfileSetting";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/auth/login"/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/forgot" element={<RecoverPassword/>}/>
        <Route path="/auth/otp" element={<OTP/>}/>
        <Route path="/auth/reset-password" element={<ResetPassword/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/history" element={<ClockInHistory/>}/>
        <Route path="/user-management" element={<UserManagementRoutes/>}/>
        <Route path="/profile" element={<ProfileSetting/>}/>
    </Routes>
  );
};

export default AppRouter;
