import Input from "@/components/Input";
import { PasswordSchema } from "@/utils/validation";
import { Form, Formik } from "formik";
import React, {useState} from "react";
import styles from "./index.module.scss";
import Button from "@/components/Button";

const ResetPasswordForm = () => {
    const [loading, setLoading] = useState(false);
  const handleResetPassword = () => {
    setLoading(true)
  };
  return (
    <div>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={PasswordSchema}
        onSubmit={handleResetPassword}
      >
        {(formik) => (
          <div className={styles.formInput}>
            <Form>
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
              <div className={styles.formInput__input}>
                <Input
                  title="Confirm password"
                  placeholder="********"
                  name="confirmPassword"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.errors.confirmPassword}
                />
              </div>
              <div className={styles.formInput__btn}>
                <Button
                  size="lg"
                  theme="primary"
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                  loading={loading}
                >
                 Reset password
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
