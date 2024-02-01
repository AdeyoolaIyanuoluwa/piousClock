import Avatar from "@/components/Avatar";
import Table from "@/components/Table";
import { membersData, tableHeader } from "@/mocks";
import React from "react";
import styles from "./users.module.scss";
import Dropdown from "@/components/Dropdown";
import VerticalDotIcon from "../../assets/DotsThreeVertical.svg";
import { Option } from "@/components/Dropdown/Option";
import EditIcon from "../../assets/editIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";

const UserManagementTable = () => {
  return (
    <div>
      <Table tableHeaders={tableHeader} tableData={membersData}>
        {(row: any) => {
          return (
            <>
              <td>
                <div className={styles.avatar_name}>
                  <div>
                    <Avatar name={`${row.first_name} ${row.last_name}`} />
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
                      <Option image={EditIcon}>Edit</Option>
                      <Option image={DeleteIcon}>Delete</Option>
                    </>
                  }
                />
              </td>
            </>
          );
        }}
      </Table>
    </div>
  );
};

export default UserManagementTable;
