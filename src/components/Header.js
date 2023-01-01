import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem("tokenKey")
    localStorage.removeItem("currentUser")
    localStorage.removeItem("userName")
    navigate("/")
  } 
  return (
    <Navbar bg="dark" variant = "dark" expand="lg">
      <Container> 
        <Navbar.Brand href="/">Tech Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {localStorage.getItem("currentUser") == null ? <Nav.Link href="/register">Register</Nav.Link>:<Nav.Link href="/profile">Profile</Nav.Link>}
          {localStorage.getItem("currentUser") == null ? <Nav.Link href="/login">Login</Nav.Link>:<Nav.Link onClick={handleLogout}>Logout</Nav.Link>} 
          <Nav.Link href="/mycart">My Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;