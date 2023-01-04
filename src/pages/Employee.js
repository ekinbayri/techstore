import { MDBCol,MDBTypography } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';

function Employee() {

    const [unshipped, setUnshipped] = useState([])
    let rows = [];
  useEffect(() => {
    fetch("http://localhost:8080//unshippeds/",{
      method : "GET",  
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
     
     
  })
    .then((res) => res.json())
    .then((result) =>  setUnshipped(result))
    .catch((err) => console.log(err));
  
    
  }, [])
  function employee(){
    for (let i = 0; i < unshipped.length; i++) {
        rows.push( <MDBCol md="2" lg="2" xl="2">
        <MDBTypography tag="h6" className="text-black mb-0">
           {unshipped[i].name}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-muted">
          {unshipped[i].description}
          </MDBTypography>
      <Button onClick = {() => markShipped(unshipped[i].id)}>Mark as shipped</Button>
      </MDBCol>)

    }

  }
  function markShipped(shippedId){
    fetch("http://localhost:8080//markAsShipped/",{
      method : "PUT",  
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
      body: {
            id:shippedId,
      },
     
     
  })
    .then(window.location.reload())
   
    .catch((err) => console.log(err));
  
  }

  return (
    <Container fluid = "true">
    <Card>
    <Card.Header>
    <Card.Title>{"Welcome Employee:" + localStorage.getItem("currentUsername")}</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
     
    </Card.Header>
    <Card.Body>
      {employee()}
    </Card.Body>
  </Card>
  </Container>
  )
}

export default Employee