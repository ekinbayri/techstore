import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header.js';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  let navigate = useNavigate();
  const handleEmail = (value) =>{
      setEmail(value)
  }
  const handlePassword = (value) =>{
      setPassword(value)
  }
  const [show, setShow] = useState(false);
  const sendRequest = (path) =>{
      fetch("http://localhost:8080/auth/" + path,{
          method : "POST",
          headers : {
              "Content-Type":"application/json"
          },
          body : JSON.stringify({
              email: email,
              password: password,

          }),
      })
      .then((res) => res.json())
      .then((result) =>  {localStorage.setItem("tokenKey",result.message); 
                       localStorage.setItem("currentUser",result.userId);
                       localStorage.setItem("currentUsername",result.name)
                       localStorage.setItem("email",email)
                       localStorage.setItem("role",result.role);
                       navigate(0);
                       if(result.role == "admin"){
                        navigate("/adminpanel");
                       }
                       else{
                       navigate("/");
                       }
                       })

      .catch((err) => { setShow(true) })
  }
  const handleLogin = () =>{
      sendRequest("login")
      setEmail("")
      setPassword("")
      
      
  }

  return (
    <Container fluid = "true">
    <Header/>
  
    <Alert show = {show} variant="danger" onClose={() => setShow(false)} dismissible>
    <Alert.Heading>Incorrect login information.</Alert.Heading>
      <p>
        Incorrect e-mail or password. Please try again. 
      </p>
    </Alert>
  
    <Form className = "formCenter">
    <h1> Welcome back</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => handlePassword(e.target.value)}/>
      </Form.Group>
    
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Form>
   
</Container>
  );
}

export default Login;