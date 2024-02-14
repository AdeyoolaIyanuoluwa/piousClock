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

const ClockInHistory = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [page, setPage] = useState(1);
  const [searchDebounce] = useDebounce(searchValue, 1000);
  const [allHistory, setAllHistory] = useState([]);
  const { toast } = useAlert();
  const { data, isError, isSuccess, isFetching, error, refetch } =
    useFetchClockInHistory({
      query: { page: page, per_page: 10, search: searchDebounce },
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
      toast({ type: "error", message: error?.res?.data?.message });
    }
  }, [isError]);

  useSecondRunEffect(() => {
    refetch();
  }, [searchDebounce, page]);
  return (
    <div>
      <Card />

      <div className={styles.history}>
        <div className={styles.history__header}>
          <div className={styles.history__header__search}>
            <p style={{ width: "72px" }}>Members</p>
            <SearchBox
              searchName="Search"
              onChange={(e) => setSearchValue(e)}
              searchValue={searchValue}
            />
          </div>
          <div>
            <Button
              size={"md"}
              theme="secondary"
              onClick={() => setShowFilterDrawer(true)}
            >
              Filter
            </Button>
          </div>
        </div>
        <div className={styles.history__table}>
          <Table
            tableHeaders={historyHeader}
            tableData={allHistory}
            paginate
            user
            totalPage={data.total_pages}
            currentPage={data.total_pages}
            displayed={data.total_count}
            loading={isFetching}
            totalCount={data.total_count}
          >
            {(row: any) => {
              return (
                <>
                  <td>
                    <div className={styles.avatar_name}>
                      <div>
                        <Avatar name={row.full_name} size="sm" url={row.profile_image}/>
                      </div>
                      {row.full_name}
                    </div>
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone_number}</td>
                  <td>{row.clock_in_time?moment(row?.clock_in_time).format("LT"):"-"}</td>

                  <td>{row.clock_out_time?moment(row?.clock_out_time).format("LT"): "-"}</td>
                  
                  <td>{moment(row.date_added).format(" MMM D, YYYY")}</td>
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
        />
      )}
    </div>
  );
};

export default ClockInHistory;
