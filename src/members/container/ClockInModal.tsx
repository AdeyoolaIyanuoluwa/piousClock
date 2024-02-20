import React, { useState } from "react";
import Modal from "../../components/Modal";
import { ClockInModalProps } from "@/types/index";
import styles from "./index.module.scss";
import Button from "@/components/Button";
import moment from "moment";
import {
  useClockInMembers,
  useClockOutMember,
} from "../hooks/mutations/useClockInOutMembers";
import Avatar from "@/components/Avatar";

const ClockInModal = ({
  isShown,
  onClose,
  member,
  disabled,
}: ClockInModalProps) => {
  const [clockInDisabled, setClockInDisabled] = useState(false);
  const { mutate: clockIn, isPending: isClockInPending } = useClockInMembers();

  const handleClockIn = () => {
    clockIn(member.id);
    member.clock_in === true
      ? setClockInDisabled(false)
      : setClockInDisabled(true);
  };
  console.log(member.clock_in, 'ooo');
  
  const { mutate: clockOut, isPending: isClockOutPending } =
    useClockOutMember();

  const handleClockOut = () => {
    clockOut(member.id);
    setClockInDisabled(false);
  };

  return (
    <div>
      <Modal isShown={isShown} onClose={onClose} width="497px">
        <div className={styles.wrapper}>
          <div className={styles.headerWrapper}>
            <div>
              <Avatar
                name={member.first_name}
                url={member.profile_image}
                size="lg"
              />
            </div>

            <p className={styles.headerWrapper__headerTitle}>
              {member?.first_name} {member?.last_name}
            </p>
            <p>{member.email}</p>
            <p>{member.phone_number}</p>
          </div>

          <div className={styles.actionWrapper}>
            <Button
              loading={isClockInPending}
              size={"md"}
              theme="primary"
              type="button"
              onClick={() => handleClockIn()}
              disabled={clockInDisabled || disabled}
            >
              Clock-In
            </Button>
            <Button
              loading={isClockOutPending}
              size={"md"}
              theme="primary"
              type="submit"
              disabled={!clockInDisabled || disabled}
              onClick={handleClockOut}
            >
              Clock-out
            </Button>
          </div>

          <div className={styles.formatDateTime}>
            <p>{moment().format("LT")}</p>
            <div>{moment().format("dddd, MMMM DD, YYYY")}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ClockInModal;
