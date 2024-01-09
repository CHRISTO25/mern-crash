import React, { useState,useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'// to connect with backend
import { Form,Button,Row,Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useSignupMutation } from '../Slices/usersApiSlice';
import {setCredentials} from '../Slices/authSlice'//to connect  with backend

const RegisterScreen = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state)=>state.auth)

    const [signup,{isLoading}] =useSignupMutation()//this login is called from userApiSlice

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate,userInfo])

    const submitHandler = async (e)=>{
        e.preventDefault();
       if (password !== confirmPassword) {
          toast.error('Password do not match')
       }else{
        try {
            const res = await signup({name,email,password}).unwrap() ;//this login is called from userApiSlice
            dispatch(setCredentials({...res}))
            navigate('/')
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
       }
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>

        <Form onSubmit={submitHandler}>
        <Form.Group  className='my-2' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter the name' value={name}
                onChange={(e)=>setName(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group  className='my-2' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter the email' value={email}
                onChange={(e)=>setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group  className='my-2' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter the password' value={password}
                onChange={(e)=>setPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group  className='my-2' controlId='confirmPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm password' value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>
               
               {isLoading && <Loader/>}

            <Button type='submit' variant='primary' className='mt-3'>Sign Up</Button>

            <Row className='py-3'>
                <Col>
                Already have an account? <Link to='/login'>Sign In</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen