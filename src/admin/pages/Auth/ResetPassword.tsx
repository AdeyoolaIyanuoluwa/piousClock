import AuthLayout from "@/components/Layouts/AuthLayout";
import ResetPasswordForm from "@/admin/container/Onboarding/ResetPasswordForm";
import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <AuthLayout
        title="Reset password"
        subtitle="Enter your new password and sign in"
      >
        <ResetPasswordForm />
      </AuthLayout>
    </div>
  );
};

export default ResetPassword;
