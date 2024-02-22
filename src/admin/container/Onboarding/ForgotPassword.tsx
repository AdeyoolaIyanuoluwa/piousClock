import Input from "@/components/Input";
import { Formik, Form } from "formik";
import React, { useRef } from "react";
import { EmailSchema } from "@/utils/validation";
import Button from "@/components/Button";
import styles from "./index.module.scss";
import { useForgotPassword } from "@/admin/hooks/mutations/useForgotPassword";

const ForgotPassword = () => {
  const formRef = useRef<any>();
  const { mutate: forgotPassword, isPending } = useForgotPassword();

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={EmailSchema}
        onSubmit={forgotPassword}
        innerRef={formRef}
      >
        {(formik) => (
          <Form className={styles.formInput}>
            <Input
              title="Email address"
              placeholder="yourmail@email.com"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <div className={styles.formInput__btn}>
              <Button
                type="submit"
                theme="primary"
                size="lg"
                disabled={!formik.isValid || !formik.dirty}
                loading={isPending}
              >
                {" "}
                Get OTP
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
