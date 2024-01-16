import React from 'react'
import Header from './components/Header'
import { Outlet,useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const location = useLocation()
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <>
    {isAdminPage ? null:<Header />}
      
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>

    </>
  )
}

export default App