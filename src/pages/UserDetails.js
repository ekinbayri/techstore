



import React, { useEffect, useState } from 'react';
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
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

function UserDetails() {

    const [response,setResponse] = useState("null")
    
    function getItems(){
        fetch("http://localhost:8080/user/" + localStorage.getItem("currentUser"),{
          method : "GET",
          headers : {
              "Authorization": localStorage.getItem("tokenKey"),
              "Content-Type":"application/json"
          },
         
      })
        .then((res) => res.json())
        .then((result) => setResponse(result))
        .catch((err) => console.log(err)) 
      }
    
     
      
    

      useEffect(() => {
        getItems()
        /*
        response.name + " " + response.surname
        response.email*/
      }, []);



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
                 
                <p className="text-muted mb-1">{response.name}</p>
                <p className="text-muted mb-4">{ response.email}</p>
                <div className="d-flex justify-content-center mb-2">
                    

                    <Button className = "ms-1" variant="outline-primary" >Edit</Button>
                  
                </div>
              </MDBCardBody>
            </MDBCard>

         
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{response.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Surname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{response.surname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{response.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{response.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{response.phoneNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
               
              </MDBCardBody>
            </MDBCard>

          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default UserDetails;


