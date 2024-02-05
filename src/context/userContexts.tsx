import React, {
    useState,
    createContext,
    useMemo,
    useCallback,
    useContext,
  } from 'react';
  import PropTypes from 'prop-types';
//   import instance from '../services/axiosInstance';
  import Storage from '../utils/storage';
  import { USER_DATA, LOGGED_IN } from '../store';
//   import { LOGIN_ROUTE } from '../routes/path';
  
  const $storage: any = new Storage('local');
  export const UserContext: any = createContext({});
  
  export const UserContextProvider = ({ children }: any) => {
    const [userData, setUserData] = useState($storage.get(USER_DATA) ?? {});
    const isLoggedIn = $storage.get(LOGGED_IN);
    const handleSetUserData = useCallback((data: any) => {
      setUserData({ ...($storage.get(USER_DATA) ?? {}), ...data });
      $storage.save(USER_DATA, data);
    }, []);
  
    // const logoutUser = () => {
    //   delete instance.defaults.headers?.common['Authorization'];
    //   $storage.clear();
    //   window.location.replace(LOGIN_ROUTE);
    //   setUserData({});
    // };
  
    return (
      <UserContext.Provider
        value={useMemo(
          () => ({
            userData,
            isLoggedIn,
            setUserData: handleSetUserData,
            // logoutUser,
          }),
          [userData]
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
  