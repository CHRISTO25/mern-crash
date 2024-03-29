import React from 'react'
import { Navbar,Nav,Container ,NavDropdown,Badge} from 'react-bootstrap'
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { useLogoutMutation } from '../Slices/usersApiSlice'
import {logout} from '../Slices/authSlice';
import { useNavigate } from 'react-router-dom'

function Header() {
    const {userInfo} = useSelector((state)=>state.auth)

    const [logoutApiCall] = useLogoutMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler=async ()=>{
        try {
          
            await logoutApiCall().unwrap();
            dispatch(logout())
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }
  return (
   <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand >Mern App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                     {userInfo ? (
                        <>
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={ logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        </>

                     ) :(
                        <>
                        <LinkContainer to='/login'>
                        <Nav.Link >
                            <FaSignInAlt/> Sign In
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/signup'>
                        <Nav.Link >
                            <FaSignOutAlt/> Sign Up
                        </Nav.Link>
                        </LinkContainer>
                     </>
                     )}
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
   </header>
  )
}

export default Header