import Input from "@/components/Input";
import SideSheetDrawer from "@/components/SideSheetDrawer";
import { Formik, Form } from "formik";
import React, { useRef } from "react";
import styles from "./users.module.scss";
import Button from "@/components/Button";
import { ProfileSchema } from "@/utils/validation";
import { useAddMember } from "@/admin/hooks/mutations/useAddMember";

const AddMember = ({ isShown, onCloseComplete }: any) => {
  const formRef = useRef<any>();
  const { mutate: addMember, isPending } = useAddMember();
  const handleAddMember = (values: any) => {
    console.log(values, "oooooo");
    const formData = new FormData();
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("email", values.email);
    formData.append(
      "phone_number",
      `+234${String(parseInt(values.phone_number))}`
    );

    formData.append("profile_image", values.profile_image);
    addMember(formData);
  };

  const changeFile = (e: any, formik: any) => {
    console.log(e);
    formik.setFieldValue("profile_image", e);
  };

  return (
    <div>
      <SideSheetDrawer
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        headingTitle="Add member"
        width="452px"
      >
        <div>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              phone_number: "",
              profile_image: "",
            }}
            validationSchema={ProfileSchema}
            onSubmit={handleAddMember}
            innerRef={formRef}
          >
            {(formik) => (
              <Form className={styles.formInput}>
                <div className={styles.formInput__input}>
                  <Input
                    title="Firstname"
                    placeholder="Enter first name"
                    name="first_name"
                    type="text"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.errors.first_name}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Last name"
                    placeholder="Enter last name"
                    name="last_name"
                    type="text"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.errors.last_name}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Email address"
                    placeholder="abrahamdelacy@email.com"
                    name="email"
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Phone number"
                    placeholder="08124576169"
                    name="phone_number"
                    type="text"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    error={formik.errors.phone_number}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Profile image"
                    name="profile_image"
                    type="file"
                    id="profile_image"
                    value={formik.values.profile_image}
                    onChange={(e) => changeFile(e, formik)}
                  />
                </div>
                <div className={styles.formInput__csv}>
                  <p className={styles.formInput__csv__p}>Or</p>
                  <p>
                    Import csv file containing member details to bulk upload
                    members
                  </p>{" "}
                  <Button size={"md"} theme={"primary"} type="button">
                    Import csv file
                  </Button>
                </div>

                <div className={styles.btnWrapper}>
                  <Button
                    size={"sm"}
                    theme={"primary"}
                    type="submit"
                    loading={isPending}
                  >
                    Save
                  </Button>
                  <Button
                    size={"md"}
                    theme={"secondary"}
                    onClick={() => onCloseComplete()}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </SideSheetDrawer>
    </div>
  );
};

export default AddMember;
