import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-semibold'><span className='text-light'>SER</span><span className='text-danger'>VICE</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Decoration</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link href="#login">Login</Nav.Link>

            <Button href='#register' variant='dark'>Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation