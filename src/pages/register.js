import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Register() {
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let navigate = useNavigate();
    const handleName = (value) =>{
        setName(value)
    }
    const handleSurname = (value) =>{
        setSurname(value)
    }
    const handleEmail = (value) =>{
        setEmail(value)
    }
    const handleNumber = (value) =>{
        setPhoneNumber(value)
    }
    const handlePassword = (value) =>{
        setPassword(value)
    }
    const sendRequest = (path) =>{
        fetch("http://localhost:8080/auth/" + path,{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                name : name,
                surname: surname,
                phoneNumber: phoneNumber,
                email: email,
                password: password,

            }),
        })
        .then((res) => res.json())
        .then((result) =>  {localStorage.setItem("tokenKey",result.message); 
                         localStorage.setItem("currentUser",result.userId);
                         localStorage.setItem("currentUsername",name);
                        
                         navigate(0);
                         navigate("/");
                         })

        .catch((err) => console.log(err))
    }
    const handleRegister = () =>{
        sendRequest("register")
        setName("")
        setSurname("")
        setEmail("")
        setPhoneNumber("")
        setPassword("")
        

    }


  return (

    <Container fluid = "true">
    <Header/>
   
    <Form className = "formCenter">
    <h1> Register Form</h1>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" onChange={(e) => handleName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="surname" placeholder="Enter surname" onChange={(e) => handleSurname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="phonenumber" placeholder="Enter phone number"  onChange={(e) => handleNumber(e.target.value)} />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => handleEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => handlePassword(e.target.value)} />
      </Form.Group>
    
      <Button variant="primary" onClick={handleRegister}>
        Register
      </Button>
    </Form>
</Container>
  );
}

export default Register;