import AuthLayout from '@/components/Layouts/AuthLayout'
import OTPForm from '@/container/Onboarding/OTPForm'
import React from 'react'

const OTP = () => {
  const email = localStorage.getItem('email');
  return (
   <AuthLayout title='OTP Verification' subtitle='Enter the six digit OTP code sent to '  email={email}>
    <OTPForm/>
   </AuthLayout>
  )
}

export default OTP