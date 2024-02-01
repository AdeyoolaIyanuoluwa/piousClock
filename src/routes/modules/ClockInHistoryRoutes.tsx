import DashboardLayout from "@/components/Layouts/DashboardLayout";
import ClockInHistoryPage from "@/pages/ClockInHistory";
import React from "react";
import { Route, Routes } from "react-router-dom";

const ClockInHistoryRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <ClockInHistoryPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default ClockInHistoryRoutes;
