import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { Button, Container, Row } from 'react-bootstrap';


export default function ManageUser() {
    const [users, setUsers] = useState([])
    const rows = []
    useEffect(() => {
        fetch("http://localhost:8080/user",{
          method : "GET",
          headers : {
              "Authorization": localStorage.getItem("tokenKey"),
              "Content-Type":"application/json"
          },
         
      })
        .then((res) => res.json())
        .then((result) =>  setUsers(result))
        .catch((err) => console.log(err)) 
      }, [])
      function user(){
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].id + " " + users[i].name)
            rows.push(<MDBContainer >
                <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol lg="6" className="mb-4 mb-lg-0">
                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                      <MDBRow className="g-0">
                        <MDBCol md="4" className="gradient-custom text-center text-gray"
                          style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                          <Button style = {{marginTop:'100px',padding:'40px'}} variant = 'outline-danger'>Ban User </Button>
                        </MDBCol>
                        <MDBCol md="8">
                          <MDBCardBody className="p-4">
                            <MDBTypography tag="h6">Information</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Name</MDBTypography>
                                <MDBCardText className="text-muted">{users[i].name + " " + users[i].surname}</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">User Id</MDBTypography>
                                <MDBCardText className="text-muted">{users[i].id}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
          
                          
                            <hr className="mt-0 mb-4" />
                            <MDBRow className="pt-1">
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Email</MDBTypography>
                                <MDBCardText className="text-muted">{users[i].email}</MDBCardText>
                              </MDBCol>
                              <MDBCol size="6" className="mb-3">
                                <MDBTypography tag="h6">Phone</MDBTypography>
                                <MDBCardText className="text-muted">{users[i].phoneNumber}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
          
                            <div className="d-flex justify-content-start">
                              <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                              <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                              <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                            </div>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>);

        }
        return <Row>{rows}</Row>;
    }
  return (
    user()
  )
}