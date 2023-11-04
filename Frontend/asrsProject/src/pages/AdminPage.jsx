import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "./AdminPage.module.css"
import {  AdminContextProvider, adminContext } from '../context/adminContext'
import AdminLogin from './AdminLogin';
import AdminProfile from './AdminProfile';
import { useCookies } from 'react-cookie';
const { formbox,inputbox,submit} = styles;

function AdminPage() {
  const {isAdmin} = useContext(adminContext);
  const [isLoggedIn, setisLoggedIn] = useState(isAdmin);
  const [username,setUsername] = useState('');
  const [cookies] = useCookies(['jwt_token']);
  // const  [isAuthenticated,setisAuthenticated] = useState(false);


  useEffect(()=>{
     setisLoggedIn(cookies.jwt_token);
 
  },[])

  return(
    <>
    <AdminContextProvider value={{isLoggedIn,setisLoggedIn,username,setUsername}} >
      {isLoggedIn? <AdminProfile /> : <AdminLogin/>}

    </AdminContextProvider>
    </>
  )
}

export default AdminPage