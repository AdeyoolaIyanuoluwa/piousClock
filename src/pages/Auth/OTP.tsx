import AuthLayout from '@/components/Layouts/AuthLayout'
import OTPForm from '@/container/Onboarding/OTPForm'
import React from 'react'

const OTP = () => {
  return (
   <AuthLayout title='OTP Verification' subtitle='Enter the six digit OTP code sent to '  email='temilolapeter@email.com '>
    <OTPForm/>
   </AuthLayout>
  )
}

export default OTP