import React, { useState, useEffect } from "react";
import styles from "./clockInHistory.module.scss";
import Avatar from "@/components/Avatar";
import PlaceholderIcon from "../../../assets/placeholder.svg";
import Pagination from "@/components/Pagination";
import { useFetchClockInHistory } from "@/admin/hooks/queries/useFetchClockInHistory";
import useAlert from "@/admin/hooks/useAlert";
import { useDebounce } from "use-debounce";
import moment from "moment";
import SearchBox from "@/components/SearchBox";
import Button from "@/components/Button";
import useSecondRunEffect from "@/admin/hooks/queries/useSecondRunEffect";
import FilterClockInHistory from "./FilterClockInHistory";
import FilterTags from "@/components/FilterTag";
import { Position } from "evergreen-ui";

export const CardLoader = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeleton__head} />
  </div>
);
const ClockInHistoryMobile = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDebounce] = useDebounce(searchValue, 1000);
  const [page, setPage] = useState(1);
  const [allHistory, setAllHistory] = useState([]);
  const { toast } = useAlert();
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [filteredData, setFilteredData] = useState<any>({date: "", to_date: ""});
  const { data, isError, isSuccess, isFetching, refetch } =
    useFetchClockInHistory({
      query: { page: page, per_page: 10, search: searchDebounce,  ...filteredData, },
    });

  useEffect(() => {
    if (isSuccess) {
      const history = data?.members;
      if (history?.length || history?.length == 0) {
        setAllHistory(history);
        return;
      }
    }
  }, [isFetching]);
 

  useEffect(() => {
    if (isError) {
      toast({ type: "error", message: "Bad request" });
    }
  }, [isError]);
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
  return (
    <div className={styles.history}>
       <div className={styles.history__header}>
          <div className={styles.history__header__search__p}>
            <p style={{ width: "72px" }}>Members</p>
          </div>
          <div className={styles.history__header__search}>
            <SearchBox
              searchName="Search"
              onChange={(e) => setSearchValue(e)}
              searchValue={searchValue}
            />
            <Button
              size={"md"}
              theme="secondary"
              onClick={() => setShowFilterDrawer(true)}
            >
              Filter
            </Button>
          </div>
        </div>
        {filteredData?.date && (
            <FilterTags
              name={`${moment(filteredData?.date).format(
                "D MMMM, YYYY"
              )} - ${moment(filteredData?.to_date).format("D MMMM, YYYY")}`}
              filterKey="date"
              dataTestId="filter-tag"
              filteredData={filteredData}
              handleCancelFilter={() => handleCancelFilter("date")}
            />
          )}
      {isFetching ? (
        <CardLoader />
      ) : (
        allHistory.slice(0, 10).map((i: any) => (
          <div className={styles.history__members}>
            <div className={styles.history__members__avatar}>
              <div className={styles.history__members__avatar__name}>
                <Avatar name={i.full_name} size="md" url={i.profile_image} />
                <div>
                  <text>{i.full_name}</text>
                  <p>{i.email}</p>
                  <p>{i.phone_number}</p>
                </div>
              </div>
              <div className={styles.history__members__avatar__dateAdded}>
                {" "}
                <p>{moment(i.date_added).format(" MMM D, YYYY")}</p>
              </div>
            </div>
            <div className={styles.history__members__clock}>
              <p>
                Clock-in:{" "}
                {i.clock_in_time ? moment(i?.clock_in_time).format("LT") : "-"}
              </p>
              <p
                style={{ borderLeft: "1px solid #F3F4F6", height: "16px" }}
              ></p>
              <p>
                Clock-out:{" "}
                {i.clock_out_time
                  ? moment(i?.clock_out_time).format("LT")
                  : "-"}
              </p>
            </div>
          </div>
        ))
      )}
      {isFetching ? (
        <CardLoader />
      ) : (
        !allHistory?.length && (
          <>
            <div className={styles.history__empty}>
              <div>
                {<img src={PlaceholderIcon} alt="PlaceholderIcon" />}{" "}
                <p>You have no members</p>
                <p>Start by adding new members</p>
              </div>
            </div>
          </>
        )
      )}
      {showFilterDrawer && (
        <FilterClockInHistory
          isShown={showFilterDrawer}
          onCloseComplete={() => setShowFilterDrawer(false)}
          position={Position.BOTTOM }
          setFilteredData={setFilteredData}
        />
      )}
      {isFetching ? (
        <CardLoader />
      ) : (
        <Pagination
          totalPage={data.total_pages}
          currentPage={page}
          displayed={allHistory.length}
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

export default ClockInHistoryMobile;
