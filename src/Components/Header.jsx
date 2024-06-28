// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
       <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
            <i className="fa-solid fa-photo-film me-2"></i>
            Media-Player-App 
       </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header