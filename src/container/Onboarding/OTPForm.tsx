import React, { useRef } from "react";
import OtpInput from "react-otp-input";
import styles from "./index.module.scss";
import Button from "@/components/Button";
import CountDown from "@/utils/countDown";
import { Formik, Form } from "formik";
import { useOtp } from "@/hooks/mutations/useForgotPassword";

const OTPForm = () => {
  const formRef = useRef<any>();
  const email: any = localStorage.getItem("email");
  const { mutate: validateOtp, isPending: isOtpPending } = useOtp();

  const handleValidateOtp = (values: any) => {
    validateOtp({ email, otp: values.otp });
  };
  
  return (
    <div>
      <Formik
        initialValues={{ email: email || "", otp: "" }}
        onSubmit={handleValidateOtp}
        innerRef={formRef}
      >
        {(formik) => (
          <Form>
            <OtpInput
              value={formik.values.otp}
              onChange={(otp) => formik.setFieldValue("otp", otp)}
              numInputs={6}
              renderSeparator={
                <span
                  style={{
                    marginLeft: "7px",
                    marginRight: "7px",
                  }}
                >
                  {""}
                </span>
              }
              renderInput={(props) => <input {...props} />}
              
              inputStyle={{
                width: "48px",
                height: "48px",
                marginBottom: "10px",
                backgroundColor: "#F3F4F6",
                outline: "none",
                fontSize: "16px",
                color: "#6B7280",
                border: "none",
                borderRadius: "8px",
              }}
            />

            <div className={styles.otp}>
              <span>Didn’t receive code?</span>
              <button>
                Resend <CountDown minutes="4" seconds="59" />
              </button>
            </div>

            <div className={styles.otp_button}>
              <Button
                theme="primary"
                size="lg"
                disabled={!formik.isValid || !formik.dirty}
                loading={isOtpPending}
              >
                Verify OTP
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OTPForm;
