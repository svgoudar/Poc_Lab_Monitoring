import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
function Navb(){
  return(
    <div>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Lab Temperature Monitoring</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Signup">Sign up</Nav.Link>
      <Nav.Link href="/Login">Sign in</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
    </Nav>
    </Navbar>
    </div>
  );
}
export default Navb;