import Input from "@/components/Input";
import SideSheetDrawer from "@/components/SideSheetDrawer";
import { Formik, Form } from "formik";
import React, { useRef } from "react";
import styles from "./users.module.scss";
import Button from "@/components/Button";
import { EditMemberSchema } from "@/utils/validation";
import { useEditMemberDetails } from "@/admin/hooks/mutations/useEditMemberDetails";

const EditMember = ({ isShown, setIsShown, onCloseComplete, singleMemberId,position, refetch }: any) => {
  const formRef = useRef<any>();
  const { mutate: editMember, isPending } = useEditMemberDetails({
    id: singleMemberId,
    setIsShown,
    refetch
  });

  const handleEdit =(values: any)=>{
          editMember({
            first_name: values.first_name,
            last_name:  values.last_name,
            phone_number: `+234${String(parseInt(values.phone_number))}`,
          })
  }
  return (
    <div>
      <SideSheetDrawer
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        headingTitle="Edit member details"
        width="452px"
        position={position}
      >
        <div>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              phone_number: "",
            }}
            validationSchema={EditMemberSchema}
            onSubmit={handleEdit}
            innerRef={formRef}
          >
            {(formik) => (
              <Form className={styles.formInput}>
                <div className={styles.formInput__input}>
                  <Input
                    title="First name"
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
                    title="Phone number"
                    placeholder="08124576169"
                    name="phone_number"
                    type="number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    error={formik.errors.phone_number}
                  />
                </div>

                <div className={styles.editBtnWrapper}>
                  <Button
                    size={"sm"}
                    theme={"primary"}
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty}
                    loading={isPending}
                  >
                    Save
                  </Button>
                  <Button
                    size={"md"}
                    theme={"second"}
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

export default EditMember;
