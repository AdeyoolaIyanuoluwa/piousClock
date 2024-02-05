import Avatar from "@/components/Avatar";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React, { ChangeEvent } from "react";
import styles from "./profilesetting.module.scss";
import { Formik, Form } from "formik";
import Input from "@/components/Input";
import { PasswordSchema, ProfileSchema } from "@/utils/validation";
import Button from "@/components/Button";

const ProfileSetting = () => {
  const handleFileChange = (e: ChangeEvent<FileList>) => {
    onChange?.(e.target?.files?.[0]);
  };
  return (
    <DashboardLayout>
      <div className={styles.profile}>
        <p className={styles.profile__heading}>Admin profile</p>
        <div className={styles.profile__avatar}>
          <Avatar name={"Temilola Peter"} profile size="lg" />
          <label htmlFor="profile-image">Edit profile image</label>
          <input
            hidden
            id="profile-image"
            type="file"
            onChange={(e) => handleFileChange(e)}
          />
        </div>

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

                  <div className={styles.profile__btn}>
                    <Button size={"md"} theme={"primary"}>
                      Save changes
                    </Button>
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
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={PasswordSchema}
              onSubmit={() => {}}
            >
              {(formik) => (
                <Form className={styles.profile__form}>
                  <div className={styles.profile__form__input}>
                    <Input
                      title="New password"
                      placeholder="Liquidfire77"
                      name="password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <Input
                      title="Confirm password"
                      placeholder="Liquidfire77"
                      name="password"
                      type="password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <Button size={"md"} theme={"primary"}>
                    Save changes
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileSetting;
