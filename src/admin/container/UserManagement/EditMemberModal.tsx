import Input from "@/components/Input";
import SideSheetDrawer from "@/components/SideSheetDrawer";
import { Formik, Form } from "formik";
import React, { useEffect, useRef, useState } from "react";
import styles from "./users.module.scss";
import Button from "@/components/Button";
import { EditMemberSchema } from "@/utils/validation";
import { useEditMemberDetails } from "@/admin/hooks/mutations/useEditMemberDetails";
import { useFetchMembers } from "@/admin/hooks/queries/useFetchMembers";

const EditMember = ({
  isShown,
  setIsShown,
  onCloseComplete,
  singleMemberId,
  position,
  refetch,
}: any) => {
  const formRef = useRef<any>();
  const { data, isSuccess} = useFetchMembers({ query: {} });
  const [name, setName] = useState<any>({});
  useEffect(() => {
    if (isSuccess && data.members && data.members.length > 0) {
      const member = data.members.find((member: any) => member.id === singleMemberId);
      if (member) {
        setName({
          first_name: member.first_name,
          last_name: member.last_name,
          email: member.email,
          phone_number: member.phone_number,
        });
      }
    }
  }, [isSuccess, singleMemberId, data.members]);

  const { mutate: editMember, isPending } = useEditMemberDetails({
    id: singleMemberId,
    setIsShown,
    refetch,
  });

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
            validationSchema={EditMemberSchema}
            initialValues={{
              first_name: name?.first_name || '',
              last_name: name?.last_name || "",
              phone_number: name?.phone_number?.replace("+234", "0") || "",
              email: name?.email || "",
            }}
            enableReinitialize
            onSubmit={(values: {
              first_name: any;
              last_name: any;
              phone_number: any;
              email: any;
            }) => {
              const payload = {
                first_name: values.first_name,
                last_name: values.last_name,
                phone_number: `+234${String(parseInt(values.phone_number))}`,
              };

              editMember(payload);
            }}
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
                    value={formik?.values?.first_name}
                    error={formik.errors.first_name}
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Last name"
                    placeholder="Enter last name"
                    name="last_name"
                    type="text"
                    value={formik?.values?.last_name}
                    error={formik.errors.last_name}
                  />
                </div>

                <div className={styles.formInput__input}>
                  <Input
                    title="Email address"
                    placeholder="Enter email"
                    name="email"
                    type="text"
                    value={formik?.values?.email}
                    disabled
                  />
                </div>
                <div className={styles.formInput__input}>
                  <Input
                    title="Phone number"
                    placeholder="08124576169"
                    name="phone_number"
                    type="text"
                    value={formik?.values?.phone_number}
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
