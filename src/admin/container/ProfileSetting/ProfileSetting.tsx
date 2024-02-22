import React, { useRef } from "react";
import styles from "./profilesetting.module.scss";
import { Formik, Form } from "formik";
import Input from "@/components/Input";
import { ChangePasswordSchema, ProfileSchema } from "@/utils/validation";
import Button from "@/components/Button";
import { useChangePassword } from "@/admin/hooks/mutations/useChangePassword";

const ProfileSetting = () => {
  const formRef = useRef<any>();
  const { mutate: changePassword, isPending } = useChangePassword();
  const handleChangePassword = (values: any) => {
    changePassword({
      old_password: values.old_password,
      new_password: values.new_password,
      confirm_password: values.confirm_password,
    });
  };
  return (
    <div>
      <div className={styles.profile}>
        <p className={styles.profile__heading}>Admin profile</p>

        <div className={styles.profile__edit}>
          <p>Edit profile details</p>

          <div>
            <Formik
              initialValues={{ firstname: "", email: "" }}
              validationSchema={ProfileSchema}
              onSubmit={() => {}}
            >
              {(formik) => (
                <Form className={styles.profile__form}>
                  <div className={styles.profile__form__input}>
                    <div className={styles.profile__form__input}>
                      <Input
                        title="Full name"
                        placeholder="Temilola Peter"
                        name="firstname"
                        type="text"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        disabled
                      />
                    </div>
                    <div className={styles.profile__form__input}>
                      <Input
                        title="Email address"
                        placeholder="temilolapeter@email.com"
                        name="email"
                        type="text"
                        value={formik.values.email}
                        disabled
                      />
                    </div>
                  </div>

                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className={styles.profile__edit}>
          <p>Change password</p>

          <div>
            <Formik
              initialValues={{
                old_password: "",
                new_password: "",
                confirm_password: "",
              }}
              validationSchema={ChangePasswordSchema}
              onSubmit={handleChangePassword}
              innerRef={formRef}
            >
              {(formik) => (
                <Form className={styles.profile__form}>
                  <div className={styles.profile__form__old}>
                    <Input
                      title="Old password"
                      placeholder="Liquidfire77"
                      name="old_password"
                      type="password"
                      value={formik.values.old_password}
                      onChange={formik.handleChange}
                      error={formik.errors.old_password}
                    />
                  </div>
                  <div className={styles.profile__form__input}>
                    <Input
                      title="New password"
                      placeholder="Liquidfire77"
                      name="new_password"
                      type="password"
                      value={formik.values.new_password}
                      onChange={formik.handleChange}
                      error={formik.errors.new_password}
                    />
                    <Input
                      title="Confirm password"
                      placeholder="Liquidfire77"
                      name="confirm_password"
                      type="password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      error={formik.errors.confirm_password}
                    />
                  </div>
                  <Button
                    size={"md"}
                    theme={"primary"}
                    disabled={!formik.isValid || !formik.dirty}
                    type="submit"
                    loading={isPending}
                  >
                    Save changes
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
