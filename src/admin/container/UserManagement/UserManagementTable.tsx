import Avatar from "@/components/Avatar";
import Table from "@/components/Table";
import { tableHeader } from "@/admin/mocks";
import React, { useState, useEffect } from "react";
import styles from "./users.module.scss";
import Dropdown from "@/components/Dropdown";
import VerticalDotIcon from "../../../assets/DotsThreeVertical.svg";
import { Option } from "@/components/Dropdown/Option";
import EditIcon from "../../../assets/editIcon.svg";
import DeleteIcon from "../../../assets/deleteIcon.svg";
import EditMember from "./EditMemberModal";
import DeleteMemberModal from "./DeleteMemberModal";
import { useFetchMembers } from "@/admin/hooks/queries/useFetchMembers";
// import { useUserContext } from "@/context/userContexts";
import useAlert from "@/admin/hooks/useAlert";
import moment from "moment";

const UserManagementTable = () => {
  const [editMember, setEditMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const { toast } = useAlert();
  const [page, setPage] = useState(1);
  const [allMemberData, setAllMemberData] = useState([]);
  const { data, isError, isSuccess, isFetching, error } = useFetchMembers({
    query: { page: page, per_page: 10 },
  });

  useEffect(() => {
    if (isError) {
      toast({
        type: "error",
        message: error?.response?.data?.message,
      });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      const members = data?.members;
      // console.log(data?.members, "aaaaa");
      if (members?.length || members?.length == 0) {
        setAllMemberData(members);
        return;
      }
    }
  }, [isFetching]);

  return (
    <div>
      <Table tableHeaders={tableHeader} tableData={allMemberData} paginate>
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
              <td>{row.email}</td>
              <td>{row.phone_number}</td>
              <td>{moment(row.date_added).format(" MMM D, YYYY")}</td>
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
