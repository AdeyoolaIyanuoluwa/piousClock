import Button from "@/components/Button";
import SearchBox from "@/components/SearchBox";
import React, { useState, useEffect } from "react";
import styles from "./users.module.scss";
import { useDebounce } from "use-debounce";
import FilterUserManagement from "./FilterUserManagement";
import AddMember from "./AddMember";
import UserManagementMobile from "./UserManagementMobile";
import Avatar from "@/components/Avatar";
import Table from "@/components/Table";
import { tableHeader } from "@/admin/mocks";
import Dropdown from "@/components/Dropdown";
import VerticalDotIcon from "../../../assets/DotsThreeVertical.svg";
import { Option } from "@/components/Dropdown/Option";
import EditIcon from "../../../assets/editIcon.svg";
import DeleteIcon from "../../../assets/deleteIcon.svg";
import EditMember from "./EditMember";
import DeleteMemberModal from "./DeleteMemberModal";
import { useFetchMembers } from "@/admin/hooks/queries/useFetchMembers";
import useAlert from "@/admin/hooks/useAlert";
import moment from "moment";
import useSecondRunEffect from "@/admin/hooks/queries/useSecondRunEffect";

const UserManagement = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [searchDebounce] = useDebounce(searchValue, 1000);

  const [editMember, setEditMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const { toast } = useAlert();
  const [page, setPage] = useState(1);
  const [allMemberData, setAllMemberData] = useState([]);
  const { data, isError, isSuccess, isFetching, error, refetch } =
    useFetchMembers({
      query: { page: page, per_page: 10, search: searchDebounce },
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
      console.log(data?.members, "aaaaa");
      if (members?.length || members?.length == 0) {
        setAllMemberData(members);
        return;
      }
    }
  }, [isFetching]);
  useSecondRunEffect(() => {
    refetch();
  }, [searchDebounce, page]);
  return (
    <div className={styles.management}>
      <div className={styles.management__header}>
        <div className={styles.management__header__search}>
          <p style={{ width: "72px" }}>Members</p>
          <SearchBox
            searchName="Search"
            onChange={(e: React.SetStateAction<string>) => setSearchValue(e)}
            searchValue={searchValue}
          />
        </div>
        <div className={styles.management__header__button}>
          <Button
            size={"md"}
            theme="secondary"
            onClick={() => setShowFilterDrawer(true)}
          >
            Filter
          </Button>
          <Button size={"md"} theme="">
            Export
          </Button>
          <Button
            size={"md"}
            theme="primary"
            onClick={() => setAddMember(true)}
          >
            Add member
          </Button>
        </div>
      </div>
      <div className={styles.management__table}>
        <div>
          <Table
            tableHeaders={tableHeader}
            tableData={allMemberData}
            paginate
            totalPage={data.total_pages}
            currentPage={data.total_pages}
            displayed={data.total_count}
            loading={isFetching}
          >
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
                      children={
                        <img src={VerticalDotIcon} alt="vertical_dot" />
                      }
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
      </div>
      <div className={styles.management__mobile}>
        <UserManagementMobile />
      </div>
      {showFilterDrawer && (
        <FilterUserManagement
          isShown={showFilterDrawer}
          onCloseComplete={() => setShowFilterDrawer(false)}
        />
      )}
      {addMember && (
        <AddMember
          isShown={addMember}
          onCloseComplete={() => setAddMember(false)}
        />
      )}
    </div>
  );
};

export default UserManagement;
