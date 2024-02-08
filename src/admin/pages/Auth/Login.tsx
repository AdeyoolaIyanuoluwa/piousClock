import AuthLayout from "@/components/Layouts/AuthLayout";
import SignIn from "@/admin/container/Onboarding/SignIn";
import React from "react";

const Login = () => {
  return (
    <div>
      <AuthLayout
        title={"Welcome to PiousClock"}
        subtitle={"Sign in to your account"}
        forgotPassword
      >
        <SignIn />
      </AuthLayout>
    </div>
  );
};

export default Login;
