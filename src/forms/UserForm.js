import React, { useState } from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function UserForm() {
  const [name,setName] = useState("")
  const [surname,setSurname] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [email,setEmail] = useState("")
 
  function handleName (value){
    setName(value)
}
function handleSurname(value) {
    setSurname(value)
}
function handlePhoneNumber(value) {
    setPhoneNumber(value)
}
function handleEmail(value){
     setEmail(value)
}

function handleForm(){
  sendRequest()
}
function sendRequest() {
  fetch("http://localhost:8080/user/",{
      method : "PUT",
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
      body : JSON.stringify({
          id: localStorage.getItem("currentUser"),
          name: name,
          surname : surname,
          phoneNumber: phoneNumber,
          email: email,
      })
  })
  .then((res) => res.json())
  .then((result) =>  console.log(result))
  .catch((err) => console.log(err))
}
  return (
    <section style={{ backgroundColor: '#eee' }}>
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol lg="4">
          <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle"
                style={{ width: '150px' }}
                fluid />
               
              <p className="text-muted mb-1"></p>
              <p className="text-muted mb-4"></p>
              <div className="d-flex justify-content-center mb-2">
                  
      
                  
                
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        
        <MDBCol lg="8">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>First Name:</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBInput  id='typeText' type='text' onChange={(e) => handleName(e.target.value)}/>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Surname:</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBInput id='typeText' type='text'onChange={(e) => handleSurname(e.target.value)} />
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email:</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBInput id='typeEmail' type='email'onChange={(e) => handleEmail(e.target.value)} />
                </MDBCol>
              </MDBRow>
              <hr />
            
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile:</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBInput id='typePhone' type='tel'onChange={(e) => handlePhoneNumber(e.target.value)} />
                </MDBCol>
              </MDBRow>
              
             
            </MDBCardBody>
          </MDBCard>

        
        </MDBCol>
        <MDBCol lg="4">

        <Button variant="primary" onClick={handleForm}> Finish Editing</Button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  )
}

export default UserForm