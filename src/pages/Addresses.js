import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import AddressForm from '../components/AddressForm.js';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import AddressComponent from '../components/AddressComponent.js';
import { Link, Outlet } from 'react-router-dom';
function Addresses() {
  const [show,setShow] = useState(false)
  const [showForm,setShowForm] = useState(false)
  const[resultArr,setResultArr] = useState([])
  function sendRequest(userId) {
    fetch("http://localhost:8080/user/" + userId + "/addresses",{
      method : "GET",
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
     
  })
    .then((res) => res.json())
    .then((result) =>  setResultArr(result))
    .catch((err) => console.log(err)) 
    const rows = [];
    for (let i = 0; i < resultArr.length; i++) {
    rows.push(<AddressComponent title = {resultArr[i].title} addressExplanation = {resultArr[i].addressExplanation} city = {resultArr[i].city} district = {resultArr[i].district} street = {resultArr[i].street} key={i} />);
    }
    return <Row>{rows}</Row>;
  
}
function handleAddress(){
  return sendRequest(localStorage.getItem("currentUser"))
}
function handleAddressForm(){
  return  (
  <Row >
  <Col  md={6} className = "bord"> <AddressForm/> </Col>  
  </Row>
  
  );
}

function handleShow(){
  setShow(true)
}
function handleShowForm(){
  setShowForm(true)
}



  return (
    <Container fluid = "true">

     <Card className='text-center'>
      <Card.Body>
        <Card.Title>My Adresses</Card.Title>
      </Card.Body>   
    </Card>

      <Button variant="outline-success" className = "asdf" onClick={handleShow}>
        Show Addresses
      </Button>
      <Link to ="addressform"><Button variant="outline-success"  className = "asdf"> Add Address</Button></Link>
      
      { show ? handleAddress() : null }
      {showForm ? handleAddressForm(): null}
     
    <Outlet/>
</Container>
  );
}

export default Addresses;