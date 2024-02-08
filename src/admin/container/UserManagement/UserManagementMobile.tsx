import React, { useState } from "react";
import styles from "./users.module.scss";
import { membersData } from "@/admin/mocks";
import Avatar from "@/components/Avatar";
import PlaceholderIcon from "../../../assets/placeholder.svg";
import Button from "@/components/Button";
import AddMember from "./AddMember";
import Pagination from "@/components/Pagination";

const UserManagementMobile = () => {
  const [addMember, setAddMember] = useState(false);
  return (
    <div className={styles.user}>
      {membersData.slice(0, 10).map((i) => (
        <div className={styles.user__members}>
          <div className={styles.user__members__avatar}>
            <div className={styles.user__members__avatar__name}>
              <Avatar name={i.last_name} size="md" />
              <div>
                <text>
                  {i.first_name} {i.last_name}
                </text>
                <p>{i.address}</p>
                <p>{i.phone_number}</p>
              </div>
            </div>
            <div>
              {" "}
              <p>{i.date}</p>
            </div>
          </div>
        </div>
      ))}
      {!membersData?.length && (
        <>
          <div className={styles.user__empty}>
            <div>
              {<img src={PlaceholderIcon} alt="PlaceholderIcon" />}{" "}
              <p>You have no members</p>
              <p>Start by adding new members</p>
              <div className={styles.user__empty__btn}>
                <Button
                  size="md"
                  theme="primary"
                  onClick={() => setAddMember(true)}
                >
                  Add manually
                </Button>
                <Button size="md" theme="secondary">
                  Import CSV file
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {addMember && (
        <AddMember
          isShown={addMember}
          onCloseComplete={() => setAddMember(false)}
        />
      )}
      <Pagination />
    </div>
  );
};

export default UserManagementMobile;
