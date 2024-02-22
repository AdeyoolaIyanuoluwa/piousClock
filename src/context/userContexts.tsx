import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PropTypes from "prop-types";
import instance from "../services/axiosInstance";
import Storage from "../utils/storage";
import { MEMBERS_DATA, LOGGED_IN } from "../store";
import { LOGIN_ROUTE } from "../routes/path";

const $storage: any = new Storage("local");
export const UserContext: any = createContext({});

export const UserContextProvider = ({ children }: any) => {
  const [memberData, setMemberData] = useState(
    $storage.get(MEMBERS_DATA) ?? {}
  );
  const isLoggedIn = $storage.get(LOGGED_IN);
  const handleSetMemberData = useCallback((data: any) => {
    setMemberData({ ...($storage.get(MEMBERS_DATA) ?? {}), ...data });
    $storage.save(MEMBERS_DATA, data);
  }, []);

  const logoutUser = () => {
    delete instance.defaults.headers?.common['Authorization'];
    $storage.clear();
    window.location.replace(LOGIN_ROUTE);
    setMemberData({});
  };

  return (
    <UserContext.Provider
      value={useMemo(
        () => ({
          memberData,
          isLoggedIn,
          setMemberData: handleSetMemberData,
          logoutUser,
        }),
        [memberData]
      )}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export const useUserContext = () => useContext(UserContext);
