import * as React from "react";
import Modal from "../../../components/Modal";
import { DeleteMemberModalProps } from "@/types/index";
import styles from "./users.module.scss";
import Button from "@/components/Button";
import DeleteVector from "../../../assets/icons/deleteVector.svg";
import { useDeleteMember } from "@/admin/hooks/mutations/useDeleteMember";

const DeleteMemberModal = ({
  isShown,
  onClose,
  title,
  loading,
  setIsShown,
  singleMemberId,
  refetch
}: DeleteMemberModalProps) => {
  
  const { mutate: handleDelete, isPending } = useDeleteMember({
    id: singleMemberId,
    setIsShown,
    refetch
  });
  return (
    <div>
      {" "}
      <Modal isShown={isShown} onClose={onClose} width="381px">
        <div className={styles.headerWrapper}>
          <img src={DeleteVector} alt="" />

          <p className={styles.headerTitle}>{title} Delete member?</p>
          <p className={styles.headerCaption}>
            Are you sure you want to delete this member?
          </p>
        </div>
        <div className={styles.actionWrapper}>
          <Button size={"md"} theme="" type="button" onClick={handleDelete}
          loading={isPending}>
            Yes, proceed
          </Button>
          <Button
            loading={loading}
            size={"md"}
            theme="primary"
            type="submit"
            // disabled={""}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteMemberModal;
