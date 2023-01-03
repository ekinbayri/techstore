import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
  } from "mdb-react-ui-kit";
import { Button, Container, Row } from 'react-bootstrap';
function EditProductForm() {
  const [products, setProducts] = useState([])
  let rows = [];
  useEffect(() => {
    fetch("http://localhost:8080/products",{
      method : "GET",
      headers : {
          "Content-Type":"application/json"
      },

  })
    .then((res) => res.json())
    .then((result) =>  setProducts(result))
    .catch((err) => console.log(err)) 
  }, [])
  function showProduct(){
    for (let i = 0; i < products.length; i++) {
        rows.push(  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
        <MDBCol md="2" lg="2" xl="2">
          <MDBCardImage
            src = {products[i].photo}
            fluid className="rounded-3" alt="Cotton T-shirt" />
        </MDBCol>
        <MDBCol md="2" lg="2" xl="2">
          <MDBTypography tag="h6" className="text-muted">
          {products[i].description}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-black mb-0">
           {products[i].name}
          </MDBTypography>
        </MDBCol>

         <MDBCol md="2" lg="2" xl="2" >
          <MDBTypography tag="h6" className="mb-0">
          Category: {products[i].category}
          </MDBTypography>
        </MDBCol>



        <MDBCol md="2" lg="2" xl="2" className="d-flex align-items-center">
      
        <MDBTypography tag="h6" className="mb-0">
         Quantity: {products[i].quantity}
          </MDBTypography>
    
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" >
          <MDBTypography tag="h6" className="mb-0">
          {products[i].price}$
          </MDBTypography>
        </MDBCol>

       
        
        <MDBCol md="3" lg="2" xl="2" >
          <MDBTypography tag="h6" className="mb-0">
          <Button variant = 'success'>Edit product</Button>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
          <a href="#!" className="text-muted">
            <MDBIcon fas icon="times" />
          </a>
        </MDBCol>
        <hr className="my-4" />
      
      </MDBRow> 
      )
    }
    return <Row>{rows}</Row>;
   
}
  return (
    <Container>
        {showProduct()}
    </Container>
    
  )
}

export default EditProductForm