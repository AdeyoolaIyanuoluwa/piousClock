import React, { useState } from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/smallscreenlogo.svg";
import FooterLogo from "../../assets/piousClock.svg";
import SearchBox from "@/components/SearchBox";
import Timer from "../../assets/memberTimer.svg";
import SmallTimer from "../../assets/smalltimer.svg";
import Copyright from "../../assets/copyright.svg";
import { useFetchMember } from "../hooks/queries/useFetchMember";
import Avatar from "@/components/Avatar";
import { useDebounce } from "use-debounce";
import useSecondRunEffect from "@/admin/hooks/queries/useSecondRunEffect";
import ClockInModal from "./ClockInModal";

const Members = () => {
  const [searchValue, setSearchValue] = useState("");
  const [clockIn, setClockIn] = useState(false);
  const [searchDebounce] = useDebounce(searchValue, 1000);
  const [selectedMember, setSelectedMember] = useState(null);
  const { data, refetch,isPending } = useFetchMember({
    query: { search: searchDebounce },
    enabled: !!searchDebounce,
  });
  const members = data?.getMember;

  useSecondRunEffect(() => {
    if (searchDebounce) refetch();
  }, [searchDebounce]);
  return (
    <div className={styles.container}>
      <div>
        <img src={Logo} alt="" />
        <p className={styles.container__p}>
          Select your profile and clock-in or out
        </p>
        <div className={styles.container__search}>
          <SearchBox
            searchName="Search"
            onChange={(e: React.SetStateAction<string>) => setSearchValue(e)}
            searchValue={searchValue}
            size="lg"
          />
        </div>

        <section>
          {members?.slice(0, 3).map((member: any) => (
            <div
              className={styles.container__content}
              key={member.id}
              onClick={() => {
                setSelectedMember(member);
                 setClockIn(true);
              }}
            >
              <Avatar
                name={member.first_name}
                size="md"
                url={member.profile_image}
              />
              <div>
                <text>
                  {member.first_name} {member.last_name}
                </text>
                <p>{member.email}</p>
                <p>{member.phone_number}</p>
              </div>
            </div>
          ))}
        </section>
        {!members?.length && (
          <>
            <div className={styles.container__emptystate}>
              <img
                className={styles.container__emptystate}
                src={Timer}
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.container__smallemptystate}
                src={SmallTimer}
                alt=""
              />
            </div>
          </>
        )}
        <div className={styles.container__footer}>
          <img
            style={{ paddingLeft: "77px" }}
            className={styles.container__footer__img}
            src={FooterLogo}
            alt=""
          />
          <p>
            Copyright <img src={Copyright} alt="" />
            Enyata 2023
          </p>
        </div>
      </div>

      {clockIn && selectedMember && (
        <ClockInModal
        loading={isPending}
          isShown={clockIn}
          onClose={() => {
            setSelectedMember(null);
             setClockIn(false);
          }}
          member={selectedMember}
        />
      )}
    </div>
  );
};

export default Members;
