import React from 'react'
import { useDispatch, useSelector } from 'react-redux'// to connect with backend
import { useAdminLogoutMutation } from '../../Slices/AdminSlice/adminsApiSlice'
import { logout } from '../../Slices/AdminSlice/authSlice'
import { useNavigate } from 'react-router-dom'

const DashScreen = () => {
  const dispatch = useDispatch()

  const [useLogoutApiCall] = useAdminLogoutMutation()
  const navigate = useNavigate()

  const { adminInfo } = useSelector((state) => state.adminAuth) 

   const adminLogoutHandler = async ()=>{
    try {
      await useLogoutApiCall().unwrap()
      dispatch(logout())
      console.log("cames here");
      navigate('/admin')
    } catch (err) {
      console.log(err);
    }
   }

  return (
 <>
    <h1>dashboard</h1>
    <form action="">
      <h2>name :{adminInfo.name} </h2>
      <h3>email:{adminInfo.email}</h3>
      <button onClick={adminLogoutHandler}>logout</button>
    </form>
 </>
  )
}

export default DashScreen