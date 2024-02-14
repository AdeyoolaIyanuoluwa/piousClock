import React, { useState, useEffect } from "react";
import styles from "./users.module.scss";
import { membersData } from "@/admin/mocks";
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

const UserManagementMobile = () => {
  const [addMember, setAddMember] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchDebounce] = useDebounce(searchValue, 1000);
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
    <div className={styles.user}>
      {allMemberData.slice(0, 10).map((i: any) => (
        <div className={styles.user__members}>
          <div className={styles.user__members__avatar}>
            <div className={styles.user__members__avatar__name}>
              <Avatar name={i.last_name} size="md" />
              <div>
                <text>
                  {i.first_name} {i.last_name}
                </text>
                <p>{i.email}</p>
                <p>{i.phone_number}</p>
              </div>
            </div>
            <div>
              {" "}
              <p>{moment(i.date_added).format(" MMM D, YYYY")}</p>
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
      <Pagination
        totalPage={data.total_pages}
        currentPage={data.total_pages}
        displayed={data.total_count}
      />
    </div>
  );
};

export default UserManagementMobile;
