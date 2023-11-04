import { createContext, useContext } from 'react';

export const adminContext = createContext({
    isAdmin : false,
    setIsAdmin : ()=>{}
});

export const AdminContextProvider = adminContext.Provider;


