import DashboardLayout from "@/components/Layouts/DashboardLayout";
import DashboardPage from "@/admin/pages/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
