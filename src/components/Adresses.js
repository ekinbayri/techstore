import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import AdressForm from './AdressForm.js';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Adresses() {
  function sendRequest(userId) {
    fetch("http://localhost:8080/user/" + userId + "/adresses",{
      method : "GET",
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
     
  })
    .then((res) => res.json())
    .then((result) =>  {console.log(result)})
    .catch((err) => console.log(err)) 

}
  return (
    <Container fluid = "true">
    <Header/>
    <Alert variant="success">
        <Alert.Heading>My Adresses</Alert.Heading>
      </Alert>
      <Button variant="primary" onClick={sendRequest(localStorage.getItem("currentUser"))}>
        asasd
      </Button>
      <Row  >
      <Col  md={6} className = "bord"> <AdressForm/> </Col>
    
    </Row>
    
</Container>
  );
}

export default Adresses;