import Input from "@/components/Input";
import SideSheetDrawer from "@/components/SideSheetDrawer";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import styles from "./users.module.scss";
import Button from "@/components/Button";
import { ProfileSchema } from "@/utils/validation";

const AddMember = ({ isShown, onCloseComplete, onFilter }: any) => {
  const [filters, setFilters] = useState();
  const handleFilter = () => {
    onFilter(filters);
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
              firstname: "",
              lastname: "",
              email: "",
              phone_number: "",
              image: "",
            }}
            validationSchema={ProfileSchema}
            onSubmit={()=>{}}
          >
            {(formik) => (
              <Form className={styles.formInput}>
                <div className={styles.formInput__input}>
                  <Input
                    title="Firstname"
                    placeholder="Enter first name"
                    name="firstname"
                    type="text"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.errors.firstname}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Last name"
                    placeholder="Enter last name"
                    name="lastname"
                    type="text"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
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
                    type="number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    error={formik.errors.phone_number}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Profile image"
                    name="image"
                    type="file"
                    id="profile-image"
                    value={formik.values.image}
                    onChange={(file) => {
                      console.log(file);
                      
                      // formik.setFieldValue('image', )
                    }}
                    error={formik.errors.image}
                  />
                </div>
                <div className={styles.formInput__csv}>
                  <p className={styles.formInput__csv__p}>Or</p>
                  <p>
                    Import csv file containing member details to bulk upload
                    members
                  </p>{" "}
                  <Button size={"md"} theme={"primary"}>
                    Import csv file
                  </Button>
                </div>

                <div className={styles.btnWrapper}>
                  <Button
                    size={"sm"}
                    theme={"primary"}
                    onClick={() => handleFilter()}
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
