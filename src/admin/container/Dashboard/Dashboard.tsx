import React, {useEffect} from "react";
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
  const { data, isPending, isError, error } = useFetchRecentMembers();
  const { data: clockIn } = useFetchRecentClockIn();


  useEffect(() => {
    if (isError) {
      toast({
        type: "error",
        message: error?.response?.data?.message,
      });
    }
  }, [isError]);
  return (
    <div>
      <Card />
      <div className={styles.dashboard}>
        <div className={styles.dashboard__members}>
          <div className={styles.dashboard__members__header}>
            <text>Recently added members</text>
            <p onClick={() => navigate("/user-management")}>See more</p>
          </div>

          {isPending ? (
            <CardLoader />
          ) : (
            data?.slice(0, 5).map((i: any) => (
              <div className={styles.dashboard__members__data}>
                <div className={styles.dashboard__members__data__avatar}>
                  <Avatar name={i.last_name} size="sm" url={i.profile_image} />
                  <div>
                    <text>
                      {i.first_name} {i.last_name}
                    </text>
                    <p>{i.email}</p>
                  </div>
                </div>
                <div>
                  <p>Date added:</p>
                  <p style={{ color: "#1F2937" }}>
                    {moment(i.created_at).format(" MMM D, YYYY")}
                  </p>
                </div>
              </div>
            ))
          )}

          {isPending ? (
            <CardLoader />
          ) : (
            !data?.length && (
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

          {isPending ? (
            <CardLoader />
          ) : (
            clockIn?.slice(0, 5).map((i: any) => (
              <div className={styles.dashboard__members__data}>
                <div className={styles.dashboard__members__data__avatar}>
                  <Avatar name={i.first_name} size="sm" />
                  <div>
                    <text>
                      {i.first_name} {i.last_name}
                    </text>
                    <p>{i.email}</p>
                  </div>
                </div>
                <div>
                  <p>Clock-in:</p>
                  <p style={{ color: "#1F2937" }}>
                    {moment(i.created_at).format(" MMM D, YYYY")}
                    <span className={styles.dashboard__divider}>
                    {moment(i?.created_at).format("LT")}
                    </span>
                  </p>
                </div>
              </div>
            ))
          )}

          {isPending ? (
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
