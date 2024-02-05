import * as React from 'react';
import { UserContextProvider } from './userContexts.tsx';

const ContextProviders = ({ children }: any) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default ContextProviders;
