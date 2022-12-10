import Items from '../components/Items';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryElement from '../components/CategoryElement';
import Header from '../components/Header.js';
function Index() {
    return (
<Container fluid = "true">
    <Header/>
    <Row>
        <Col><CategoryElement /></Col>
    </Row>
    <Row>
        <Col className = "center"> <Items /> </Col>
    </Row>

</Container>
     
    );
  }
export default Index;