import AuthLayout from "@/components/Layouts/AuthLayout";
import ForgotPassword from "@/container/Onboarding/ForgotPassword";
import React from "react";

const RecoverPassword = () => {
  return (
    <AuthLayout
      title="Forgot password"
      subtitle="Enter your registered email address and an OTP "
      email="code will be sent to reset your password"
    >
      <ForgotPassword />
    </AuthLayout>
  );
};

export default RecoverPassword;
