import Button from "@/components/Button";
import SearchBox from "@/components/SearchBox";
import React, { useState, useEffect } from "react";
import styles from "./users.module.scss";
import { useDebounce } from "use-debounce";
import FilterUserManagement from "./FilterUserManagement";
import AddMember from "./AddMemberModal";
import UserManagementMobile from "./UserManagementMobile";
import Avatar from "@/components/Avatar";
import Table from "@/components/Table";
import { tableHeader } from "@/admin/mocks";
import Dropdown from "@/components/Dropdown";
import VerticalDotIcon from "../../../assets/DotsThreeVertical.svg";
import { Option } from "@/components/Dropdown/Option";
import EditIcon from "../../../assets/editIcon.svg";
import DeleteIcon from "../../../assets/deleteIcon.svg";
import EditMember from "./EditMemberModal";
import DeleteMemberModal from "./DeleteMemberModal";
import { useFetchMembers } from "@/admin/hooks/queries/useFetchMembers";
import useAlert from "@/admin/hooks/useAlert";
import moment from "moment";
import useSecondRunEffect from "@/admin/hooks/queries/useSecondRunEffect";
import { Position } from "evergreen-ui";
import FilterTags from "@/components/FilterTag";

const UserManagement = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [searchDebounce] = useDebounce(searchValue, 1000);
  const [filteredData, setFilteredData] = useState<any>({
    date: "",
    to_date: "",
  });
  const [editMember, setEditMember] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const { toast } = useAlert();
  const [page, setPage] = useState(1);
  const [allMemberData, setAllMemberData] = useState([]);
  const [singleMemberId, setSingleMemberId] = useState("");
  const [fullMemberData, setFullMemberData] = useState([]);
  const { data, isError, isSuccess, isFetching, refetch } = useFetchMembers({
    query: {
      page: page,
      per_page: 10,
      search: searchDebounce,
      ...filteredData,
    },
  });

  useEffect(() => {
    if (isError) {
      toast({
        type: "error",
        message: "Bad request",
      });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      const members = data?.members;
      if (members?.length || members?.length == 0) {
        setAllMemberData(members);
        setFullMemberData(members)
        return;
      }
    }
  }, [isFetching]);
  useSecondRunEffect(() => {
    refetch();
  }, [searchDebounce, page]);

  const handleEditModal = (row: any) => {
    setSingleMemberId(row?.id);
    setEditMember(true);
  };
  const handleDeleteModal = (row: any) => {
    setSingleMemberId(row?.id);
    setDeleteMember(true);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e: any) => {
      setIsMatched(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setIsMatched(mediaQuery.matches);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCancelFilter = (filterKey: any) => {
    setFilteredData((prevFilteredData: any) => {
      const newFilteredData = { ...prevFilteredData };

      if (filterKey === "date") {
        newFilteredData["date"] = "";
        newFilteredData["to_date"] = "";
      } else {
        newFilteredData[filterKey] = "";
      }
      refetch();
      return newFilteredData;
    });
  };
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

          <Button
            size={"md"}
            theme="primary"
            onClick={() => setAddMember(true)}
          >
            Add member
          </Button>
        </div>
      </div>
      <div>
        {filteredData?.date && (
          <div className={styles.tag}>
            <FilterTags
              name={`${moment(filteredData?.date).format(
                "D MMMM, YYYY"
              )} - ${moment(filteredData?.to_date).format("D MMMM, YYYY")}`}
              filterKey="date"
              filteredData={filteredData}
              handleCancelFilter={() => handleCancelFilter("date")}
            />
          </div>
        )}
      </div>
      <div className={styles.management__table}>
        <div>
          <Table
            tableHeaders={tableHeader}
            tableData={allMemberData}
            paginate
            totalPage={data.total_pages}
            currentPage={page}
            displayed={allMemberData.length}
            totalCount={data.total_count}
            loading={isFetching}
            changeCurrentPage={(num: { selected: number }) =>
              setPage(num?.selected + 1)
            }
            forcePage={page - 1}
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
                          url={row.profile_image}
                        />
                      </div>
                      {capitalizeFirstLetter(row.first_name)}
                    </div>
                  </td>
                  <td className="capitalize">
                  {row.last_name.charAt(0).toUpperCase() + row.last_name.slice(1)}
                  </td>
                  <td>{row.email}</td>
                  <td>{row?.phone_number?.replace("+234", "0")}</td>
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
                            onClick={() => handleEditModal(row)}
                          >
                            Edit
                          </Option>
                          <Option
                            image={DeleteIcon}
                            onClick={() => handleDeleteModal(row)}
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
              refetch={refetch}
              setIsShown={setEditMember}
              onCloseComplete={() => setEditMember(false)}
              singleMemberId={singleMemberId}
              fullMemberData={fullMemberData}
            />
          )}
          {deleteMember && (
            <DeleteMemberModal
              isShown={deleteMember}
              onClose={() => setDeleteMember(false)}
              setIsShown={setDeleteMember}
              singleMemberId={singleMemberId}
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
          position={isMatched ? Position.BOTTOM : Position.RIGHT}
          setFilteredData={setFilteredData}
        />
      )}
      {addMember && (
        <AddMember
          refetch={refetch}
          isShown={addMember}
          onCloseComplete={() => setAddMember(false)}
          setIsShown={setAddMember}
          position={isMatched ? Position.BOTTOM : Position.RIGHT}
        />
      )}
    </div>
  );
};
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default UserManagement;
