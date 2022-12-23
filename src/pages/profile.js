import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from '../components/AlertComponent.js'
function Profile() {
    return (
<Container fluid = "true">
    <Header/>
    <Alert variant="primary" heading = {"Welcome " + localStorage.getItem("currentUsername")} first = "Announcement text" second={"Extra info text"}/> 
    <Row className='row1' >
    <Col md={2} className = "profileColumn bord" ><Nav.Link href = "/orders">My orders</Nav.Link> </Col>
    </Row>
    <Row className='row2'>
    <Col md={2} className = "profileColumn bord"><Nav.Link href = "/"> My adresses </Nav.Link></Col>
    </Row>
    <Row className='row2'>
    <Col md={2} className = "profileColumn bord"> <Nav.Link href = "/">Billing information</Nav.Link> </Col>
    </Row>
    <Row className='row2'>
    <Col md={2} className = "profileColumn bord"> <Nav.Link href = "/">Personal information</Nav.Link> </Col>
    </Row>  
         
   
    
</Container>
     
    );
  }
  export default Profile;