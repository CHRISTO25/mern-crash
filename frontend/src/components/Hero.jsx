import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Hero = () => {
  return (
    <div className='py-5'>
        <Container className='d-flex justify-content-center'>
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                <h1 className='text-center mb-4'> Mern Authentication</h1>
                <p className='text-center mb-4'>
                    This is a boilerplate for Mern authentication that stores a Jwt in 
                     an HTTP-Only cookie. It also used Redux Toolkit and the React Bootstrap library 
                </p>
                <div className='d-flex'>
                    <LinkContainer to='/login'>
                    <Button variant='primary'  className='me-3'>
                        Sign In
                    </Button>
                    </LinkContainer>
                    <LinkContainer to='/signup'>
                    <Button variant='secondary'>
                        Sign Up
                    </Button>
                    </LinkContainer>
                </div>
            </Card>
        </Container>
    </div>
  )
}

export default Hero