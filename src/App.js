
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryElement from './components/CategoryElement';
function App() {
  return (
    <Container fluid = "true">
      <Row>
        <Col><Header /></Col>
      </Row>
      <Row>
        <Col><CategoryElement /></Col>
      </Row>
      <Row>
        <Col className = "center"> <Items /> </Col>
      </Row>
      
    </Container>
    
  
   
  );
}

export default App;
