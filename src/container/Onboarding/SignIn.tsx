import Input from "@/components/Input";
import { SignInSchema } from "@/utils/validation";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import styles from "./index.module.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const login = () => {
    setLoading(true);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={login}
      >
        {(formik) => (
          <div className={styles.formInput}>
            <Form>
              <div className={styles.formInput__input}>
                <Input
                  title="Email address"
                  placeholder="temilolapeter@email.com"
                  name="email"
                  type="text"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                />
              </div>
              <div className={styles.formInput__input}>
                <Input
                  title="Password"
                  placeholder="********"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.errors.password}
                />
              </div>

              <div className={styles.formInput__forgotPassword}>
                <text>
                  Forgot password? <span onClick={()=>navigate('/auth/forgot')}>Reset it here</span>
                </text>
              </div>
              <div className={styles.formInput__btn}>
                <Button
                  size={"lg"}
                  theme={"primary"}
                  type="submit"
                  disabled={!formik.isValid}
                  loading={loading}
                >
                  Sign In
                </Button>
              </div>
              <div className={styles.formInput__forgotPassword}>
                <p>
                  Don’t have an account? <span>Sign up here</span>
                </p>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
