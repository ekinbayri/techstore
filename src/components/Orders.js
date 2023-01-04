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
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import ProductUpdateForm from '../forms/ProductUpdateForm';



function Orders() {
    let rows = [];
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [show, setShow] = useState(false)


    useEffect(() => {
        fetch("http://localhost:8080/myOrders",{
          method : "GET",
          headers : {
              "Content-Type":"application/json"
          },
  
      })
        .then((res) => res.json())
        .then((result) =>  console.log(result))
        .catch((err) => console.log(err)) 
      }, [])

      function showProducts(){
        for (let i = 0; i < products.length; i++) {
            rows.push(<MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
              <MDBCardImage
                src = {products[i].photo}
                fluid className="rounded-3" alt="Cotton T-shirt" />
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2">
            <MDBTypography tag="h6" className="text-black mb-0">
               {products[i].name}
              </MDBTypography>
              <MDBTypography tag="h6" className="text-muted">
              {products[i].description}
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
              
         
            <MDBCol md="1" lg="1" xl="1" className="text-end">
              <a href="#!" className="text-muted">
                <MDBIcon fas icon="times" />
              </a>
            </MDBCol>
            <hr className="my-4" />
            {show ? <ProductUpdateForm productId={products[i].id} product={products[i]}></ProductUpdateForm> : null}
          
          </MDBRow> 
          )
        }
        return <Row>{rows}</Row>;
       
    }

    return (
<Container fluid = "true">
    
    
         {showProducts()}
   
    
</Container>
     
    );
  }
  export default Orders;