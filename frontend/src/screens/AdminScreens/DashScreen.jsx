import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'// to connect with backend
import { useAdminLogoutMutation } from '../../Slices/AdminSlice/adminsApiSlice'
import { useIsAdminChangeMutation } from '../../Slices/AdminSlice/adminsApiSlice';
import { logout } from '../../Slices/AdminSlice/authSlice'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const DashScreen = () => {
  const dispatch = useDispatch()
  const [update,setUpdate] = useState(false)

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userDetails = await axios.get('http://localhost:3000/api/admin/users')
      console.log(userDetails.data.users[0], "======================")
      setUsers(userDetails.data.users);
    }
    fetchUsers();
  }, [update])

  console.log("users = ", users);
  const [logoutApiCall] = useAdminLogoutMutation()
  const [changeAdminValue]   = useIsAdminChangeMutation()
  const navigate = useNavigate()

  const { adminInfo } = useSelector((state) => state.adminAuth)

  const adminLogoutHandler = async () => {
    try {

      //  await logoutApiCall().unwrap();
      dispatch(logout())
      console.log("cames here");
      navigate('/admin')
    } catch (err) {
      console.log(err);
    }
  }


  const changeAdmin = async(id)=>{
    try {
      const change = await changeAdminValue({id})
      setUpdate(!update)
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

      <Table striped="columns">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((x) => (
            <tr key={x._id}>
              <td>{x._id}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.is_admin}</td>

              <td>
                {x.is_admin ? (
                  <Button onClick={()=>changeAdmin(x._id)}  variant="warning">Block</Button>
                ) : (
                  <Button onClick={()=>changeAdmin(x._id)} variant="success">unblock</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </>
  )
}

export default DashScreen





