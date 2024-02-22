import Input from "@/components/Input";
import { PasswordSchema } from "@/utils/validation";
import { Form, Formik } from "formik";
import React, { useRef } from "react";
import styles from "./index.module.scss";
import Button from "@/components/Button";
import { useResetPassword } from "@/admin/hooks/mutations/useForgotPassword";
import { useSearchParams } from 'react-router-dom';

const ResetPasswordForm = () => {
  const formRef = useRef<any>();
  const [params]: any = useSearchParams();
  const token = params.get('passwordToken');
  const { mutate: resetPassword, isPending } = useResetPassword();

  const handleResetPassword = (values: { password: string}) => {
    resetPassword({ password: values.password, token });
  };
  return (
    <div>
      <Formik
        initialValues={{ password: "", confirmPassword: "",}}
        validationSchema={PasswordSchema}
        onSubmit={handleResetPassword}
        innerRef={formRef}
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
                  loading={isPending}
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
