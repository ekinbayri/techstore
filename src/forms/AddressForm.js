import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function AddressForm(){
    const [addressExplanation,setAddressExplanation] = useState("")
    const [title,setTitle] = useState("")
    const [city,setCity] = useState("")
    const [district,setDistrict] = useState("")
    const [street,setStreet] = useState("")

    let navigate = useNavigate();
    const handleAddressExplanation = (value) =>{
        setAddressExplanation(value)
    }
    const handleAddressTitle = (value) =>{
      setTitle(value)
  }
   
    const handleCity = (value) =>{
        setCity(value)
    }
    const handleDistrict = (value) =>{
        setDistrict(value)
    }
    const handleStreet = (value) =>{
        setStreet(value)
    }
    const handleForm = () =>{
        sendRequest()
        setAddressExplanation("")
        setTitle("")
        setCity("")
        setDistrict("")
        setStreet("")
        navigate(0);
        
       
    }
    const sendRequest = () =>{
        fetch("http://localhost:8080/address",{
            method : "POST",
            headers : {
                "Authorization": localStorage.getItem("tokenKey"),
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                title: title,
                city : city,
                district: district,
                street: street,
                addressExplanation: addressExplanation,
                userId: parseFloat(localStorage.getItem("currentUser"))

            })
        })
        .then((res) => res.json())
        .then((result) =>  console.log(result))

        .catch((err) => console.log(err))
    }
    return (
        <Form>
    
    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Title of address</Form.Label>
        <Form.Control placeholder="Home,Work,Friend's House" onChange={(e) => handleAddressTitle(e.target.value)}/>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" onChange={(e) => handleAddressExplanation(e.target.value)}/>
      </Form.Group>

     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e) => handleCity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>District</Form.Label>
          <Form.Control onChange={(e) => handleDistrict(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Street</Form.Label>
          <Form.Control onChange={(e) => handleStreet(e.target.value)}/>
        </Form.Group>
      </Row>

     
      <Button variant="primary" onClick={handleForm}>
        Submit
      </Button>
    </Form>
         
      );
    }
    
    export default AddressForm;
