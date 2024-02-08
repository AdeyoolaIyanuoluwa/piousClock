import Avatar from "@/components/Avatar";
import Table from "@/components/Table";
import { membersData, tableHeader } from "@/admin/mocks";
import React, { useState } from "react";
import styles from "./users.module.scss";
import Dropdown from "@/components/Dropdown";
import VerticalDotIcon from "../../../assets/DotsThreeVertical.svg";
import { Option } from "@/components/Dropdown/Option";
import EditIcon from "../../../assets/editIcon.svg";
import DeleteIcon from "../../../assets/deleteIcon.svg";
import EditMember from "./EditMember";
import DeleteMemberModal from "./DeleteMemberModal";

const UserManagementTable = () => {
  const [editMember, setEditMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  return (
    <div>
      <Table tableHeaders={tableHeader} tableData={membersData} paginate>
        {(row: any) => {
          return (
            <>
              <td>
                <div className={styles.avatar_name}>
                  <div>
                    <Avatar
                      name={`${row.first_name} ${row.last_name}`}
                      size="sm"
                    />
                  </div>
                  {row.first_name}
                </div>
              </td>
              <td>{row.last_name}</td>
              <td>{row.address}</td>
              <td>{row.phone_number}</td>
              <td>{row.date}</td>
              <td>
                <Dropdown
                  children={<img src={VerticalDotIcon} alt="vertical_dot" />}
                  content={
                    <>
                      <Option
                        image={EditIcon}
                        onClick={() => setEditMember(true)}
                      >
                        Edit
                      </Option>
                      <Option
                        image={DeleteIcon}
                        onClick={() => setDeleteMember(true)}
                      >
                        Delete
                      </Option>
                    </>
                  }
                />
              </td>
            </>
          );
        }}
      </Table>
      {editMember && (
        <EditMember
          isShown={editMember}
          onCloseComplete={() => setEditMember(false)}
        />
      )}
      {deleteMember && (
        <DeleteMemberModal
          isShown={deleteMember}
          onClose={() => setDeleteMember(false)}
        />
      )}
    </div>
  );
};

export default UserManagementTable;
