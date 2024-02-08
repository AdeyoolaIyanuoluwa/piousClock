import React from "react";
import styles from "./dashboard.module.scss";
import Card from "@/components/Card";
import Avatar from "@/components/Avatar";
import { history, membersData } from "@/admin/mocks";
import PlaceholderIcon from "../../../assets/placeholder.svg";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card />
      <div className={styles.dashboard}>
        <div className={styles.dashboard__members}>
          <div className={styles.dashboard__members__header}>
            <text>Recently added members</text>
            <p onClick={() => navigate("/user-management")}>See more</p>
          </div>
          {membersData.slice(0, 5).map((i) => (
            <div className={styles.dashboard__members__data}>
              <div className={styles.dashboard__members__data__avatar}>
                <Avatar name={i.last_name} size="sm" />
                <div>
                  <text>
                    {i.first_name} {i.last_name}
                  </text>
                  <p>{i.address}</p>
                </div>
              </div>
              <div>
                <p>Date added:</p>
                <p style={{ color: "#1F2937" }}>{i.date}</p>
              </div>
            </div>
          ))}
          {!membersData?.length && (
            <>
              <div className={styles.dashboard__members__empty}>
                <div>
                  {<img src={PlaceholderIcon} alt="" />}{" "}
                  <p>You have no recent activity.</p>
                  <p>Go to “User management” to add members</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles.dashboard__members}>
          <div className={styles.dashboard__members__header}>
            <text>Recent clock-ins</text>
            <p onClick={() => navigate("/history")}>See more</p>
          </div>

          {history.slice(0, 5).map((i) => (
            <div className={styles.dashboard__members__data}>
              <div className={styles.dashboard__members__data__avatar}>
                <Avatar name={i.full_name} size="sm" />
                <div>
                  <text>{i.full_name}</text>
                  <p>{i.address}</p>
                </div>
              </div>
              <div>
                <p>Clock-in:</p>
                <p style={{ color: "#1F2937" }}>
                  {i.date}{" "}
                  <span className={styles.dashboard__divider}>
                    {i.clock_in}
                  </span>
                </p>
              </div>
            </div>
          ))}

          {!history?.length && (
            <>
              <div className={styles.dashboard__members__empty}>
                <div>
                  {<img src={PlaceholderIcon} alt="" />}{" "}
                  <p>You have no recent activity.</p>
                  <p>Go to “User management” to add members</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
