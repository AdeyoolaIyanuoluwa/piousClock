import Card from "@/components/Card";
import React, { useState, useEffect } from "react";
import styles from "./clockInHistory.module.scss";
import SearchBox from "@/components/SearchBox";
import Button from "@/components/Button";
import { useDebounce } from "use-debounce";
import FilterClockInHistory from "./FilterClockInHistory";
import ClockInHistoryMobile from "./ClockInHistoryMobile";
import Table from "@/components/Table";
import { historyHeader } from "@/admin/mocks";
import Avatar from "@/components/Avatar";
import { useFetchClockInHistory } from "@/admin/hooks/queries/useFetchClockInHistory";
import useAlert from "@/admin/hooks/useAlert";
import useSecondRunEffect from "@/admin/hooks/queries/useSecondRunEffect";
import moment from "moment";
import { Position } from "evergreen-ui";
import FilterTags from "@/components/FilterTag";

const ClockInHistory = () => {
  const [isMatched, setIsMatched] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState<any>({
    date: "",
    to_date: "",
  });
  const [searchDebounce] = useDebounce(searchValue, 1000);
  const [allHistory, setAllHistory] = useState([]);
  const { toast } = useAlert();
  const { data, isError, isSuccess, isFetching, refetch } =
    useFetchClockInHistory({
      query: {
        page: page,
        per_page: 10,
        search: searchDebounce,
        ...filteredData,
      },
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
      toast({ type: "error", message: "Bad request"});
    }
  }, [isError]);

  useSecondRunEffect(() => {
    refetch();
  }, [searchDebounce, page]);

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

  // if(isPending)return 'loading'

  // const allHistory = data.members

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
    <div>
      <Card />

      <div className={styles.history}>
        <div className={styles.history__headerTable}>
          <div className={styles.history__headerTable__search__p}>
            <p style={{ width: "72px" }}>Members</p>
          </div>
          <div className={styles.history__headerTable__search}>
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
        <div>
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
        </div>
        <div className={styles.history__table}>
          <Table
            tableHeaders={historyHeader}
            tableData={allHistory}
            paginate
            user
            totalPage={data.total_pages}
            changeCurrentPage={(num: { selected: number }) =>
              setPage(num?.selected + 1)
            }
            forcePage={page - 1}
            currentPage={page}
            displayed={allHistory?.length}
            loading={isFetching}
            totalCount={data.total_count}
          >
            {(row: any) => {
              return (
                <>
                  <td>
                    <div className={styles.avatar_name}>
                      <div>
                        <Avatar
                          name={row.full_name}
                          size="sm"
                          url={row.profile_image}
                        />
                      </div>
                      {row.full_name}
                    </div>
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone_number}</td>
                  <td>
                    {row.clock_in_time
                      ? moment(row?.clock_in_time).format("LT")
                      : "-"}
                  </td>

                  <td>
                    {row.clock_out_time
                      ? moment(row?.clock_out_time).format("LT")
                      : "-"}
                  </td>

                  <td>
                    {row.date_added
                      ? moment(row.date_added).format(" MMM D, YYYY")
                      : "-"}
                  </td>
                </>
              );
            }}
          </Table>
        </div>
        <div className={styles.history__mobile}>
          <ClockInHistoryMobile />
        </div>
      </div>
      {showFilterDrawer && (
        <FilterClockInHistory
          isShown={showFilterDrawer}
          onCloseComplete={() => setShowFilterDrawer(false)}
          position={isMatched ? Position.BOTTOM : Position.RIGHT}
          setFilteredData={setFilteredData}
        />
      )}
    </div>
  );
};

export default ClockInHistory;
