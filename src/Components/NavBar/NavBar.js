import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Navbar.css'

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
            <Navbar.Brand>
              <NavLink to='/home' className='navbar-title'>
               <h3>Free Run Travels</h3>
                </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to='/home'>Home</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/myorders">My Bookings</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/manageorders">Manage Bookings</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/addservice">Add Tour</NavLink>
                            {user?.email ?
                            <Button onClick={logOut} className='nav-items fs-6 px-3  py-2 fw-bold text-dark text-start' as={Link} to="/login" variant="light">Logout</Button> :
                            <Nav.Link className='nav-items fs-6 px-3  py-2 fw-bold text-dark' as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <p className='text-danger fw-bold'>{user?.displayName}</p>
                        </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default NavBar;