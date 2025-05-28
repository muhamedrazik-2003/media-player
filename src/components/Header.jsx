import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#3f51b5' }} className='py-2'>
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>
            <img
              alt=""
              src="https://i.pinimg.com/736x/15/d0/b2/15d0b28796a7b888f076a0e699036205.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top  rounded-circle"
            />{' '}
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
