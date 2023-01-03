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
  function navmycart(){
    navigate("/mycart")
  }
  function navregister(){
    navigate("/register")
  }
  function navlogin(){
    navigate("/login")
  }
  function navprofile(){
    navigate("/profile")
  }
  function navdefault(){
    navigate("/")
  }
  return (
    <Navbar bg="dark" variant = "dark" expand="lg">
      <Container> 
        <Navbar.Brand onClick = {navdefault}>Tech Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {localStorage.getItem("currentUser") == null ? <Nav.Link onClick = {navregister}>Register</Nav.Link>:<Nav.Link onClick = {navprofile}>Profile</Nav.Link>}
          {localStorage.getItem("currentUser") == null ? <Nav.Link onClick = {navlogin}>Login</Nav.Link>:<Nav.Link onClick={handleLogout}>Logout</Nav.Link>} 
          <Nav.Link onClick = {navmycart}>My Cart</Nav.Link>
                   
         
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;