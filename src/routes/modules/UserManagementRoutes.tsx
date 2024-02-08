import DashboardLayout from "@/components/Layouts/DashboardLayout";
import UserManagementPage from "@/admin/pages/UserManagement";
import React from "react";
import { Route, Routes } from "react-router-dom";

const UserManagementRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <UserManagementPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default UserManagementRoutes;
