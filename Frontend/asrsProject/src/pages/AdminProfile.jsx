import { useContext } from 'react'
import { adminContext } from '../context/adminContext'
import { useCookies } from "react-cookie";
import Navbar from '../components/Navbar'
import AdminNav from '../components/AdminNav'
import AdminBox from '../components/AdminBox'

export default function AdminProfile() {
    const {username,setisLoggedIn,setUsername} = useContext(adminContext);
    const [cookies, setCookie, removeCookie] = useCookies(["jwt_token"]);
    const logout= ()=>{
        setisLoggedIn(false);
        setUsername('');
        removeCookie('jwt_token');
    }
  return (
    <>
    <AdminNav onClick={logout}/>
    <div className='text-white'>{username}</div>
    <div className='grid grid-cols-3 p-2 gap-2 '>

    <AdminBox bgcolor= "#5AFE73" text='Number of Meaning' buttonText='Create Meaning' value='0' />
    <AdminBox bgcolor= "#D4746E" text='Number of Sarcasm' buttonText='Add Sarcasm' value='0' />
    <AdminBox bgcolor= "#92DAECFF" text='Number of Facts' buttonText='Add Facts' value='0' />
    <AdminBox bgcolor= "#B3A7AD" text='Survey Request' buttonText='Add Facts' value='0' />
    <AdminBox bgcolor= "#B3A7AD" text='Admin Application' buttonText='Add Facts' value='0' />
    {/* #8CD2E5 */}

    </div>
    </>
  )
}
