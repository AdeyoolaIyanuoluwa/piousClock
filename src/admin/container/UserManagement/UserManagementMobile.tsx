import React, { useState, useEffect } from "react";
import styles from "./users.module.scss";
import Avatar from "@/components/Avatar";
import PlaceholderIcon from "../../../assets/placeholder.svg";
import Button from "@/components/Button";
import AddMember from "./AddMemberModal";
import Pagination from "@/components/Pagination";
import { useFetchMembers } from "@/admin/hooks/queries/useFetchMembers";
import useAlert from "@/admin/hooks/useAlert";
import { useDebounce } from "use-debounce";
import useSecondRunEffect from "@/admin/hooks/queries/useSecondRunEffect";
import moment from "moment";
import { Position } from "evergreen-ui";
import SearchBox from "@/components/SearchBox";
import FilterUserManagement from "./FilterUserManagement";
import FilterTags from "@/components/FilterTag";
import EditMember from "./EditMemberModal";

export const CardLoader = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeleton__head} />
  </div>
);

const UserManagementMobile = () => {
  const [addMember, setAddMember] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [filteredData, setFilteredData] = useState<any>({
    date: "",
    to_date: "",
  });
  const [editMember, setEditMember] = useState(false);
  const [singleMemberId, setSingleMemberId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchDebounce] = useDebounce(searchValue, 1000);
  const { toast } = useAlert();
  const [page, setPage] = useState(1);
  const [allMemberData, setAllMemberData] = useState([]);
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
        setFullMemberData(members);
        return;
      }
    }
  }, [isFetching]);
  useSecondRunEffect(() => {
    refetch();
  }, [searchDebounce, page]);

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
  const handleEditModal = (memberId: any) => {
    setSingleMemberId(memberId);
    setEditMember(true);
  };
  return (
    <div className={styles.user}>
      <div className={styles.user__header}>
        <div className={styles.user__header__search}>
          <p style={{ width: "72px" }}>Members</p>
          <SearchBox
            searchName="Search"
            onChange={(e: React.SetStateAction<string>) => setSearchValue(e)}
            searchValue={searchValue}
          />
        </div>
        <div className={styles.user__header__button}>
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
      {filteredData?.date && (
        <div>
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
      {isFetching ? (
        <CardLoader />
      ) : (
        allMemberData.slice(0, 10).map((member: any) => (
          <div
            className={styles.user__members}
            onClick={() => handleEditModal(member.id)}
          >
            <div className={styles.user__members__avatar}>
              <div className={styles.user__members__avatar__name}>
                <Avatar name={`${member.first_name} ${member.last_name}`} size="md" />
                <div>
                  <text>
                    {member.first_name} {member.last_name}
                  </text>
                  <p>{member.email}</p>
                  <p>{member.phone_number}</p>
                </div>
              </div>
              <div className={styles.user__members__avatar__dateAdded}>
                {" "}
                <p>{moment(member.date_added).format(" MMM D, YYYY")}</p>
              </div>
            </div>
          </div>
        ))
      )}

      {isFetching ? (
        <CardLoader />
      ) : (
        !allMemberData?.length && (
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
                  <Button size="md" theme="second">
                    Import CSV file
                  </Button>
                </div>
              </div>
            </div>
          </>
        )
      )}
      {showFilterDrawer && (
        <FilterUserManagement
          isShown={showFilterDrawer}
          onCloseComplete={() => setShowFilterDrawer(false)}
          position={Position.BOTTOM}
          setFilteredData={setFilteredData}
        />
      )}
      {addMember && (
        <AddMember
          refetch={refetch}
          isShown={addMember}
          onCloseComplete={() => setAddMember(false)}
          position={Position.BOTTOM}
          setIsShown={setAddMember}
        />
      )}
      {editMember && (
        <EditMember
          isShown={editMember}
          refetch={refetch}
          setIsShown={setEditMember}
          onCloseComplete={() => setEditMember(false)}
          singleMemberId={singleMemberId}
          position={Position.BOTTOM}
          fullMemberData={fullMemberData}
        />
      )}
      {isFetching ? (
        <CardLoader />
      ) : (
        <Pagination
          totalPage={data.total_pages}
          currentPage={page}
          displayed={allMemberData.length}
          totalCount={data.total_count}
          // loading={isFetching}
          changeCurrentPage={(num: { selected: number }) =>
            setPage(num?.selected + 1)
          }
          forcePage={page - 1}
        />
      )}
    </div>
  );
};

export default UserManagementMobile;
