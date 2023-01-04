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
import { Link } from 'react-router-dom';



function Orders() {
    let rows = [];
    const [orders, setOrders] = useState([])
    const [show, setShow] = useState(false)


    useEffect(() => {
        fetch("http://localhost:8080/myOrders",{
          method : "GET",
          headers : {
            "Authorization": localStorage.getItem("tokenKey"),
              "Content-Type":"application/json"
          },
  
      })
        .then((res) => res.json())
        .then((result) =>  setOrders(result))
        .catch((err) => console.log(err)) 
      }, [])

      function showOrders(){
        console.log(orders)
        console.log(orders[0].address)
        for (let i = 0; i < orders.length; i++) {
            rows.push(<MDBRow className="mb-4 d-flex justify-content-between align-items-center">
          
            <MDBCol md="2" lg="2" xl="2">
            <MDBTypography tag="h6" className="text-black mb-0">
               {orders[i].address}
              </MDBTypography>
              <MDBTypography tag="h6" className="text-muted">
              {orders[i].date}
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
        
        
        {showOrders()}
    </Container>
     
    );
  }
  export default Orders;