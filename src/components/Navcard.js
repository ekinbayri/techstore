import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Navcard() {
  
  return (
    <Card>
    <Card.Header>
    <Card.Title>{"Welcome " + localStorage.getItem("currentUsername")}</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
     
    </Card.Header>
    <Card.Body>
    <Nav fill variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
        <Link to ="orders"><Button variant="outline-primary"  className = "buttontest">My orders</Button></Link>
        </Nav.Item>
        <Nav.Item>
        <Link to ="addresses"><Button variant="outline-primary"  className = "buttontest">My adresses</Button></Link>
        </Nav.Item>
        <Nav.Item>
        <Link to ="billinginformation"><Button variant="outline-primary"  className = "buttontest">Billing information</Button></Link>
        </Nav.Item>
        <Nav.Item>
        <Link to ="addresses"><Button variant="outline-primary"  className = "buttontest">Personal information</Button></Link>
        </Nav.Item>
      </Nav>
      
    </Card.Body>
  </Card>
  );
}

export default Navcard;