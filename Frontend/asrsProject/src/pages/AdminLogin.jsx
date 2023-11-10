import {useContext, useState} from 'react'
import { useCookies } from "react-cookie";
import styles from "./AdminPage.module.css"
import { adminContext } from '../context/adminContext';
const { formbox,inputbox,submit} = styles;
function AdminLogin() {
    const {username,isLoggedIn,setisLoggedIn,setUsername} = useContext(adminContext);
    const [usernameLogin,setUsernameLogin] = useState('');
    const [password,setPassword] = useState('');
    const [wrongPass,setWrongPass] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(["jwt_token"]);

  
     const checkLoggin = async(e) =>{
      e.preventDefault()
      if(usernameLogin===''){
        return;
      }
      if(password===''){
        return;
      }
      setWrongPass(false);
      console.log("Hello")
      try{
      let res = await fetch('https://asrs-api.vercel.app/admin/login',{
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({
          username : usernameLogin,
          password : password
        })
      })
      console.log(res.status)
      if(res.status!==200){
        setWrongPass(true)
        return;
      }
      setisLoggedIn(true)
      setUsername(usernameLogin);
      res = await res.json();
      setCookie("jwt_token", res.token, { path: "/" });
      console.log(res);
    }
    catch(error){
      setWrongPass(true);
    }
    }
  

      return <>
  
      <div className='flex flex-col items-center justify-center h-screen'>
      <form  className={formbox} action="" onSubmit={checkLoggin}>
        <div className='text-cyan-50 text-center  text-2xl mb-5 mt-4 '>Login Form</div>
  
        <div className='mt-2 mb-6'>
      <input type="text" placeholder='Username' 
      value={usernameLogin}  className={inputbox}
      onChange={(e)=>{
        setUsernameLogin(e.target.value)}}/>
      <input type="password" placeholder='Password' 
      value={password} className={inputbox}
      onChange={(e)=>setPassword(e.target.value)} />
      </div>
  
      <input type="submit" value="Sumbit" className={submit}/>
      {wrongPass && <div className='text-white p-2 rounded text-sm'>Wrong Username/password</div>}
      </form>
    </div>
  
      </>
    }
 


export default AdminLogin