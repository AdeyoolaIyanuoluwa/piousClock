import React, { useEffect } from "react";
import styles from "./dashboard.module.scss";
import Card from "@/components/Card";
import Avatar from "@/components/Avatar";
import PlaceholderIcon from "../../../assets/placeholder.svg";
import { useNavigate } from "react-router";
import moment from "moment";
import { useFetchRecentClockIn } from "@/admin/hooks/queries/useFetchRecentClockIn";
import { useFetchRecentMembers } from "@/admin/hooks/queries/useFetchRecentMembers";
import useAlert from "@/admin/hooks/useAlert";

export const CardLoader = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeleton__head} />
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useAlert();

  const {data: recentMembers,isPending: isRecentPending,isError} = useFetchRecentMembers();

  const { data: clockIn, isPending: isClockInPending, isError: clockInIsError, error: clockInError } = useFetchRecentClockIn();

  console.log(recentMembers, "data");

  console.log(clockIn, "clockin");

  useEffect(() => {
    if (isError) {
      toast({
        type: "error",
        message: "Bad request",
      });
    }
  }, [isError]);

  useEffect(() => {
    if (clockInIsError) {
      toast({
        type: "error",
        message: "Bad request",
      });
    }
  }, [clockInError]);
  return (
    <div>
      <Card />
      <div className={styles.dashboard}>
        <div className={styles.dashboard__members}>
          <div className={styles.dashboard__members__header}>
            <text>Recently added members</text>
            <p onClick={() => navigate("/user-management")}>See more</p>
          </div>

          {isRecentPending ? (
            <CardLoader />
          ) : (
            recentMembers?.slice(0, 5).map((members: any) => (
              <div className={styles.dashboard__members__data}>
                <div className={styles.dashboard__members__data__avatar}>
                  <Avatar name={members.last_name} size="sm" url={members.profile_image} />
                  <div>
                    <text>
                      {members.first_name} {members.last_name}
                    </text>
                    <p>{members.email}</p>
                  </div>
                </div>
                <div>
                  <p>Date added:</p>
                  <p style={{ color: "#1F2937" }}>
                    {moment(members.created_at).format(" MMM D, YYYY")}
                  </p>
                </div>
              </div>
            ))
          )}

          {isRecentPending ? (
            <CardLoader />
          ) : (
            !recentMembers?.length && (
              <>
                <div className={styles.dashboard__members__empty}>
                  <div>
                    {<img src={PlaceholderIcon} alt="" />}{" "}
                    <p>You have no recent activity.</p>
                    <p>Go to “User management” to add members</p>
                  </div>
                </div>
              </>
            )
          )}

        </div>

        <div className={styles.dashboard__members}>
          <div className={styles.dashboard__members__header}>
            <text>Recent clock-ins</text>
            <p onClick={() => navigate("/history")}>See more</p>
          </div>

          {isClockInPending ? (
            <CardLoader />
          ) : (
            clockIn?.slice(0, 5).map((i: any) => (
              <div className={styles.dashboard__members__data}>
                <div className={styles.dashboard__members__data__avatar}>
                  <Avatar name={i.full_name} size="sm" url={i.profile_image}/>
                  <div>
                    <text>{i.full_name}</text>
                    <p>{i.email}</p>
                  </div>
                </div>
                <div>
                  <p>Clock-in:</p>

                  <p
                    style={{
                      color: "#1F2937",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    {i.created_at
                      ? moment(i.created_at).format(" MMM D, YYYY")
                      : "-"}
                    <span className={styles.dashboard__divider}>
                      {i?.created_at ? moment(i?.created_at).format("LT") : "-"}
                    </span>
                  </p>
                </div>
              </div>
            ))
          )}

          {isClockInPending ? (
            <CardLoader />
          ) : (
            !clockIn?.length && (
              <>
                <div className={styles.dashboard__members__empty}>
                  <div>
                    {<img src={PlaceholderIcon} alt="" />}{" "}
                    <p>You have no recent activity.</p>
                    <p>Go to “User management” to add members</p>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
